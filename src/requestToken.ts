/**
 * @since 15.0.0
 * @returns {Promise<String>} Promise that resolves to the request token
 */
export default function getRequestToken(): Promise<String> {
    return Promise.resolve(OC.requestToken)
}
