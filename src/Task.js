// export const Task = (props) => {
//   return (
//     <div
//       className="listt"
//       style={{ backgroundColor: props.completed ? "gray" : "whitesmoke" }}
//     >
//       <h2>{props.taskName}</h2>
//       <button onClick={() => props.completedTask(props.id)}>Complete</button>
//       <button onClick={() => props.deleteTask(props.id)}>X</button>
//     </div>
//   );
// };

// import "./App.css";
// import { Task } from "./Task";
// import { useState } from "react";

// function App() {
//   const [todoList, setToDoList] = useState([]);
//   const [newTask, setNewTask] = useState("");
//   const grabChange = (event) => {
//     setNewTask(event.target.value);
//   };
//   const addTask = () => {
//     const task = {
//       id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
//       taskName: newTask,
//       completed: false,
//     };
//     setToDoList([...todoList, task]);
//   };
//   const deleteTask = (id) => {
//     setToDoList(todoList.filter((task) => task.id !== id));
//   };
//   const completeTask = (id) => {
//     setToDoList(
//       todoList.map((task) => {
//         if (task.id === id) {
//           return { ...task, completed: true };
//         } else {
//           return task;
//         }
//       })
//     );
//   };

//   return (
//     <div className="App">
//       <div className="addTask">
//         <input onChange={grabChange} className="field" />
//         <button onClick={addTask} className="btn">
//           Add Task
//         </button>
//       </div>
//       <div className="list">
//         {todoList.map((task) => {
//           return (
//             <Task
//               taskName={task.taskName}
//               id={task.id}
//               deleteTask={deleteTask}
//               completedTask={completeTask}
//               completed={task.completed}
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default App;

// import "./App.css";
// import Axios from "axios";
// import { useEffect, useState } from "react";

// function App() {
//   const [catFact, setCatFact] = useState("");

//   const fetchCatFact = () => {
//     Axios.get("https://catfact.ninja/fact").then((res) => {
//       setCatFact(res.data.fact);
//     });
//   };
//   useEffect(() => {
//     fetchCatFact();
//   }, []);

//   return (
//     <div className="App">
//       <button onClick={fetchCatFact}>Generate Cat Fact</button>
//       <p>{catFact}</p>
//     </div>
//   );
// }

// export default App;
