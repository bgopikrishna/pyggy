import { getUser } from './auth-helpers';

export async function bootStrapUserData() {
    console.log('getting  user');

    const user = await getUser();

    console.log('user', user);

    if (!user) {
        return null;
    }

    return user;
}
