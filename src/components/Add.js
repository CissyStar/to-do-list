const Add = (props) => {
  return (
    <form className="input-wrapper">
      <label htmlFor="todo">Add New Task: </label>
      <br />
      <input
        type="text"
        name="todo"
        value={props.newTask.task}
        onChange={props.setTask}
        className={props.class.task}
      />
      <br />
      <input
        name="date"
        type="date"
        value={props.newTask.date}
        onChange={props.setDate}
        className={props.class.date}
      />
      <br />
      <input type="submit" value="Add" onClick={props.handleNewTask} />
    </form>
  );
};

export default Add;
