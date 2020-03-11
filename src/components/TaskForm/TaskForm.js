import React, { useState } from 'react'

import { 
  reverseDate,
  getCurrentDate 
} from 'utils/date'

import './TaskForm.scss'


export const TaskForm = ({ desc, status, priority, endDate, onSave, closeModal }) => {
  const currentDate = reverseDate(getCurrentDate(), '-')

  const [form, setForm] = useState({
    desc: desc || '',
    status: status || 'Новый',
    priority: priority || 'Низкий',
    endDate: endDate ? reverseDate(endDate, '-') : currentDate
  })

  const onInputChange = e => {
    const name = e.target.name
    const value = e.target.value

    setForm({ ...form, [name]: value })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const { desc, status, priority, endDate } = form

    if (desc.length) {
      onSave(desc, status, priority, reverseDate(endDate, '.'))
      closeModal()
    }
  }

  return (
    <form className="task-form" onSubmit={onSubmit}>
      <p>Создание/редактирование задачи</p>
      <div className="input">
        <label htmlFor="desc">Описание (*):</label>
        <input type="text" name="desc" id="desc" required value={form.desc} onChange={onInputChange} />
      </div>
      <div className="form-row">
        <div className="input row">
          <label htmlFor="priority">Приоритет:</label>
          <select name="priority" id="priority" value={form.priority} onChange={onInputChange}>
            <option value="Низкий">Низкий</option>
            <option value="Средний">Средний</option>
            <option value="Высокий">Высокий</option>
          </select>
        </div>
        <div className="input row">
          <label htmlFor="status">Статус:</label>
          <select name="status" id="status" value={form.status} onChange={onInputChange} disabled={!status}>
            <option value="Новый">Новый</option>
            <option value="В работе">В работе</option>
            <option value="Завершено">Завершено</option>
          </select>
        </div>
      </div>
      <div className="input">
        <label htmlFor="endDate">Крайний срок:</label>
        <input type="date" name="endDate" id="endDate" value={form.endDate} onChange={onInputChange} />
      </div>
      <input type="submit" value="Сохранить" onClick={onSubmit} />
    </form>
  )
}

