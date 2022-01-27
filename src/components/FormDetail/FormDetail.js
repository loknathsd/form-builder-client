import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useParams,useHistory } from 'react-router-dom';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';



const FormDetail = () => {
    const [form, setForm] = useState({})
    const [value, setValue] = useState();
    const history = useHistory()

    const { id } = useParams()
    console.log(id)
    useEffect(() => {
        fetch(`https://arcane-dawn-38623.herokuapp.com/form/${id}`)
            .then(res => res.json())
            .then(data => setForm(data))
    }, [])

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
       data[form.date]= value
       const allData = {...data,form }
        console.log(data)
        console.log(allData)

        fetch(`https://arcane-dawn-38623.herokuapp.com/addDetail`,{
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(allData)
        })
        .then(res=>{
            history.push(`/showDetail`)
        })
    }

    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className="col-md-6 mx-auto shadow p-5 bg-light ">
                    <h3 className="text-center">{form.formName}</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {form.text && <div>
                            <label htmlFor="">{form.text}</label><br />
                            <input className='form-control' type="text" {...register(`${form.text}`)} />
                        </div>}
                        {form.number && <div className='mt-3'>
                            <label htmlFor="">{form.number}</label><br />
                            <input className='form-control' type="number" {...register(`${form.number}`)} />
                        </div>}
                        {form.date && <div className='mt-3'>
                            <label htmlFor="">{form.date}</label><br />
                            <LocalizationProvider dateAdapter={AdapterDateFns} >
                                <Stack spacing={2}>

                                    <DatePicker
                                       
                                        label=""
                                        value={value}
                                        minDate={new Date('2017-01-01')}
                                        onChange={(newValue) => {
                                            setValue(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                            
                                    />
                                </Stack>
                            </LocalizationProvider>
                        </div>}
                        {form.textArea && <div className='mt-3'>
                            <label htmlFor="">{form.textArea}</label><br />
                            <textarea {...register(`${form.textArea}`)} className='form-control' ></textarea>
                        </div>}

                        <input className='btn btn-danger mt-3' type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormDetail;