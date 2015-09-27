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
    tabs.open({
        url: "about:newTab",
        isPinned: false,
        onOpen: function onOpen(tab) {
            tab.index = oldIndex + 1;
        }
    });
}
var { Hotkey } = require("sdk/hotkeys");
Hotkey({
  combo: "accel-t",
  onPress: handleClick
});
