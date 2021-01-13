import {useState} from 'react'

function Form() {
    function handleSubmit(submit){
        submit.preventDefault()
    }

[]




    return (
        <form onSubmit={(submit) => {
            handleSubmit(submit)
        }}>
            <h2>Job Application Form</h2>
            <label text="name" >
                <input type="text" value={ } onChange={ } />
            </label>

            <label text="email" >
                <input type="text" value={ } onChange={ } />
            </label>

            <label text="phone number" >
                <input type="number" value={ } onChange={ } />
            </label>

            <div>
                <input type="radio" value={}  /> Student
                <input type="radio" value={}  /> Instructor
            </div>

            <textarea value={} onChange={} />
            <input type="checkbox" value={} onChange={} />


        </form>
    )
}

export default Form