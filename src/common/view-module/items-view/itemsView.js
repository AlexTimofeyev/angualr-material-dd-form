import template from './itemsView.html';
import './itemsView.scss';

const viewModel = function() {
    return {
        restrict: 'EA',
        scope : {
            items:'=ddfItems',
            result:'=ddfResult' 
        },
        template: template
    };
};

export default viewModel;