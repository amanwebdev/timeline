System.register(['./task.component', './task-list.component', './history.component', './login-form.component', './signup-form.component', './theme-chooser.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (task_component_1_1) {
                exportStar_1(task_component_1_1);
            },
            function (task_list_component_1_1) {
                exportStar_1(task_list_component_1_1);
            },
            function (history_component_1_1) {
                exportStar_1(history_component_1_1);
            },
            function (login_form_component_1_1) {
                exportStar_1(login_form_component_1_1);
            },
            function (signup_form_component_1_1) {
                exportStar_1(signup_form_component_1_1);
            },
            function (theme_chooser_component_1_1) {
                exportStar_1(theme_chooser_component_1_1);
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=components.js.map