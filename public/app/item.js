/// <reference path="../../../typings/tsd.d.ts" />
System.register([], function(exports_1) {
    var Item;
    return {
        setters:[],
        execute: function() {
            Item = (function () {
                function Item(checkListId, text) {
                    this.checkListId = checkListId;
                    this.text = text;
                }
                return Item;
            })();
            exports_1("Item", Item);
        }
    }
});
//# sourceMappingURL=item.js.map