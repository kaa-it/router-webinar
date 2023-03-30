import {useMatch, useParams, useResolvedPath, useSearchParams} from "react-router-dom";

function Card() {
    const { id } = useParams();
    const match = useResolvedPath("");
    const matchPattern = useMatch("/cards/:id");

    return (
        <>
            <h1>Card with id "{id}"</h1>
            <h1>match "{JSON.stringify(match)}"</h1>
            <h1>matchPattern "{JSON.stringify(matchPattern)}"</h1>
        </>
    );
}

export default Card;