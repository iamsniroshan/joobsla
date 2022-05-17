import React, { useState,Fragment } from "react";

import Card from "./SubComponents/card";
import Column from "./SubComponents/column";
import { Menu, Popover, Transition } from '@headlessui/react'
import KanbanFilterComponent from "./SubComponents/KanbanFilter";





const user = {
  name: 'Chelsea Hagon',
  email: 'chelseahagon@example.com',
  role: 'Human Resources Manager',
  imageUrl:
    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}



export default function KanbanBoardComponent() {
  const [tasks, setTasks] = useState([
    {
      _id: '1',
      name: "Selvaraja niroshan",
      category: "applied",
    },
    {
      _id: '2',
      name: "Sinthujan",
      category: "applied",
    },
    {
      _id: '3',
      name: "Nalina",
      category: "applied",
    }

  ]);
  const [isClickedTileId, setClickedTileId] = useState('');

  const onDragOver = (ev) => {
    console.log("xxxxxxxxxxx");
    ev.preventDefault();
    console.log("1");
  };

  const onDragStart = (ev, name,id) => {
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
        onDragStart={(e) => onDragStart(e, t.name,t._id)}
      >
        <Card componentToPassDown={t}/>
      </div>
    );
  });

  return (
    <>
    <div className="flex flex-col h-full">
 
    <KanbanFilterComponent/>
      <div className="-mt-24 flex  kanban-height max-w-7xl mx-auto px-4 sm:px-6 lg:px-1 bg-white rounded-lg">
          <main className="flex-1 overflow-auto">
            <div className="inline-flex h-full p-3 space-x-3 overflow-hidden">
            {Object.keys(tasksArr).map((item,i) => 
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
