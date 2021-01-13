import {useEffect, useState} from 'react'


function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [radioButtons, setRadioButton] = useState("Student");
    const [bio, setBio] = useState("");
    const [notifications, setNotifications] = useState("");
    const [validationErrors, setValidationErrors] = useState([])


    useEffect(() => {
         setValidationErrors([])

        if (!name) {
            setValidationErrors((validationErrors) => [...validationErrors, "What's your full name?"])
        }

        if (!email.includes('@')) {
            setValidationErrors((validationErrors) => [...validationErrors, "Your personal email must be entered"])
        }

        if (!typeof phoneNumber === 'number') {
            setValidationErrors((validationErrors) => [...validationErrors, "Phone number must be a number"])
        }

        if (!bio) {
            setValidationErrors((validationErrors) => [...validationErrors, "Tell me about yourself please"])
        }
    },
    [name, email, phoneNumber, radioButtons, bio, notifications]
    )

    function handleSubmit(submit){
        submit.preventDefault()
    }

    return (
        <form onSubmit={(submit) => {
            handleSubmit(submit)
        }}>
            <h2>Job Application Form</h2>

            { validationErrors.map((error) => {
               return <p key={error}> { error } </p>
            })}

            <div>
                <label text="name" > Name
                    <input type="text" value={ name } onChange={(event) => setName(event.target.value)} />
                </label>
            </div>

            <label text="email" > Email
                <input type="text" value={ email } onChange={(event) => setEmail(event.target.value)} />
            </label>

            <div>
                <label text="phone number" > Phone Number
                    <input type="number" value={ phoneNumber } onChange={(event) => setPhoneNumber(event.target.value)} />
                </label>
            </div>

            <div onChange={(event) => setRadioButton(event.target.value)}>
                <input type="radio" defaultChecked={ radioButtons === "Student" } name="bio" value='Student'/> Student
                <input type="radio" defaultChecked={ radioButtons === "Instructor" } name="bio" value='Instructor'/> Instructor
            </div>

            <textarea value={ bio } onChange={(event) => setBio(event.target.value)} />

            <div>
                <input type="checkbox" value={ notifications } onChange={(event) => setNotifications(event.target.value)} />
            </div>

            <button type='submit'> Submit </button>

        </form>
    )
}

export default Form
