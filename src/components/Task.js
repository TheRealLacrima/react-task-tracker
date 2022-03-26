const Task = ({ task }) => {
  return (
    <div className='tasks'>
      <h3 key={task.id}>{task.text}</h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task