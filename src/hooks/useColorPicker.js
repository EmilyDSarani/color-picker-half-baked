import { useEffect, useState } from 'react';

export default function useColorPicker(){
  //naming and defining the useState
  const [fgColor, setFgColor] = useState('#ffcc00');
  const [bgColor, setBgColor] = useState('#212121');
  const [content, setContent] = useState('Hello, world!');
  const [didChangeColor, setDidChangeColor] = useState(false);

  // const [color, setColorState] = useState(initialState)

  //handleChange magic got moved here
  const handleChange = (event) => {
    // setColorState((previousState) => {
    //   return {...previousState, [event.target.name]: event.target.value };
    // })
    const { name, value } = event.target;
    switch (name) {
      case 'fgColor':
        setFgColor(value);
        setDidChangeColor(true);
        break;
      case 'bgColor':
        setBgColor(value);
        setDidChangeColor(true);
        break;
      case 'content':
        setDidChangeColor(false);
        setContent(value);
        break;
      default:
        break;
    }
  };
  //return the naming convention to use later when exported
  //remember that the order will need to match in ColorPicker jsx when we deconstruct it
return [fgColor, bgColor, content, didChangeColor, handleChange]
}
