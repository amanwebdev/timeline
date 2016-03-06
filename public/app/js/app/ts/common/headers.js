System.register(['angular2/http'], function(exports_1) {
    var http_1;
    var contentHeaders;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            exports_1("contentHeaders", contentHeaders = new http_1.Headers());
            contentHeaders.append('Accept', 'application/json');
            contentHeaders.append('Content-Type', 'application/json');
        }
    }
});
//# sourceMappingURL=headers.js.map