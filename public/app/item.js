/// <reference path="../../../typings/tsd.d.ts" />
System.register([], function(exports_1) {
    var Item;
    return {
        setters:[],
        execute: function() {
            Item = (function () {
                function Item(text, done, checkListId) {
                    this.text = text;
                    this.done = done;
                    this.checkListId = checkListId;
                }
                return Item;
            })();
            exports_1("Item", Item);
        }
    }
});
//# sourceMappingURL=item.js.map