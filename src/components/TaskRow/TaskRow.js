import React from 'react'

import { TaskForm } from 'components/TaskForm'
import { Modal, useModal } from 'ui/Modal'

import './TaskRow.scss'

export const TaskRow = ({
  id,
  desc,
  status,
  priority,
  plannedEndDate,
  actualEndDate,
  onDeleteTask,
  onEditTask
}) => {
  const [isModalOpen, toggleModal] = useModal()

  return (
    <>
      <tr className="task-row" onClick={toggleModal}>
        <td>{desc}</td>
        <td>{status}</td>
        <td>{priority}</td>
        <td>{plannedEndDate}</td>
        <td>{actualEndDate}</td>
        <td onClick={() => onDeleteTask(id)}>Удалить</td>
      </tr>
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <TaskForm
          desc={desc}
          status={status}
          priority={priority}
          endDate={plannedEndDate}
          onSave={onEditTask}
          closeModal={toggleModal} />
      </Modal>
    </>
  )
}

