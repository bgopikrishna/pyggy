import { genSalt, hash } from 'bcrypt'

async function genHasedPass(password) {
    const salt = await genSalt(10)
    const hashed = await hash(password, salt)
    return hashed
}

export default genHasedPass
