import React from 'react'

import './SearchPanel.scss'

export const SearchPanel = ({ searchText, onSearchChange }) => {
  return (
    <input
      type="search"
      placeholder="Поиск"
      value={searchText}
      onChange={(e) => onSearchChange(e.target.value)}
      className="search-input"
    />
  )
}

