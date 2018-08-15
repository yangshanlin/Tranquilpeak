'use strict';

/**
 * Resolve asset relativeurl
 * @param url
 * @param from
 * @returns {String}
 */
hexo.extend.helper.register('relative_url', function (from, url) {
    // check if url is remote
    if (this.is_remote_url(url)) {
        return url;
    }
    // generate an URL from the one given
    return this.url_for(from + "/" + url);
});
