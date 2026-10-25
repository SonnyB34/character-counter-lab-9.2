 import type { TextInputProps } from "../../types/index";
 import { useState } from "react";
 export const TextInput: React.FC<TextInputProps> = ({
    onTextChange,
    placeholder = 'Start typing....',
    initialValue= '',
 }) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (e: any) => {
        setValue(e.target.value);
        onTextChange(e.target.value);
    };
    return (
        <div>
            <textarea 
                className="text-input"
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                aria-label="Your text"
            />
        </div>
    );
 };