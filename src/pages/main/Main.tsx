import { Link } from "react-router-dom"

export const Main = () => {
    return (
        <>
            <h1>Hello, World</h1>
            <Link to={'/about'}>Next</Link>
        </>
    )
}