import React ,{useState} from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const GenerateForm = () => {
    const [isText,setIsText] = useState(false)
    const [isNumber,setIsNumber] = useState(false)
    const [isTextArea,setIsTextArea] = useState(false)
    const [isDate,setIsDate] = useState(false)
 

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const history = useHistory()

    const onSubmit = data => {
        fetch('https://arcane-dawn-38623.herokuapp.com/createForm',{
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(data)
        })
        .then(res=>{
            alert('your generated a form')
             history.push('/home')
        })
    }

    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-md-10">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="">Form name</label><br />
                            <input  {...register("formName")} />
                        </div>

                       { isText && <div className="form-group">
                            <label htmlFor="">Text</label><br />
                            <input  {...register("text")} />
                        </div>}
                       {isNumber && <div className="form-group">
                            <label htmlFor="">Number</label><br />
                            <input  {...register("number")} />
                        </div>}
                        {isDate && <div className="form-group">
                            <label htmlFor="">Date</label><br />
                            <input  {...register("date")} />
                        </div>}
                        {isTextArea && <div className="form-group">
                            <label htmlFor="">Text Area</label><br />
                            <input  {...register("textArea")} />
                        </div>}

                        <input className='mt-4 btn btn-danger' type="submit" value="Generate" />
                    </form>

                </div>
                <div className="col-md-2">
                    <button onClick={()=>setIsText(!isText)} className='btn btn-primary'>Text</button><br /><br />
                    <button onClick={()=>setIsNumber(!isNumber)} className='btn btn-primary'>Number</button><br /><br />
                    <button onClick={()=>setIsDate(!isDate)} className='btn btn-primary'>Date</button><br /><br />
                    <button onClick={()=>setIsTextArea(!isTextArea)} className='btn btn-primary'>Text Area</button>
                </div>
            </div>
        </div>
    );
};

export default GenerateForm;