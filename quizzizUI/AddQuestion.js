import { useState } from "react";
import { Link } from "react-router-dom";

const AddQuestion = () => {
    const [lang, updateLang] = useState("");
    const [question, updateQuestion] = useState("");
    const [optionA, updateOpA] = useState("");
    const [optionB, updateOpB] = useState("");
    const [optionC, updateOpC] = useState("");
    const [optionD, updateOpD] = useState("");
    const [rightoption, updateRight] = useState("");


    const handlesubmit = (e) => {
        e.preventDefault();
        const questiondata = { lang, question, optionA, optionB, optionC, optionD, rightoption };
        
        fetch("http://localhost:8080/question", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(questiondata),
        }).then((res) => {
            alert("Saved successfully");
            
            updateLang("");
            updateQuestion("");
            updateOpA("");
            updateOpB("");
            updateOpC("");
            updateOpD("");
            updateRight("");

        }).catch((err) => {
            console.log(err.message);
        })
    }


    return (
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>
                        <div className="card" style={{ "textAlign": "left" }}>
                            <div className="card-title">
                                <h2> Add a question</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">

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
                                            <label>Question</label>
                                            <input required value={question} onChange={e => updateQuestion(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Option A </label>
                                            <input required value={optionA} onChange={e => updateOpA(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Option B</label>
                                            <input required value={optionB} onChange={e => updateOpB(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Option C</label>
                                            <input required value={optionC} onChange={e => updateOpC(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Option D</label>
                                            <input required value={optionD} onChange={e => updateOpD(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Right Option </label>
                                            <input required value={rightoption} onChange={e => updateRight(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Save</button>
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
    );
}

export default AddQuestion;