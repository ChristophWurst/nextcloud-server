/**
 * @since 15.0.0
 */
export function getRootUrl(): String {
    return OC.getRootPath()
}

/**
 * @since 15.0.0
 */
export function generateUrl(url: String, params?: Object, options?: OC.UrlOptions): String {
    return OC.generateUrl(url, params, options)
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
