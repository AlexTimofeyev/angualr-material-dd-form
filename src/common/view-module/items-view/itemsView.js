import template from './itemsView.html';
import './itemsView.scss';

export default function() {
    return {
        restrict: 'EA',
        scope : {
            items:'=ddfItems' 
        },
        template: template
    };
}