import OC from './OC'

/**
 * @since 15.0.0
 * @returns {Promise<String>} Promise that resolves to the request token
 */
export default function getRequestToken() {
    return Promise.resolve(OC.requestToken)
}
