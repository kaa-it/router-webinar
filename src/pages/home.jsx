import {useLocation} from "react-router-dom";

export const Home = () => {
    const location = useLocation();

    return (
        <>
            <h1>location: {JSON.stringify(location)}</h1>
            <h1>Home Page Content</h1>
        </>
    );
};