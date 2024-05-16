import { CSSProperties, FC, ReactNode } from "react";

interface ButtonProps {
    onClick?: () => void;
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
}

const MyButton: FC<ButtonProps> = ({ onClick, children, className, style }) => {
    const handleClick = () => {
        if (onClick) {
            onClick();
        } else {
            alert("The button is pressed");
        }
    };
    return (
        <button onClick={handleClick} className={className} style={style}>
            {children}
        </button>
    );
};

export default MyButton;
