import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Questions = () => {
    const location = useLocation();
    const { candidate, lang } = location.state;
    const [questions, updateQuestions] = useState("");
    const [option, updateOption] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost:8080/questions/" + lang).then((resp) => {
            return resp.json();
        }).then((resp) => {
            updateQuestions(resp);
            const l = resp.length;
            updateOption([...Array(l)]);
        }).catch((error) => {
            console.log(error.message);
        })
    }, [])

    const handleSelectChange = (index, value) => {
        const updatedArray = [...option];
        updatedArray[index] = value;
        updateOption(updatedArray);
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(option);
        const alldata = {candidate, lang, questions, option}; 
        navigate("/display", {state: alldata });
    }

    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>Name</td>
                                <td>Language</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{candidate}</td>
                                <td>{lang}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div>
                {questions &&
                    <form onSubmit={handlesubmit}>
                        {questions.map((item, index) => (
                            <div className="container container-with-space " key={item.id}>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="form-group">
                                            <div className="question">{index + 1}. {item.question}</div>
                                            <div className="option">A. {item.optionA}</div>
                                            <div className="option">B. {item.optionB}</div>
                                            <div className="option">C. {item.optionC}</div>
                                            <div className="option">D. {item.optionD}</div>
                                            <label>Select an option</label>
                                            <select required value={option[index]} onChange={e => handleSelectChange(index, e.target.value)} className="form-control">
                                                <option value="">--Select an option--</option>
                                                <option value="A">A</option>
                                                <option value="B">B</option>
                                                <option value="C">C</option>
                                                <option value="D">D</option>
                                            </select>
                                            <p>Selected option: {option[index]}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="col-lg-12">
                            <div className="form-group">
                                <button className="btn btn-success" type="submit">Save</button>
                                <Link to="/" className="btn btn-danger"> Back</Link>
                            </div>
                        </div>

                    </form>}
            </div>

        </div>
    )
}

export default Questions;