import React, { useState } from "react";
import validator from 'validator'
export default function Contact() {
    const [emailError, setEmailError] = useState('')
    const [nameError, setNameError] = useState('')
    const [ageError, setAgeError] = useState('')
    const [msgError, setMsgError] = useState('')



    const validateEmail = (e) => {
        var email = e.target.value

        if (validator.isEmail(email)) {
            setEmailError('')
        } else {
            setEmailError('Enter valid Email!')
        }
    }
    const validateName = (e) => {
        var name = e.target.value

        if (name !== '') {
            setNameError('')
        } else {
            setNameError('name should not be blank!')
        }
    }
    const validateAge = (e) => {
        var age = e.target.value

        if (age > 24 && age<46) {
            setAgeError('')
        } else {
            setAgeError('Age must be in 25 to 45')
        }
    }
    const validateMsg = (e) => {
        var msg = e.target.value

        if (msg.length < 256) {
            setMsgError('')
        } else {
            setMsgError('maximum 255 Character allowed!!')
        }
    }
    const handlesubmit = (e)=>{
        e.preventDefault();
        console.log("form submited")
    }
    return (
        <div style={{ height: "120vh" }}>
            <h3>contact us </h3>
            <div style={{
                height: "70%",
                alignItems: "center",
                justifyContent: "center",
                padding :"50px"
            }}>
                <form onSubmit={(e)=>handlesubmit(e)}>
                    <span>Enter Name: </span><input type="text" id="name"
                        onChange={(e) => validateName(e)}></input> <br />
                    <span style={{
                        fontWeight: 'bold',
                        color: 'red',
                    }}>{nameError}</span><br />
                    <span>Enter Email: </span><input type="text" id="userEmail"
                        onChange={(e) => validateEmail(e)}></input> <br />
                    <span style={{
                        fontWeight: 'bold',
                        color: 'red',
                    }}>{emailError}</span><br />
                    <span>Enter Age: </span><input type="text" id="userage"
                        onChange={(e) => validateAge(e)}></input> <br />
                    <span style={{
                        fontWeight: 'bold',
                        color: 'red',
                    }}>{ageError}</span><br />
                    <span>Enter Message: </span><textarea type="text" id="usermessage"
                        onChange={(e) => validateMsg(e)} rows="5"></textarea> <br />
                    <span style={{
                        fontWeight: 'bold',
                        color: 'red',
                    }}>{msgError}</span><br />
                    <button type="submit"> Submit </button>
                </form>
            </div>
        </div>

    )

}