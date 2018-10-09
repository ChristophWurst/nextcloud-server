/**
 * Returns a human readable file size
 *
 * @param {Number} size Size in bytes
 * @param {Boolean} skipSmallSizes return '< 1 kB' for small files
 * @return {String}
 * @since 15.0.0
 */
export function formatFileSize(size: Number, skipSmallSize: Boolean): String {
    return humanFileSize(size, skipSmallSize)
}
