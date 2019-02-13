"use strict";

const light = {
    template: `
    <section ng-class="{lightOn: $ctrl.isOn}">
        <p>LIGHT</p>
        <light-switch
        
        on-flip="$ctrl.onFlip()"
        ></light-switch>  
        
    </section>
    `,

    controller: [function() {
        const vm = this;
        vm.isOn = false;

        vm.onFlip = function() {
            vm.isOn = !vm.isOn; 
            console.log(vm.isOn) 
        };
    }]
};

angular
    .module("LightApp")
    .component("light", light);