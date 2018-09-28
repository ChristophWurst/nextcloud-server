/**
 * @since 15.0.0
 * @returns {Promise<String>} Promise that resolves to the request token
 */
function getRequestToken(): Promise<String> {
    return Promise.resolve(OC.requestToken)
}
