import Display from '../../components/Display/Display';
import styles from './ColorPicker.css';
import useAffirmations from '../../hooks/useAffirmation';
import useColorPicker from '../../hooks/useColorPicker';

// function useAffirmations() {
//   const [affirmation, setAffirmation] = useState('');
//   const [fgColor, setFgColor] = useState('#ffcc00');
//   const [bgColor, setBgColor] = useState('#212121');

//   useEffect(() => {
//     const affirmations = [
//       'Great choice!',
//       'I love that color!',
//       'Looks good!',
//       'What a great color combo!',
//       'Ooh la la, so fancy',
//     ];
//     // Generate a random whole number between 0 and the last index of the array
//     const randomIndex = Math.floor(Math.random() * affirmations.length);
//     setAffirmation(affirmations[randomIndex]);
//   }, [bgColor, fgColor]);

//   return affirmation
// }

// function useColorPicker(initialState){
//   const [colorState, setColorState] = useState(initialState);


// const handleChange = (event) =>{
//   setColorState((previousState) => {
//     return {...previousState, [event.target.name]: event.target.value };
//   })
// };
// return [colorState, handleChange]; 

// }

//   const [fgColor, setFgColor] = useState('#ffcc00');
//   const [bgColor, setBgColor] = useState('#212121');
//   const [content, setContent] = useState('Hello, world!');
//   const [didChangeColor, setDidChangeColor] = useState(false);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     switch (name) {
//       case 'fgColor':
//         setFgColor(value);
//         setDidChangeColor(true);
//         break;
//       case 'bgColor':
//         setBgColor(value);
//         setDidChangeColor(true);
//         break;
//       case 'content':
//         setDidChangeColor(false);
//         setContent(value);
//         break;
//       default:
//         break;
//     }
//   };
// return [fgColor, bgColor, content, didChangeColor, handleChange]
// }


export default function ColorPicker() {
const [color, handleChange] = useColorPicker({
  fgColor: '#ffcc00',
  bgColor: '#212121',
  content: 'Hello, world!',
  didChangeColor: false
});


  // const [fgColor] = useColorPicker('#ffcc00');
  // const [bgColor] = useColorPicker('#212121');
  // const [content] = useColorPicker('Hello, world!');
  // const [didChangeColor, setDidChangeColor] = useState(false);
  // const [affirmation, setAffirmation] = useState('');

  const affirmation = useAffirmations();

  // useEffect(() => {
  //   const affirmations = [
  //     'Great choice!',
  //     'I love that color!',
  //     'Looks good!',
  //     'What a great color combo!',
  //     'Ooh la la, so fancy',
  //   ];
  //   // Generate a random whole number between 0 and the last index of the array
  //   const randomIndex = Math.floor(Math.random() * affirmations.length);
  //   setAffirmation(affirmations[randomIndex]);
  // }, [bgColor, fgColor]);

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   switch (name) {
  //     case 'fgColor':
  //       setFgColor(value);
  //       setDidChangeColor(true);
  //       break;
  //     case 'bgColor':
  //       setBgColor(value);
  //       setDidChangeColor(true);
  //       break;
  //     case 'content':
  //       setDidChangeColor(false);
  //       setContent(value);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  return (
    <>
      <fieldset className={styles.colorPickerForm}>
        <legend>
          {color.didChangeColor
            ? affirmation
            : 'Pick some colors and a message to display!'}
        </legend>
        <input
          type="color"
          name="fgColor"
          aria-label="foreground color"
          value={color.fgColor}
          onChange={handleChange}
        />
        <input
          type="color"
          name="bgColor"
          aria-label="background color"
          value={color.bgColor}
          onChange={handleChange}
        />
        <input
          type="text"
          name="content"
          aria-label="content"
          value={color.content}
          onChange={handleChange}
        />
      </fieldset>
      <Display content={color.content} bgColor={color.bgColor} fgColor={color.fgColor} />
    </>
  );
}
