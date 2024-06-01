import { ThemeContext } from "@/context";
import { ChangeEventHandler, useContext } from "react";
import { ThemeVariable } from "@/context/ChooseTheme";

const ThemeChanger = () => {
    const { setTheme } = useContext(ThemeContext);

    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setTheme(event.target.value as ThemeVariable);
    };
    return (
        <div>
            <label>
                <input
                    type='radio'
                    name='theme'
                    value='light'
                    id='theme-light'
                    onChange={handleChange}
                />
                Light Theme
            </label>
            <label>
                <input
                    type='radio'
                    name='theme'
                    value='dark'
                    id='theme-dark'
                    onChange={handleChange}
                />
                Dark Theme
            </label>
        </div>
    );
};

export default ThemeChanger;
