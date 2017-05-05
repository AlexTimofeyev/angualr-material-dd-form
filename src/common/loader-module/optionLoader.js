/* @ngInject */
const optionLoader = function ($compile, $injector) {
    return {
        restrict: 'AE',
        scope: {
            item: '=ddfItem',
            option: '=ddfOption',

        },
        transclude: false,



        link: function (scope, element, attrs) {

            if (!angular.isObject(scope.option)) {
                console.error('optionLoader: Item empty ');
                return false;
            }
            if (!angular.isString(scope.option.type)) {
                console.error('optionLoader: Type empty ');
                return false;
            }

            let type = scope.option.type;

            scope.objectReff = 
                scope.item[scope.option.name]?
                scope.item:
                scope.item.config;

                console.log(scope.objectReff);

            if ($injector.has(attrs.$normalize(`ddf-option-${type}-directive`))) {                   
                
                let template = `<ddf-option-${type} id="el-${scope.$id}"></ddf-option-${type}>`;
                element.append($compile(template)(scope));
            } else {
                console.error(`Directive: "ddf-option-${type}" not found`);
            }
            
        }
    };
};

export default optionLoader;

