import classes from "./Profile.module.scss";

const Profile = () => {
    const user = {
        firstName: "Denis",
        lastName: "Abramov",
        imageUrl: "/vite.svg",
    };

    return (
        <div className={classes.profile}>
            <img
                className={classes.profile__img}
                src={user.imageUrl}
                alt="vite-logo"
            />
            <span>{user.firstName + " " + user.lastName[0]}</span>
        </div>
    );
};

export default Profile;
