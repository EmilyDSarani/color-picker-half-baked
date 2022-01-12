import Display from '../../components/Display/Display';
import styles from './ColorPicker.css';
import useAffirmations from '../../hooks/useAffirmation';
import useColorPicker from '../../hooks/useColorPicker';


export default function ColorPicker() {
  //putting affirmation first so that the useColorPicker knows what bgcolor and fgcolor is from useAffirm

//all of our exports from useColorPicker
//order from the hook needs to match when we destructor it
const [color, handleChange] = useColorPicker({
  fgColor:'#ffcc00',
  bgColor:'#212121',
  content:'Hello world!',
  didChangeColor: false,
})
const affirmation = useAffirmations({...color}); 


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
