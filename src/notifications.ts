interface NotificationOptions {
    isHtml?: boolean,
    timeout?: Number,
    type?: String,
}

/**
 * Shows a sanitized notification
 *
 * @param test the text to display
 * @param options
 * @since 15.0.0
 */
export function show(text: String, options?: NotificationOptions) {
    return OC.Notifications.show(text, options);
}

/**
 * Shows a notification that disappears after x seconds, default is 7 seconds
 *
 * @param text the text to display
 * @param options 
 * @since 15.0.0
 */
export function showTemporary(text: String, options?: NotificationOptions) {
    return OC.Notifications.showTemporary(text, options);
}