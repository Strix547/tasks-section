import React from 'react'

import './FilterPanel.scss'

export const FilterPanel = ({ filter, numberOfTasks, onFilterChange }) => {
  const filters = [
    { label: 'Всего', value: 'Всего' },
    { label: 'Новых', value: 'Новый' },
    { label: 'В работе', value: 'В работе' },
    { label: 'Завершено', value: 'Завершено' }
  ]

  const filterButtons = filters.map(({ label, value }) => {
    return (
      <button
        className={`filter-btn ${filter === value ? 'active' : ''}`}
        key={value}
        onClick={() => onFilterChange(value)}
      >
        {label} - {numberOfTasks[value]}
      </button>
    )
  })

  return (
    <div className="filter-panel">
      {filterButtons}
    </div>
  )
}

