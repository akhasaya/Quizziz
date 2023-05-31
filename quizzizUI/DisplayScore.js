import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const DisplayScore = () => {
    const location = useLocation();
    const {candidate, lang, questions, option} = location.state;
    const [score, updateScore] = useState(0);

    useEffect(() => {
        fetch("http://localhost:8080/score", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({candidate, lang, questions, option})
        }).then((res) => {
            return res.json();
        }).then((resp) => {
            updateScore(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    })


    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>Name</td>
                                <td>Language</td>
                                <td>Score</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{candidate}</td>
                                <td>{lang}</td>
                                <td>{score}</td>
                            </tr>
                        </tbody>
                    </table>
                    <Link to="/" className="btn btn-danger"> Back</Link>
                </div>
            </div>
        </div>
    )
}

export default DisplayScore;