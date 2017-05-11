import controller from './optionSelect.controller';
import './optionSelcet.css';

const optionSelect= function() {
    return {
        restrict: 'E',       
        template: require ( './optionSelect.html' ),
        controllerAs: 'ctrl',
        controller: controller
    };
};
export default optionSelect;