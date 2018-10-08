/**
 * @since 15.0.0
 * @returns {Promise<String>} Promise that resolves to the request token
 */
function getRequestToken(): Promise<String> {
    return Promise.resolve(OC.requestToken)
}

/**
 * @since 15.0.0
 * @returns {String|null} The user ID (UID) of the currently logged in user, if available
 */
function getCurrentUID(): String|null {
    return OC.currentUser;
}
