import { Link } from "react-router-dom";

const AdminActions = () => {

    return (
        <div>
            <div className="container">
                <div className="card">
                    <h4>Hi, What do you want to do today?</h4>
                    <div className='card-body' id="admin-body">
                        <div>
                            <div className="divbtn">
                                <Link to="/question" className='btn btn-success'> Add a question</Link>
                            </div>
                            <div className="divbtn">
                                <Link to="/scores" className='btn btn-success'> View Scores </Link>
                            </div>
                            <div className="divbtn">
                                <Link to="/" className="btn btn-danger"> Back</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminActions;