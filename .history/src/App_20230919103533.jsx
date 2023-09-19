import TaskList from './components/TaskList'
import TaskForm from './components/TaskForm'

function App() {    
  return (
    <main className='bg-black min-h-screen'>  {/* Agrega la clase min-h-screen aquí */}
      <div className='container mx-auto p-10'>
        <TaskForm/>
        <TaskList />
      </div>
    </main>
  )
}

export default App;

