/**
 * @since 15.0.0
 */
export function getRootUrl(): String {
    return OC.getRootPath()
}

/**
 * @since 15.0.0
 */
export function generateUrl(app: String, url: String, params?: Object): String {
    return OC.generateUrl(app, url, params)
}

/**
 * @since 15.0.0
 */
export function generateFilePath(app: String, type: String, file: String): String {
    return OC.filePath(app, type, file)
}

/**
 * @since 15.0.0
 */
export function generateRemoteUrl(service: String): String {
    return OC.linkToRemote(service)
}

/**
 * @since 15.0.0
 */
export function generateOcsUrl(service: String, version: Number = 2) {
    return OC.linkToOCS(service, version)
}
