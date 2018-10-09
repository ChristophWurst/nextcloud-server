declare namespace OC {
    let requestToken: String;

    interface CurrentUser {
        uid: String|false,
        displayName: String|null,
    }
    function getCurrentUser(): CurrentUser;

    function generateUrl(app: String, url: String, params?: Object): String;

    function getLocale(): String;

    namespace Notifications {
        interface NotificationOptions {
            isHtml?: boolean,
            timeout?: Number,
            type?: String,
        }

        function show(text: String, options?: NotificationOptions): JQuery;
        function showTemporary(text: String, options?: NotificationOptions): JQuery;
    }
}

declare function humanFileSize(size: Number, skipSmallSizes: Boolean): String;
