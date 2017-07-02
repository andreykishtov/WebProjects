window.onload = settings;


function settings() {
    var settingobject = {
        tags: {
            body: { padding: '20px 20px', fontFamily: 'Arial' },
            h1: { color: 'red', fontSize: 30, fontWeight: 'bold' },
            p: { color: '#444', fontSize: 16 }
        },
        ids: {
            main: { background: '#F4F4F4 ', padding: '20px 30px', border: '1px solid #CCC' }
        },
        selectors: {
            "aside p": { color: 'blue', size: 24 },
            "#main h1": { marginTop: 0 }
        }
    };

    var body = document.getElementsByTagName("body");
    var tags = settingobject.tags;
    for (var tg in tags) {
        var items = document.getElementsByTagName(tg);
        var properties = tags[tg];
        for (var i = 0; i < items.length; ++i) {
            implementSettingsOnObject(items[i], properties);

        }
    }

    function implementSettingsOnObject(item, property) {
        for (var a in properties) {
            item["style"][a] = property[a];
        }
    }
}