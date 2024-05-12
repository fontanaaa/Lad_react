const MyButton = () => {
    const handleClick = () => {
        alert("The button is pressed");
    };
    return <button onClick={handleClick}>Button</button>;
};

// TODO:: Сделать чилдрен и тайп

export default MyButton;
