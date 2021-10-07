import { useState } from "react";
import { TaskItem } from "./TaskItem";
function App() {
  const [tasks, setTasks] = useState([
    {
      isCompleted: false,
      name: "2 series de  muscle up de 4 repeticiones.",
    },
    {
      isCompleted: false,
      name: "4 series de pull up de 10 repeticiones sin peso.",
    },
    {
      isCompleted: false,
      name: "4 series de pull up abiertas de 10 repeticiones con peso.",
    },
    {
      isCompleted: false,
      name: "4 series de pull up cerradas de 10 repeticiones con peso.",
    },
    {
      isCompleted: false,
      name: "4 series de pull up invertidas de 10 repeticiones con peso.",
    },
    {
      isCompleted: false,
      name: "4 series de pull up de 10 repeticiones con peso.",
    },    
    {
      isCompleted: false,
      name: "4 series de 12 repeticiones de Triceps en barra ",
    },
    {
      isCompleted: false,
      name: "4 series de 12 repeticiones de fondos",
    },
    {
      isCompleted: false,
      name: "4 series de 15 repetciones de mancuerna codo pegado en la cabeza para triceps",
    },
    {
      isCompleted: false,
      name: "4 series de 15 repetciones de mancuerna invertida para triceps",
    }
  ])
  const [textValue, setTextValue] = useState("");
  const handleTaskChange = (index) => () => {
    const arr = [...tasks];
    arr[index].isCompleted = !arr[index].isCompleted;
    setTasks(arr);
  };
  const newTask = (name) => {
    const newTask = {
      isCompleted: false,
      name: name,
    };
    setTasks([...tasks, newTask]);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(textValue);
    newTask(textValue);
  };
  const handleTextChange = (event) => {
    const value = event.target.value;
    setTextValue(value);
  }
  return (
    <body bgcolor="096D01">
    <main>
      <form onSubmit={handleSubmit}>
        
          Rutina de espalda y triceps
        
        
      <body bgcolor="#F08F04">
        <input 
          value={textValue}
          onChange={handleTextChange}
          type="text"
          placeholder="Escriba un nuevo ejercicio a la rutina"
        />
        <button>Crear nuevo ejercicio</button>  
        </body>   
      </form>
      <body bgcolor="#18B200">
      <ul>
        {tasks.map((task,index) => {
          return (
            <TaskItem
              isChecked={task.isCompleted}
              taskName={task.name}
              onTaskChange={handleTaskChange(index)}
            />
          );
        })}
      </ul>
    
      </body>
      
    </main>
    </body>
     
    
  );
}

export default App;
