import React, { useState } from 'react'

import { Header } from '../Header'
import { TaskTable } from '../TaskTable'
import {
  getCurrentDate 
} from 'utils/date'

import './App.scss'

export const App = () => {

  const createTask = (desc, status, priority, plannedEndDate, actualEndDate) => {
    return {
      id: Math.random().toString(36).substr(2, 9),
      desc,
      status,
      priority,
      plannedEndDate,
      actualEndDate
    }
  }

  const [tasks, setTasks] = useState([])

  const [searchText, setSearchText] = useState('')
  const [filter, setFilter] = useState('Всего')

  const onSearchChange = searchText => setSearchText(searchText)
  const onFilterChange = filter => setFilter(filter)
  const onDeleteTask = id => setTasks(tasks.filter(task => task.id !== id))
  
  const onAddTask = (desc, priority, status, endDate) => {
    setTasks([
      ...tasks, 
      createTask(desc, priority, status, endDate)
    ])
  }

  const onEditTask = (id, desc, status, priority, endDate) => {
    const oldTaskIdx = tasks.findIndex(task => task.id === id )
    const editedTask = {
      ...tasks[oldTaskIdx],
      desc,
      status,
      priority,
      plannedEndDate: endDate,
      actualEndDate: status === 'Завершено' ? getCurrentDate() : null
    }
          
    setTasks([
      ...tasks.slice(0, oldTaskIdx),
      editedTask,
      ...tasks.slice(oldTaskIdx + 1)
    ])
  }

  const getListLengthByStatus = (list, status) => list.filter(item => item.status === status).length
  
  const numberOfTasks = {
    'Всего': tasks.length,
    'Новый': getListLengthByStatus(tasks, 'Новый'),
    'В работе': getListLengthByStatus(tasks, 'В работе'),
    'Завершено': getListLengthByStatus(tasks, 'Завершено')
  }

  const filteredTasks = filter !== 'Всего' ? tasks.filter(({ status }) => status === filter) : tasks
  const searchedTasks = filteredTasks.filter(({ desc }) => ~desc.toLowerCase().indexOf(searchText.toLocaleLowerCase()))

  return (
    <div className="app">
      <div className="wrapper">
        <Header
          searchText={searchText}
          filter={filter}
          numberOfTasks={numberOfTasks}
          onSearchChange={onSearchChange}
          onFilterChange={onFilterChange}
          onAddTask={onAddTask}
        />
        <TaskTable
          tasks={searchedTasks}
          onDeleteTask={onDeleteTask}
          onEditTask={onEditTask} 
        />
      </div>
    </div>
  )
}

