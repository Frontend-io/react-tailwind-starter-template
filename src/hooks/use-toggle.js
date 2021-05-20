import { useState } from 'react';

export default function useToggle(state = false){
  const [isOpen, setisOpen] = useState(state);
  
  const handleToggle = () => {
    setisOpen(!isOpen);
  };


  return { toggle: isOpen, setToggle: handleToggle };
};
