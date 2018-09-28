declare namespace OC {
    let requestToken: String;

    function generateUrl(app: String, url: String, params: Object): String;

    function getLocale():String;
}
