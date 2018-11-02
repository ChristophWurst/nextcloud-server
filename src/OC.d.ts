declare namespace OC {
    let requestToken: String;

    interface CurrentUser {
        uid: String | false,
        displayName: String | null,
    }
    function getCurrentUser(): CurrentUser;

    function getRootPath(): String;
    function linkTo(app: String, file: String): String;
    function linkToRemoteBase(service: String): String;
    function linkToRemote(service: String): String;
    function linkToOCS(service: String, version: Number): String;
    interface UrlOptions {
        escape: boolean
    }
    function generateUrl(url: String, params?: Object, options?: UrlOptions): String;
    function filePath(app: String, type: String, file: String): String;
    function imagePath(app: String, file: String): String;
    function encodePath(path: String): String;

    function getLocale(): String;

    namespace dialogs {
        const FILEPICKER_TYPE_CHOOSE = 1;
        const FILEPICKER_TYPE_MOVE = 2;
        const FILEPICKER_TYPE_COPY = 3;
        const FILEPICKER_TYPE_COPY_MOVE = 4;

        function filepicker(
            title: String,
            callback: Function,
            multiselect: Boolean,
            mimeTypeFilter: Array<String>,
            modal: Boolean,
            type: Number): void;
    }

    namespace L10N {
        interface TranslationOptions {
            escaped?: Boolean
        }

        function translate(app: String, text: String, vars?: Object, count?: Number, options?: TranslationOptions): String;
        function translatePlural(app: String, textSingular: String, textPlural: String, count: Number, vars?: Object, options?: TranslationOptions): String;
    }

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
