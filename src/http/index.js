let apiPrefix = '';
//#ifndef H5
apiPrefix = 'http://localhost:8080';
//#endif

const http = {
    request: function ( options ) {
        options.url = urlFormat( options.url );
        return uni.request( options );
    },
    get: function ( options ) {
        options.method = 'GET';
        return this.request( options );
    },
    post: function ( options ) {
        options.method = 'POST';
        options.header = { 'content-type': 'application/x-www-form-urlencoded' };
        return this.request( options );
    },
    postJson: function ( options ) {
        options.method = 'POST';
        return this.request( options );
    },
    put: function ( options ) {
        options.method = 'PUT';
        options.header = { 'content-type': 'application/x-www-form-urlencoded' };
        return this.request( options );
    },
    putJson: function ( options ) {
        options.method = 'PUT';
        return this.request( options );
    },
    delete: function ( options ) {
        options.method = 'DELETE';
        return this.request( options );
    }
};
const urlFormat = function ( url ) {
    return url.startsWith( "/" ) ? apiPrefix + url : apiPrefix + '/' + url;
};
export default http;
