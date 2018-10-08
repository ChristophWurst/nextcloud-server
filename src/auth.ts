/**
 * @since 15.0.0
 * @returns {Promise<String>} Promise that resolves to the request token
 */
function getRequestToken(): Promise<String> {
    return Promise.resolve(OC.requestToken)
}

interface NextcloudUser {
    uid: String,
    displayName: String | null
}

/**
 * @since 15.0.0
 * @returns {String|null} The user ID (UID) of the currently logged in user, if available
 */
function getCurrentUID(): NextcloudUser | null {
    const user = OC.getCurrentUser()
    if (user.uid === false) {
        return null
    }
    const converted: NextcloudUser = {
        uid: user.uid,
        displayName: user.displayName,
    }
    return converted
}
