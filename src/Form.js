import React from 'react'
import { Controller } from 'react-hook-form'
import { useForm } from 'react-hook-form'
import Custominput from './Custominput'
import Customselect from './Customselect';
import "./styles/index.css";

const Form = () => {

    const defaultValues = {
        name:'',
        surname:'',
        email:'',
        course:'',
        select:''

        

    }

    const { handleSubmit, control } = useForm({defaultValues})
    const onSubmit = (values) => {
        console.log(values)
    }

    const options=[
        {
            label: "Football",
            value: "football"
        },
        {
            label: "Basketball",
            value: "basketball"
        },
        {
            label: "Volleyball",
            value: "volleyball"
        }
    ]

    const formSubmitted = () =>{
        alert('Your form has been submitted!!')
    }
    return (
        <div>
            <form class="student_form" onSubmit={handleSubmit(onSubmit)}>
            <h3>Student Form</h3>
            <div>
            <span> FIRST NAME:</span>
                <div className='name'>
                <Custominput name="name" control={control} /><br/>
                </div>

                <div className='name'>
                <span> SURNAME:</span><br />
                <Custominput name = "surname" control={control}/><br/>
                </div>

                <div>
                <span> EMAIL</span><br />
                <Custominput name = "email" control={control} type="email"/><br/>
                </div> <br />
                <div>
                <span> COURSE:</span><br />
                <Custominput name = "course" value= "IT" control={control} type="radio"/>&nbsp;
                <span>IT</span> &nbsp;
                <Custominput name = "course" value="Engineer" control={control} type="radio"/>&nbsp;
                <span>Engineer</span>&nbsp; <br/>  
                <span className='sport'>Choose Sports</span> <br />
                <Customselect name="select" options={options} control={control}/>
                </div> <br/>
                <button class="sub" type='submit' onSubmit={formSubmitted}>Submit Form</button>
            </div>

            </form>
        </div>
    )
}
export default Form