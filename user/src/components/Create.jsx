import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {

    const [name, setName] = useState("");
    const [userEmail, setEmail] = useState("");
    const [age, setAge] = useState(0);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    console.log(name, userEmail, age);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const addUser = { name, userEmail, age }
        const response = await fetch("http://localhost:4000/api/user", {    //we are use fetch() instead of AXIOS
            method: "POST",
            body: JSON.stringify(addUser),
            headers: {
                "Content-Type": "application/json"
            },
        });
        const result = await response.json();

        if (!response.ok) {
            console.log(result.error);
            setError(result.error);
        }
        if (response.ok) {
            console.log(result);
            setError("");
            setName("");
            setAge("");
            setEmail("");
            navigate("/all");
        }
    };

    return (
        <div className="container my-2">

            {error && <div class="alert alert-danger" >
                {error}
            </div>}

            <h2 className="text-center">Enter your Card</h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={userEmail} onChange={(e) => setEmail(e.target.value)} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input type="number" className="form-control" value={age} onChange={(e) => setAge(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
};

export default Create;