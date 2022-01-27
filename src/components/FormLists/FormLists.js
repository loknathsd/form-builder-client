import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

const FormLists = () => {
    const [formList, setFormLists] = useState([])

    useEffect(() => {
        fetch("https://arcane-dawn-38623.herokuapp.com/formLists")
            .then(res => res.json())
            .then(data => setFormLists(data))
    }, [])

    const history = useHistory()

    const handleForm = (id) => {
        console.log(id, 'i am clicked')
        history.push(`/formDetail/${id}`)
    }
  
   
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-md-8 mx-auto shadow p-5">
                    <h3 className="text-center mb-4">Form List</h3>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Sl</th>
                                <th scope="col">Name</th>
                                <th scope="col">Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                formList.map((form, index) =>
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td><a href="" onClick={() => handleForm(form._id)}>{form.formName}</a></td>
                                        <td><Link to="/showDetail"  className='btn btn-success btn-sm'>Reports</Link></td>

                                    </tr>

                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default FormLists;