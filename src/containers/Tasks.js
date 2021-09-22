import * as React from 'react'
import '../css/task.css'
import Task from '../components/task/Task'
import { Grid, Typography } from '@mui/material'

const Tasks = ({ tasks, boardId, setTasks, mode }) => {
  const completeTask = (task) => {
    const updatedTask = { ...task, completed: !task.completed }

    updateTask(updatedTask)
  }

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    )

    fetch(`http://localhost:9393/tasks/${updatedTask.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify({
        board_id: boardId,
        completed: updatedTask.completed,
        description: updatedTask.description,
        due_date: updatedTask.due_date,
        name: updatedTask.name,
        priority: updatedTask.priority,
        status: updatedTask.status,
      }),
    })

    setTasks(updatedTasks)
  }

  const handleDeleteTask = (deleteTask) => {
    const updatedTasks = tasks.filter((task) => task.id !== deleteTask.id)

    fetch(`http://localhost:9393/tasks/${deleteTask.id}`, {
      method: 'DELETE',
    })
    setTasks(updatedTasks)
  }

  return (
    <Grid container>
      {tasks.length !== 0 ? (
        tasks.map((task) => (
          <Task
            task={task}
            key={`task-${task.id}`}
            mode={mode}
            completeTask={completeTask}
            updateTask={updateTask}
            handleDeleteTask={handleDeleteTask}
          />
        ))
      ) : (
        <Grid container item alignItems='center' justifyContent='center'>
          <Typography
            variant='h6'
            component='p'
            gutterBottom
            sx={{ color: (theme) => theme.palette.text.disabled }}>
            No Tasks Yet
          </Typography>
        </Grid>
      )}
    </Grid>
  )
}

export default Tasks
