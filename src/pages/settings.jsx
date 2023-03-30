import {useLocation, useNavigate} from "react-router-dom";

export const Settings = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = () => {
        //navigate("/");
        navigate('/', { state: {from: location }});
    };

    return (
        <>
            <h1>Settings Page Content</h1>
            <button onClick={handleClick}>Home</button>
        </>
    );
};