import React from 'react'

function SignUp() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <form className="signupleft" onSubmit={handleSubmit}>
            <h2 className="title">SIGN UP</h2>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <button type="submit" className="submitButton">SIGN UP</button>
        </form>
    )
}

export default SignUp
