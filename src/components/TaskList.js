const TaskList = (props) => {
  console.log(props);
  return (
    <div className="to-do-wrapper">
      <h3>To Do List:</h3>
      <ul>
        {props.toDoList.map((task, idx) => (
          <li id={`completed${idx}`}>
            <span className="task-date">{task.date}</span>
            <span className="task-content">{task.task}</span>
            <br/>
            <button onClick={() => props.handleDelete(idx)}>Delete</button>
            <button onClick={() => props.handleComplete(idx)}>Complete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
