import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Candidate = () => {
    const [candidate, updateCandidate] = useState("");
    const [lang, updateLang] = useState("");

    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        const candidatedata = { candidate, lang};
        console.log(candidatedata);
        navigate("/questions", {state: candidatedata });
    }

    return (
        <div>
            <div className="container">
                <div className="card">
                    <h4>Hi, Are you ready for a test? </h4>
                    <div className='card-body'>
                        <form className="container" onSubmit={handlesubmit}>
                            <div className="card" style={{ "textAlign": "left" }}>
                                
                                <div className="card-body">
                                    <div className="row">

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>Name</label>
                                                <input required value={candidate} onChange={e => updateCandidate(e.target.value)} className="form-control"></input>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <label>Language</label>
                                                <select required value={lang} onChange={e => updateLang(e.target.value)} className="form-control">
                                                    <option value="">--Select an option--</option>
                                                    <option value="java">Java</option>
                                                    <option value="python">Python</option>
                                                    <option value="react">React</option>
                                                </select>
                                                <p>Selected option: {lang}</p>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <button className="btn btn-success" type="submit">Start test</button>
                                                <Link to="/" className="btn btn-danger"> Back</Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Candidate;