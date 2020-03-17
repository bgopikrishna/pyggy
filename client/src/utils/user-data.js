import { getUser } from './auth-helpers';

export async function bootStrapUserData() {
    const user = await getUser();
    if (!user) {
        return null;
    }

    return user;
}
