import { useState } from "react";

function TaskForm({ createTask }) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();     
        createTask({
            title,
            description
        });
        setTitle('')
        setDescription('')

    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Escribe tu tarea"
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea placeholder="Escribe la descripciónde la tarea"
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>

            <button>
                Guardar
            </button>
        </form>
    );
}

export default TaskForm;
