import AppNav from "../components/AppNav"
import PageNav from "../components/PageNav"
import {Link} from 'react-router-dom'

function Home() {
    return (
        <div>
            <PageNav/>
            <AppNav/>
            <h1>WordWise</h1>
            <Link to={'/app'}>Go to the App</Link>
        </div>
    )
}

export default Home
