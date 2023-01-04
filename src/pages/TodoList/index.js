// import "./index.scss";
import { useState, useEffect } from "react";
import Add from "../../components/Add";
import TaskList from "../../components/TaskList";
import Completed from "../../components/Completed";

const ToDoList = () => {
  const [newTask, setNewTask] = useState({});
  const [toDoList, setToDoList] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  const [inputClass, setInputClass] = useState({
    task: "",
    date: "",
  });

  useEffect(() => {
    setInputClass((prevState) => {
      return { ...prevState, task: "", date: "" };
    });
  },[newTask]);

  const setTask = (event) => {
    setNewTask((prevState) => {
      return { ...prevState, task: event.target.value };
    });
  };

  const setDate = (event) => {
    setNewTask((prevState) => {
      return { ...prevState, date: event.target.value };
    });
  };

  const handleNewTask = (event) => {
    event.preventDefault();

    if (newTask.task && newTask.date) {
      setToDoList((prevState) => [...prevState, newTask]);
      console.log(toDoList);
      setNewTask((prevState) => {
        return { ...prevState, task: "" };
      });
      setNewTask((prevState) => {
        return { ...prevState, date: "" };
      });
    } else {
      if (!newTask.task) {
        setInputClass((prevState) => {
          return { ...prevState, task: "no-input" };
        });
        console.log(inputClass);
      }
      if (!newTask.date) {
        setInputClass((prevState) => {
          return { ...prevState, date: "no-input" };
        });
        console.log(inputClass);
      }
    }
  };

  const handleDelete = (idx) => {
    setToDoList((prevState) => prevState.filter((_, i) => i !== idx));
  };

  const handleComplete = (idx) => {
    setCompletedList((prevState) => [...prevState, toDoList[idx]]);
    setToDoList((prevState) => prevState.filter((_, i) => i !== idx));
    console.log(completedList);
  };

  return (
    <div className="page">
      <Add
        setTask={setTask}
        setDate={setDate}
        handleNewTask={handleNewTask}
        newTask={newTask}
        class={inputClass}
      />
      <TaskList
        handleDelete={handleDelete}
        handleComplete={handleComplete}
        toDoList={toDoList}
      />
      <Completed completedList={completedList} />
    </div>
  );
};

export default ToDoList;
