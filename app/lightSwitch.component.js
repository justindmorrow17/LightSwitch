"use strict";

const lightSwitch = {
    //single button with text of SWITCH, clicking the button will call the method bound in the parent
    template: `
    
    <button ng-click="$ctrl.onFlip()">SWITCH</button>
    `,

    //
    bindings: {
        // isOn: "<",  //binds the expression of isOn to lightSwitch
        onFlip: "&" //binds the method onFlip to lightSwitch
    }
};

angular
    .module("LightApp")
    .component("lightSwitch", lightSwitch);