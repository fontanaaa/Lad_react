import MyButton from "./components/MyButton/MyButton";
import Profile from "./components/Profile/Profile";

function App() {
    const isLogged = true;

    return (
        <>
            {isLogged && <Profile />}
            <MyButton />
        </>
    );
}

export default App;
