
function TaskList(props) {
    

    if (props.tasks.length === 0){
        return <h1>Noy hay tareas aún</h1> 
       }


  return (
    <div>
      {props.tasks.map((task) => (
        <div key={task.id}>            
            <h1>{task.title}</h1>
            <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskList
