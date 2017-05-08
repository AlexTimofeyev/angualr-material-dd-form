const optionsLoader = function() {
    return {
        restrict: 'E',
        scope: { options: '=ddfItemOptions' },
        template: require('./options-loader.html')
    };
};
export default optionsLoader;