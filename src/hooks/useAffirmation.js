import { useEffect, useState } from 'react';


export default function useAffirmations() {
 //naming and defining the useState
  const [affirmation, setAffirmation] = useState('');
  const [fgColor, setFgColor] = useState('#ffcc00');
 const [bgColor, setBgColor] = useState('#212121');

 //moved the useEffect magic into here
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
  }, [bgColor, fgColor]);

  //exporting out affirmations
  return affirmation
}

