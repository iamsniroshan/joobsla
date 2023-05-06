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
      const newArr = data.data.map((e,i) => {
        return {
          _id: e._id,
          jobTitle: e.jobDetail.jobTitle,
          jobType: e.jobDetail.jobType.value,
          sortDesc: e.jobDescription.sortDesc,
          applicationStatus: e.jobApplications.find(e => e.applicationUserId === session.user.id).applicationStatus,
          applicationId: e.jobApplications.find(e => e.applicationUserId === session.user.id)._id,
          updatedAt: e.jobApplications.find(e => e.applicationUserId === session.user.id).updatedAt,
          createdAt: e.jobApplications.find(e => e.applicationUserId === session.user.id).createdAt,
          order: i
        }
      })
      newArr.sort((a, b) => a.order - b.order);
      setTasks([...newArr]);
    }
  }, [data, session]);


  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const sourceIndex = result.source.index;
    const destinationIndex = result.destination.index;
    console.log('xxxxxxxx')
    const newArr = moveArrayObject(tasks, result);
    let draggedObj = {}
    let fTasks = newArr.filter((task) => {
      if (task._id == result.draggableId) {
        task.applicationStatus = result.destination.droppableId;
        draggedObj = task
      }
      return task;
    });
    fTasks.sort((a, b) => a.order - b.order);
    updateApplicationStatusApiHandler(draggedObj);
    setTasks([...fTasks]);
  };

  function moveArrayObject(arr, result) {
    if(result.destination.droppableId === result.source.droppableId) {
      const destinationArr = arr.filter(e => e.applicationStatus === result.destination.droppableId)
      const remainingArr = arr.filter(e => e.applicationStatus !== result.destination.droppableId)
      const [removedElement] = destinationArr.splice(result.source.index, 1);
      destinationArr.splice(result.destination.index, 0, removedElement);
      const comArr = [...destinationArr, ...remainingArr]
      comArr.map((e,index) => e.order = index)
      return comArr;
    } else {
      const destinationArr = arr.filter(e => e.applicationStatus === result.destination.droppableId)
      const sourceArr = arr.filter(e => e.applicationStatus === result.source.droppableId)
      const remainingArr = arr.filter(e => e.applicationStatus !== result.source.droppableId && e.applicationStatus !== result.destination.droppableId)
      const [removedElement] = sourceArr.splice(result.source.index, 1);
      destinationArr.splice(result.destination.index, 0, removedElement);
      const comArr = [...destinationArr,...sourceArr, ...remainingArr]
      comArr.map((e,index) => e.order = index)
      return comArr;
    }
  }
  


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
                              borderRadius: '0.5rem',
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
                                        className={`item-container bg-white rounded-lg ${snapshot.draggingFromThisWith === t._id
                                          ? "bg-amber-50"
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
