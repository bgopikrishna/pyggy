import React, { useState } from 'react'

const SignUp = () => {
    return (
        <div>
            <form>
                <input type="text" required />
                <input type="email" required />
                <input type="password" required />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp
