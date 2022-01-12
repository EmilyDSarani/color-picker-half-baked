import { useEffect, useState } from 'react';

export default function useColorPicker(initialState){
  const [colorState, setColorState] = useState(initialState);


const handleChange = (event) =>{
  setColorState((previousState) => {
    return {...previousState, [event.target.name]: event.target.value };
  })
};
return [colorState, handleChange]; 

}
