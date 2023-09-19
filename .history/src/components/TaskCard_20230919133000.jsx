import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from '../context/TaskContext';
import Confetti from 'react-confetti';
import useWindowSize from '../hooks/useWindowSize';

function TaskList() {
  const { tasks } = useContext(TaskContext);
  const allTasksCompleted = tasks.every(task => task.completed);
  const windowSize = useWindowSize();

  // Ajusta los estilos en función del tamaño de la ventana
  const gridStyle = windowSize.width < 360 ? 'grid-cols-1' : 'grid-cols-4';

  if (tasks.length === 0) {
    return (
      <h1 className="text-indigo-500 text text-4xl font-bold text-center">
        No hay tareas aún
      </h1>
    )
  }

  return (
    <div className={`grid ${gridStyle} gap-4 p-4`}>
      {allTasksCompleted && <Confetti width={window.innerWidth} height={window.innerHeight} />}  
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
