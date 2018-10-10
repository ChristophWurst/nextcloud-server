/**
 * Returns the user's locale
 *
 * @since 15.0.0
 */
export function getLocale(): String {
    return OC.getLocale();
}

/**
 * Translate a string
 *
 * @param {String} app the id of the app for which to translate the string
 * @param {String} text the string to translate
 * @param {Object} vars map of placeholder key to value
 * @param {Number} number to replace %n with
 * @param {OC.L10N.TranslationOptions} [options] options object
 * @return {String}
 *
 * @since 15.0.0
 */

export function translate(app: String, text: String, vars?: Object, count?: Number, options?: OC.L10N.TranslationOptions): String {
    return OC.L10N.translate(app, text, vars, count, options)
}

/**
 * Translate a plural string
 *
 * @param {string} app the id of the app for which to translate the string
 * @param {string} textSingular the string to translate for exactly one object
 * @param {string} textPlural the string to translate for n objects
 * @param {number} count number to determine whether to use singular or plural
 * @param {Object} vars of placeholder key to value
 * @param {OC.L10N.TranslationOptions} options options object
 * @return {String}
 *
 * @since 15.0.0
 */

export function translatePlural(app: String, textSingular: String, textPlural: String, count: Number, vars?: Object, options?: OC.L10N.TranslationOptions): String {
    return OC.L10N.translatePlural(app, textSingular, textPlural, count, vars, options)
}
