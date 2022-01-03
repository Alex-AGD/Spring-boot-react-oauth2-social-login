import React, {useState} from 'react';

function Input() {
     const useInput = (initialValue) => {
         const [value, setValue] = useState(initialValue)
         return {value};
     }

    const name = useInput('Mr.');
    return (

        <div>
            <input placeholder={"Name"} {...name}  />
        </div>
    )
}

export default Input;