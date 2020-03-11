import React from 'react'

import { TaskRow } from '../TaskRow'

import './TaskTable.scss'

export const TaskTable = ({ tasks, onDeleteTask, onEditTask }) => {

  const taskRowList = tasks.map(({
    id,
    desc,
    status,
    priority,
    plannedEndDate,
    actualEndDate
  }) => {
    return (
      <TaskRow
        key={id}
        id={id}
        desc={desc}
        status={status}
        priority={priority}
        plannedEndDate={plannedEndDate}
        actualEndDate={actualEndDate}
        onDeleteTask={onDeleteTask}
        onEditTask={(desc, status, priority, endDate) => onEditTask(id, desc, status, priority, endDate)}
      />
    )
  })

  return (
    <table>
      <thead>
        <tr>
          <th>Описание</th>
          <th>Статус</th>
          <th>Приоритет</th>
          <th>Плановая дата окончания</th>
          <th>Фактическая дата окончания</th>
          <th>Действие</th>
        </tr>
      </thead>
      
      <tbody>
        {taskRowList}
      </tbody>
    </table>
  )
}
