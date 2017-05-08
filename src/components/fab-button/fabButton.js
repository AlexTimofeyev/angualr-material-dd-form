import template   from './fabButton.html';
import controller from './fabButtonController';
  
export default 
angular.module('ddf.component.fabButton',[])
.component('ddfFabButton',{
    controller:controller, 
    template: template,
    bindings: {
        items: '=ddfItems'
    }
})
.name;