import { useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'June 1st at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting',
      day: 'June 14th at 1:00pm',
      reminder: true,
    },  
    {
      id: 3,
      text: 'Hiking',
      day: 'June 10th at 11:00am',
      reminder: false,
    },
  ])

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
    }

    // Toggle Reminder
    const toggleReminder = (id) => {
      setTasks(
        tasks.map((task) => 
        task.id == id ? { ...task, reminder: 
        !task.reminder } : task
        )
      )
    }
  return (
    <div className='container'>
      <Header />
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete=
      {deleteTask} onToggle={toggleReminder} /> 
      ) : (
        'No Tasks To Show'
      )}
    </div>
  )
}

export default App;
