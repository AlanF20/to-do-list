import { useState } from 'react'
import Button from './components/Button'
function App() {

  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])
  const handleSubmit = (e) =>{
    e.preventDefault()
    setTasks([...tasks, task])
    setTask('')
  }
  return (
    <div className='app'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='task'>
          Task: <input value={task} onChange={e => setTask(e.target.value)} type='text' ></input>
        </label>
        <Button />
      </form>
      <ul className='app__ul'>
        {tasks.map((tarea, index) => {
          return(
            <li className='app__ul-li' key={index}>
              <label className='app__ul-li-label' htmlFor={index}>
               <input className='app__ul-li-label-check' id={index} type='checkbox'></input> {tarea}
              </label>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
