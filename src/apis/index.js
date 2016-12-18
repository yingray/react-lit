import { createFetch } from './fetchCreators'
import { host } from '../constants/ServerConfig'

export const apis = {

    defaultTesting: () => apis.signIn(),

    signIn: (form = {
        "email":"yingray.lu@fuhu.com",
        "password":"aaaaaa"
    }) => createFetch({
        "url": `${host.url.management}/emailmanagement/signin`,
        "method": 'POST',
        "body": form
    }, 'json')

}