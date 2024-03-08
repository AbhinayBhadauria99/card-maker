import React, { useState, useEffect } from 'react'



const ReadAll = () => {
    const [data, setData] = useState([]);
    const [setError] = useState("");
    async function getData() {
        const response = await fetch("http://localhost:4000/api/user");
        const result = await response.json();

        if (!response.ok) {
            console.log(result.error);
            setError(result.error);
        }
        if (response.ok) {
            setData(result);
        }
    }
    //data loads in console as e click /all. Next we will add map funtion below to get all cards in page
    useEffect(() => {
        getData();
    }, []);
    console.log(data);

    return (
        <div className='my-2'>
            <h2 className='text-center'>All CARDS</h2>
            <div className='row'>
                {data?.map((ele) => (
                    <div key={ele._id} className='col-sm-4'>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{ele.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{ele.userEmail}</h6>
                                <p className='text-muted'>{ele.Age}</p>
                                <a href="#" className="card-link">Delete</a>
                                <a href="#" className="card-link">Edit</a>
                            </div>
                        </div>


                    </div>
                ))}

            </div>
        </div>
    )
};

export default ReadAll