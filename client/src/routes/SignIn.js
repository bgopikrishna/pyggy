import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'
import { ArrowForwardIos } from '@material-ui/icons'
import { postData } from '../utils/fetchMetods'

const SignIn = () => {
    const [user, setUser] = useState(null)

    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')

    async function signInUser(e) {
        e.preventDefault()
        const userFromServer = await postData('/api/auth/signin', {
            email,
            password
        })

        console.log(userFromServer)
    }

    return (
        <div>
            <form onSubmit={signInUser} className="">
                {/* <input type="email" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" onChange={(e) => setEmail(e.target.value)} />
                <button type="submit">Sign In</button> */}
                <TextField label="Email" type="email" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    endIcon={<ArrowForwardIos />}
                    disableElevation>
                    Sign In
                </Button>
            </form>
        </div>
    )
}

export default SignIn
