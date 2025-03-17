import { useState } from 'react';

/**
 * Hook for managing menu state
 * @param {boolean} initialState - Initial state of the menu
 * @returns {[boolean, function]} - Menu state and toggle function
 */
export const useMenu = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);
  
  const toggle = () => setIsOpen(prev => !prev);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  
  return { isOpen, toggle, open, close };
};

export default useMenu;
