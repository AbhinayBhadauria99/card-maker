import React from 'react'



const ReadAll = () => {
    return (
        <div className='my-2'>
            <h2 className='text-center'>All CARDS</h2>
            <div className='row'>
                <div className='col-sm-4'>

                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Card Title</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Email</h6>
                            <p className='text-muted'>Age</p>
                            <a href="#" className="card-link">Delete</a>
                            <a href="#" className="card-link">Edit</a>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
};

export default ReadAll