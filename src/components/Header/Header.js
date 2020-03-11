import React from 'react'

import { SearchPanel } from '../SearchPanel'
import { FilterPanel } from '../FilterPanel'
import { TaskForm } from '../TaskForm'
import { Modal, useModal } from 'ui/Modal'

import './Header.scss'

export const Header = ({
  filter,
  searchText,
  numberOfTasks,
  onSearchChange,
  onFilterChange,
  onAddTask
}) => {
  const [isModalOpen, toggleModal] = useModal()

  return (
    <header>
      <h1>Прототип - раздел задачи</h1>
      <div className="bottom-line">
        <button className="add-btn" onClick={toggleModal}>Добавить задачу</button>

        <SearchPanel
          searchText={searchText}
          onSearchChange={onSearchChange}
        />

        <FilterPanel
          filter={filter}
          numberOfTasks={numberOfTasks}
          onFilterChange={onFilterChange}
        />
      </div>
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <TaskForm onSave={onAddTask} closeModal={toggleModal} />
      </Modal>
    </header>
  )
}

