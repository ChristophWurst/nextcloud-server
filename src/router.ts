/**
 * @since 15.0.0
 */
export function generateUrl(app: String, url: String, params?: Object): String {
    return OC.generateUrl(app, url, params)
}
