    var Ziggy = {"url":"http:\/\/myapp.com\/","protocol":"http","domain":"myapp.com","port":false,"defaultParameters":[],"bindings":[],"routes":{"admin.dashboard":{"uri":"admin","methods":["GET","HEAD"],"domain":null}}};

    if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
        for (var name in window.Ziggy.namedRoutes) {
            Ziggy.namedRoutes[name] = window.Ziggy.namedRoutes[name];
        }
    }

    export {
        Ziggy
    }
