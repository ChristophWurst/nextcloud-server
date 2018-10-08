declare namespace OC {
    let requestToken: String;
    let currentUser: String|null;

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
