/// <reference path="../../../typings/tsd.d.ts" />
System.register([], function(exports_1) {
    var User;
    return {
        setters:[],
        execute: function() {
            User = (function () {
                function User(id, userName) {
                    this.id = id;
                    this.userName = userName;
                }
                return User;
            })();
            exports_1("User", User);
        }
    }
});
//# sourceMappingURL=user.js.map