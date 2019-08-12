import React from 'react'

function LogIn(props) {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <React.Fragment>
            <form className="loginright" onSubmit={handleSubmit}>
                <h2 className="title">LOG IN</h2>
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Password" />
                <button type="submit" className="submitButton">LOG IN</button>
            </form>
        </React.Fragment>
    )
}

export default LogIn
