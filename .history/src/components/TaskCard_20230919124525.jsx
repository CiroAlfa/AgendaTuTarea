import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import useWindowSize from '../hooks/useWindowSize';

function TaskCard({ task }) {
    const { deleteTask, completeTask } = useContext(TaskContext);
    const windowSize = useWindowSize();

    // Ajusta los estilos en función del tamaño de la ventana
    const cardStyle = windowSize.width < 768 ? 'text-xs' : 'text-sm';
    const buttonText = windowSize.width < 480 ? 'E T' : 'Eliminar Tarea';

    return (
        <div className={`bg-indigo-800 text-white p-4 rounded-md shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ${task.completed ? 'opacity-50' : ''}`}>
            <h1 className={`text-2xl font-bold capitalize ${cardStyle}`}>{task.title}</h1>
            <p className={`text-gray-300 ${cardStyle}`}>{task.description}</p>
            <button 
            className='bg-green-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'  
            onClick={() => deleteTask(task.id)}>
                {buttonText}
            </button>
            <button 
            className='bg-blue-500 px-2 py-1 rounded-md mt-4 ml-4 hover:bg-red-400 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'  
            onClick={() => completeTask(task.id)}>
                Tarea Terminada
            </button>
        </div>
    );
}

export default TaskCard;
