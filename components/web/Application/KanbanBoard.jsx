import React, { useEffect, useState } from "react";
import Card from "./SubComponents/card";
import Column from "./SubComponents/column";
import KanbanFilterComponent from "./SubComponents/KanbanFilter";
import getAppliedJobPostApi from "services/api/getAppliedJobPost";
import { useQuery } from "react-query";
import { useSession, signOut } from 'next-auth/react';





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
          name: e.jobDetail.jobTitle,
          category: e.jobApplications.find(e => e.applicationUserId === session.user.id).applicationStatus,
        }
      })
      setTasks([...newArr]);
    }
  }, [data, session]);

  const onDragOver = (ev) => {
    ev.preventDefault();
  };

  const onDragStart = (ev, name, id) => {
    setClickedTileId(id)
    ev.dataTransfer.setData("id", id);
  };

  const onDrop = (ev, cat) => {
    setClickedTileId('')
    const id = ev.dataTransfer.getData("id");

    let fTasks = tasks.filter((task) => {
      if (task._id == id) {
        task.category = cat;
      }
      return task;
    });
    console.log(cat)
    console.log(id)
    setTasks([...fTasks]);
  };

  const handleKeyPress = (ev) => {
    if (ev.key == "Enter" && ev.target.value != "") {
      setTasks([...tasks, { name: ev.target.value, category: "todo" }]);
      ev.target.value = " ";
    }
  };

  const tasksArr = {
    applied: [],
    phoneScreening: [],
    interview: [],
    offer: [],
    hired: [],
  };

  tasks.forEach((t) => {
    tasksArr[t.category].push(
      <div
        className={`item-container ${isClickedTileId === t._id ? "opacity-50 border-2 border-dark-blue-500  rounded-md" : ""}`}
        key={t.name}
        draggable
        onDragStart={(e) => onDragStart(e, t.name, t._id)}
      >
        <Card componentToPassDown={t} />
      </div>
    );
  });



  return (
    <>
      <div className="flex flex-col h-full">
        <KanbanFilterComponent />
        <div className="-mt-24 flex  kanban-height max-w-7xl mx-auto px-4 sm:px-6 lg:px-1 bg-white rounded-lg">
          <main className="flex-1 overflow-auto">
            <div className="inline-flex h-full p-3 space-x-3 overflow-hidden">
              {Object.keys(tasksArr).map((item, i) =>
                <div
                  key={i}
                  onDragOver={(e) => onDragOver(e)}
                  onDrop={(e) => onDrop(e, item)}
                  className="flex flex-col flex-shrink-0 bg-gray-100 rounded-md w-60"
                >
                  <Column.Header>{item}</Column.Header>
                  <Column.Body>{tasksArr[item]}</Column.Body>
                </div>
              )}
            </div>
          </main>

        </div>
      </div>
    </>
  );
}
