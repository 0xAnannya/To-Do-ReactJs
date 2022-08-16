const Form = ({ inputdata, setinputData, todos, setodos, setstatus }) => {
  const inputHandler = (e) => {
    setinputData(e.target.value);
  };

  const submitToDoHandler = (e) => {
    e.preventDefault();
    setodos([
      ...todos,
      { text: inputdata, completed: false, id: Math.random() * 100 },
    ]);
    setinputData("");
  };

  const statusHandler = (e) => {
    setstatus(e.target.value);
  };

  return (
    <form>
      <input
        value={inputdata}
        onChange={inputHandler}
        type="text"
        className="todo-input"
      />

      <button onClick={submitToDoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
