import React from 'react'

const Addexam = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h1 className='text-center heading'>Add Exam</h1>
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
                                    <label for="email" className="form-label">id:</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter id" name="email" />
                                </div>
                                <div className="col">
                                    <label for="email" className="form-label">title:</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter title" name="email" />
                                </div>
                                <div className="col">
                                    <label for="email" className="form-label">free_trial_label:</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter free_trial_label" name="email" />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col">
                                    <label for="email" className="form-label">quarterly:</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter quarterly" name="email" />
                                </div>
                                <div className="col">
                                    <label for="email" className="form-label">half_yearly:</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter half_yearly" name="email" />
                                </div>
                                <div className="col">
                                    <label for="email" className="form-label">yearly:</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter yearly" name="email" />
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col">
                                    <label for="email" className="form-label">two_years:</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter two_years" name="email" />
                                </div>
                                <div className="col">
                                    <label for="email" className="form-label">student_type:</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter student_type" name="email" />
                                </div>
                                <div className="col">
                                    <label for="email" className="form-label">is_subscription:</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter is_subscription" name="email" />
                                </div>
                            </div>
                            <div className="row mt-3 mb-3">
                                <div className="col">
                                    <label for="email" className="form-label">description:</label>
                                    <textarea class="form-control" rows="3" id="comment" name="text"></textarea>
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

export default Addexam