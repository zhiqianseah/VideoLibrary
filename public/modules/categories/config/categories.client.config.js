'use strict';

// Configuring the Articles module
angular.module('categories').run(['Menus',
    function(Menus) {
        // Set top bar menu items
        Menus.addMenuItem('topbar', 'Videos', 'categories', 'dropdown', '/categories(/create)?');
        Menus.addSubMenuItem('topbar', 'categories', 'List Videos', 'categories');
        Menus.addSubMenuItem('topbar', 'categories', 'New Video', 'categories/create');
    }
]);