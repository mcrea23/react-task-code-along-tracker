const tasks = [
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

]
const Tasks = () => {
  return (
    <>
    {tasks.map((task) => 
    (<h3 key={task.id}>{task.text}</h3>
    ))}
    </>
  )
}

export default Tasks
