import { useEffect, useState } from 'react';
import useColorPicker from './useColorPicker';

export default function useAffirmations() {
  const [affirmation, setAffirmation] = useState('');
  const [color] = useColorPicker({
    fgColor:'#ffcc00',
    bgColor:'#212121'
  })

  useEffect(() => {
    const affirmations = [
      'Great choice!',
      'I love that color!',
      'Looks good!',
      'What a great color combo!',
      'Ooh la la, so fancy',
    ];
    // Generate a random whole number between 0 and the last index of the array
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    setAffirmation(affirmations[randomIndex]);
  }, [color.bgColor, color.fgColor]);

  return affirmation
}

