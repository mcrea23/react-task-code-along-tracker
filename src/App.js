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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
