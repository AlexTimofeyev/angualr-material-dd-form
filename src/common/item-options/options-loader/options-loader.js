let optionsLoader = function() {
    return {
        restrict: 'E',
        scope: { options: '=ddfItemOptions' },
        template: require('./options-loader.html'),
        
        link: function (scope, element, attrs) {
            scope.setOptionType = function (option) { 
                option.type = 'option-' + option.type;
                return option;
            }
        }
    };
};

export default optionsLoader;