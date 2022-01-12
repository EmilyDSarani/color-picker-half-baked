import Display from '../../components/Display/Display';
import styles from './ColorPicker.css';
import useAffirmations from '../../hooks/useAffirmation';
import useColorPicker from '../../hooks/useColorPicker';


export default function ColorPicker() {
  //putting affirmation first so that the useColorPicker knows what bgcolor and fgcolor is from useAffirm
  const affirmation = useAffirmations(bgColor, fgColor);
//all of our exports from useColorPicker
//order from the hook needs to match when we destructor it
const [fgColor, bgColor, content, didChangeColor, handleChange] = useColorPicker();

// const [color, handleChange] = useColorPicker({
//   fgColor:'#ffcc00',
//   bgColor:'#212121',
//   content:'Hello world!',
//   didChangeColor: false,
// })
// const affirmation = useAffirmations({...color}); 


  return (
    <>
      <fieldset className={styles.colorPickerForm}>
        <legend>
          {didChangeColor
            ? affirmation
            : 'Pick some colors and a message to display!'}
        </legend>
        <input
          type="color"
          name="fgColor"
          aria-label="foreground color"
          value={fgColor}
          onChange={handleChange}
        />
        <input
          type="color"
          name="bgColor"
          aria-label="background color"
          value={bgColor}
          onChange={handleChange}
        />
        <input
          type="text"
          name="content"
          aria-label="content"
          value={content}
          onChange={handleChange}
        />
      </fieldset>
      <Display content={content} bgColor={bgColor} fgColor={fgColor} />
    </>
  );
}
