import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [f, setF] = useState({name: "",date: "",desc: ""});

  const addTask = (e) => {
    e.preventDefault();
    if (!f.name || !f.date) return;
    setTasks([...tasks, { ...f, done: false }]);
    setF({name: "",date: "",desc: ""});
  };

  const filteredTasks = tasks.filter((t) => {
    if (filter === "done") return t.done;
    if (filter === "notdone") return !t.done;
    return true;
  });

  return (
    <div className="app">
      <h2>Reminder App</h2>

      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder="Task Name"
          value={f.name}
          onChange={(e) => setF({ ...f, name: e.target.value })}/>

        <input
          type="date"
          value={f.date}
          onChange={(e) => setF({ ...f, date: e.target.value })}/>

        <input
          type="text"
          placeholder="Desc"
          value={f.desc}
          onChange={(e) => setF({ ...f, desc: e.target.value })}/>
        <button>Add Task</button>
      </form>

      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("done")}>Done</button>
        <button onClick={() => setFilter("notdone")}>Not Done</button>
      </div>

      {filteredTasks.map((t, i) => (
        <div key={i}onClick={() =>
            setTasks(tasks.map((item, index) =>index === i? { ...item, done: !item.done }: item))}>
          <h4>{t.name}</h4>
          <p>Due Date: {t.date}</p>
          {t.desc && <p>Description: {t.desc}</p>}
        </div>
      ))}
    </div>
  );
}
