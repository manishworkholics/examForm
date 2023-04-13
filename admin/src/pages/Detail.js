import React from 'react'
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";

const Detail = () => {
    const location = useLocation();
    var { data } = location.state;
    return (
        <>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-3'></div>
                    <div className='col-6'>
                        <div class="card mb-2">
                            <div class="card-body">
                                <img src={require("../img/flower.jpg")} alt='xyz'/>
                                <h4 class="card-title">{data.name}</h4>
                                <p class="card-text">{data.price}</p>
                                <p class="card-text">{data.description}</p>
                                <Link className="btn btn-outline-success" to={`/`}>back</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'></div>

                </div>
            </div>

        </>
    )
}

export default Detail