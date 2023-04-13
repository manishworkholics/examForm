import React from 'react'

const Addvideo = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1 className='text-center heading'>Add Video</h1>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-10'>
                        <form className='form'>
                            <div className="row mt-3">
                                <div className="col">
                                    <label for="email" className="form-label">Exam:</label>
                                    <select class="form-select">
                                        <option>IIT</option>
                                        <option>NEET</option>
                                        <option>C.A</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <label for="email" className="form-label">Subject:</label>
                                    <select class="form-select">
                                        <option>PHYSICS - 12th</option>
                                        <option>CHEMISTRY - 12th</option>
                                        <option>MATHS - 12th</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <label for="email" className="form-label">Unit:</label>
                                    <select class="form-select">
                                        <option>MECHANICS</option>
                                        <option>GRAVITATION</option>
                                        <option>HEAT</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col">
                                    <label for="email" className="form-label">Chapter:</label>
                                    <select class="form-select">
                                        <option>HEAT AND THERMODYNAMICS</option>
                                        <option>MOTION IN ONE DIMENSION</option>
                                        <option>NEWTON'S LAWS OF MOTION</option>
                                    </select>
                                </div>

                                <div className="col">
                                    <label for="email" className="form-label">title:</label>
                                    <input type="text" className="form-control" id="email" placeholder="Enter title" name="email" />
                                </div>
                                <div className="col">
                                    <label for="email" className="form-label">video:</label>
                                    <input type="file" className="form-control" id="email" placeholder="Enter title" name="email" />
                                </div>
                            </div>
                            <div className='text-center mt-3'><button type="submit" class="btn btn-primary ">Submit</button></div>
                            
                        </form>
                    </div>
                    <div className='col-md-1'></div>
                </div>
            </div>
        </>
    )
}

export default Addvideo