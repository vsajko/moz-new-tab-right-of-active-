var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");

buttons.ActionButton({
  id: "new-right-tab",
  label: "New Right Tab",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});

function handleClick() {
    var oldIndex = tabs.activeTab.index;
    var newTabUrl =  "about:newTab";
    tabs.open({
        url: newTabUrl,
        isPinned: false,
        onOpen: function onOpen(tab) {
            tab.index = oldIndex + 1;
        },
        onReady: function(tab) {
            if (tab.url ===  "about:newTab") {
                var xulTab = require("sdk/view/core").viewFor(tab);
                var urlBar = xulTab.ownerDocument.defaultView.document.getElementById("urlbar");
                urlBar.value = "";
                urlBar.select();
            }
        }
    });
}

var { Hotkey } = require("sdk/hotkeys");
Hotkey({
    combo: "accel-t",
    onPress: handleClick
});
