import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Scores = () => {
    const [scoreData, updateScoreData] = useState(null);
    useEffect(() => {
        fetch("http://localhost:8080/scores").then((res) => {
            return res.json();
        }).then((resp) => {
            updateScoreData(resp);
        }).catch((error) => {
            console.log(error.message);
        })
    }, [])
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>All Scores</h2>

                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Language</td>
                                <td>Score</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                scoreData &&
                                scoreData.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.candidate}</td>
                                        <td>{item.lang}</td>
                                        <td>{item.score}</td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                    <Link to="/" className="btn btn-danger"> Back</Link>
                </div>
            </div>
        </div>
    );
}

export default Scores;