import { genSalt, hash } from 'bcrypt'

async function getHash() {
    const salt = await genSalt(10)
    const hashed = await hash(process.env.PASS_HASH, salt)
    return hashed
}

export default getHash()
