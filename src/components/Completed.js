const Completed = (props) => {
  return (
    <div className="completed-wrapper">
      <h3>Completed Tasks:</h3>
      <ul>
        {props.completedList.map((task, idx) => (
          <li id={idx}>
            <span className="task-date completed">{task.date}</span>
            <span className="task-content completed">{task.task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Completed;
