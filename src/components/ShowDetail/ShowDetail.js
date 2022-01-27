import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';

const ShowDetail = () => {
    const [details, setDetails] = useState([])

    useEffect(() => {
        fetch(`https://arcane-dawn-38623.herokuapp.com/detail`)
            .then(res => res.json())
            .then(data => {
                setDetails(data)
                console.log(data)
            })

    }, [])


    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-8 mx-auto mt-5 shadow bg-light p-5">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Sl</th>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Date</th>
                                <th scope="col">about</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                details.map((detail, index) =>
                                    <tr>
                                      <td>{index+1}</td>
                                      <td>{detail.name}</td>
                                      <td>{detail.amount}</td>
                                      <td>{(detail.date)}</td>
                                      <td>{detail.about}</td>
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

export default ShowDetail;