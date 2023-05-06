import React, { useEffect, useState } from "react";
import Card from "./SubComponents/card";
import Column from "./SubComponents/column";
import KanbanFilterComponent from "./SubComponents/KanbanFilter";
import getAppliedJobPostApi from "services/api/getAppliedJobPost";
import { useQuery } from "react-query";
import { useSession, signOut } from 'next-auth/react';
import updateApplicationStatusApi from "services/api/updateJobApplicationStatus";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';




export default function KanbanBoardComponent() {
  const [tasks, setTasks] = useState([]);
  const [isClickedTileId, setClickedTileId] = useState('');
  const { data: session, status: loading } = useSession();
  const { isLoading, error, data } = useQuery('appliedJobPostUseQuery', () => getAppliedJobPostApi());

  useEffect(() => {
    if (data && session) {
      const newArr = data.data.map(e => {
        return {
          _id: e._id,
          jobTitle: e.jobDetail.jobTitle,
          jobType: e.jobDetail.jobType.value,
          sortDesc: e.jobDescription.sortDesc,
          applicationStatus: e.jobApplications.find(e => e.applicationUserId === session.user.id).applicationStatus,
          applicationId: e.jobApplications.find(e => e.applicationUserId === session.user.id)._id,
          updatedAt: e.jobApplications.find(e => e.applicationUserId === session.user.id).updatedAt,
          createdAt: e.jobApplications.find(e => e.applicationUserId === session.user.id).createdAt,
        }
      })
      setTasks([...newArr]);
    }
  }, [data, session]);


  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const sourceIndex = result.source.index;
    const destinationIndex = result.destination.index;
    let draggedObj = {}
    let fTasks = tasks.filter((task) => {
      if (task._id == result.draggableId) {
        task.applicationStatus = result.destination.droppableId;
        draggedObj = task
      }
      return task;
    });
    updateApplicationStatusApiHandler(draggedObj);
    setTasks([...fTasks]);
  };


  const updateApplicationStatusApiHandler = (draggedObj) => {
    updateApplicationStatusApi(draggedObj).then(item => {
      if (item.status === 'success') {
        console.log('update application status success');
      } else {
        console.log('update application status failed!!');
      }
    });
  }


  const tasksArr = {
    applied: [],
    phoneScreening: [],
    interview: [],
    offer: [],
    hired: [],
  };

  tasks.forEach((t) => {
    tasksArr[t.applicationStatus].push(t);
  });


  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex flex-col h-full">
          <div className="flex flex-col h-full">
            <KanbanFilterComponent />
            <div className="-mt-24 flex  kanban-height max-w-7xl mx-auto px-4 sm:px-6 lg:px-1 bg-white rounded-lg">
              <main className="flex-1 overflow-auto">
                <div className="inline-flex h-full p-3 space-x-3 overflow-hidden">
                  {Object.keys(tasksArr).map((item, i) =>
                    <div
                      key={i}
                      className="flex flex-col flex-shrink-0 bg-gray-100 rounded-md w-60"
                    >
                      <Column.Header>{item}</Column.Header>
                      <Column.Body>
                        <Droppable droppableId={item} key={item}>
                          {(provided, snapshot) => (
                            <div {...provided.droppableProps} ref={provided.innerRef} style={{
                              borderRadius: '0.375rem',
                              minHeight: 'calc(100vh - 225px)',
                              borderRadius: '4px',
                              backgroundColor: snapshot.isDraggingOver ? '#f8fafc' : '',
                            }}>
                              {tasksArr[item].map((t, index) => (
                                <Draggable key={t._id} draggableId={t._id} index={index}>
                                  {(provided) => (
                                    <div
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      ref={provided.innerRef}
                                      className="my-3"
                                    >
                                      <div
                                        className={`item-container ${isClickedTileId === t._id
                                          ? "opacity-50 border-2 border-dark-blue-500  rounded-md"
                                          : ""
                                          }`}
                                      >
                                        <Card componentToPassDown={t} />
                                      </div>
                                    </div>
                                  )}
                                </Draggable>
                              ))}
                              {provided.placeholder}
                            </div>
                          )}
                        </Droppable>
                      </Column.Body>
                    </div>
                  )}
                </div>
              </main>
            </div>
          </div>
        </div>
      </DragDropContext>
    </>
  );
}
