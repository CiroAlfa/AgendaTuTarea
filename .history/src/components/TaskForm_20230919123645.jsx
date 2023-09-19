import { useState, useContext } from "react";
import { TaskContext } from '../context/TaskContext';
import useWindowSize from '../hooks/useWindowSize';

function TaskForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const { createTask } = useContext(TaskContext);
    const windowSize = useWindowSize();

    // Ajusta los estilos en función del tamaño de la ventana
    const formStyle = windowSize.width < 768 ? 'p-2' : 'p-10';

    const handleSubmit = (e) => {
        e.preventDefault();     
        createTask({
            title,
            description,
        });
        setTitle('');
        setDescription('');
    }

    return (
        <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className={`bg-indigo-800 ${formStyle} mb-4 rounded-md shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110`}>
                <h1 className="text-2xl font-bold text-white mb-3">Crea Tu Tarea</h1>
                <input
                    placeholder="Escribe tu tarea"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className="bg-indigo-300 p-3 w-full mb-2 rounded-md"
                    autoFocus
                />
                <textarea placeholder="Escribe la descripciónde la tarea"
                    onChange={(e) => setDescription(e.target.value)}
                    className="bg-indigo-300 p-3 w-full mb-2 rounded-md"
                    value={description}
                ></textarea>
                <button
                className="bg-green-500 px-3 py-1 text-white rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                    Guardar
                </button>
            </form>
        </div>
    );
}

export default TaskForm;

