/* @ngInject */
let itemLoader = function ($compile, $injector) {
    return {
        restrict: 'AE',
        scope: {
            item: '=ddfItem',

        },
        transclude: false,

        link: function (scope, element, attrs) {

            if (!angular.isObject(scope.item)) {
                console.error('itemLoader: Item empty ');
                return false;
            }
            if (!angular.isString(scope.item.type)) {
                console.error('itemLoader: Type empty ');
                return false;
            }

            let type = scope.item.type;

            if ($injector.has(attrs.$normalize(`ddf-${type}-directive`))) {
                let template = `<ddf-${type} id="el-${scope.$id}"></ddf-${type}>`;
                element.append($compile(template)(scope));
            } else {
                console.error(`Directive: "ddf-${type}" not found`);
            }
        }
    };
};

export default itemLoader;

