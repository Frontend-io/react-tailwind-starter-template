import { useRef, useState, useEffect } from 'react';

export default function useCloseContext(initialValue = false){
  const ref = useRef(null);
  const [visible, setVisible] = useState(initialValue);

  const handleClickOutside = e => {
    if (ref.current && !ref.current.contains(e.target)) setVisible(false);
  };

  const handleKeyPress = e => {
    if (e.key === 'Escape') setVisible(false);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    document.addEventListener('keydown', handleKeyPress, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
      document.removeEventListener('keydown', handleKeyPress, true);
    };
  }, [ref]);

  return { visible, setVisible, ref };
};
