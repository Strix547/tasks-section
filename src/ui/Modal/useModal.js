import { useState } from 'react';

const useModal = () => {
  const [isOpen, setOpen] = useState(false)

  const toggleModal = () => {
    setOpen(!isOpen)
  }

  return [
    isOpen,
    toggleModal
  ]
}

export { useModal }