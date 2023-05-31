import { Link } from "react-router-dom";

const HomePage = () => {

    return (
        <div>
            <h2>Please Login</h2>
            <div className="container">
                <div className="card">
                <h4>I am a</h4>
                    <div className='card-body' id="homepage">
                        
                        <div>
                        <div className="divbtn">
                            <Link to="/admin" className='btn btn-success'> Admin</Link>
                        </div>
                        <div className="divbtn">
                            <Link to="/candidate" className='btn btn-success'> Candidate </Link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;