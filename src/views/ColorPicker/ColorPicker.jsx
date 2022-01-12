import Display from '../../components/Display/Display';
import styles from './ColorPicker.css';
import useAffirmations from '../../hooks/useAffirmation';
import useColorPicker from '../../hooks/useColorPicker';


export default function ColorPicker() {
const affirmation = useAffirmations(bgColor, fgColor);
const [fgColor, bgColor, content, didChangeColor, handleChange] = useColorPicker();



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
