import controller from './options-loader.controller';
/* @ngInject */
export default function ($compile, $injector) {
    return {
        restrict: 'E',
        scope: {
            options: '=ddfItemOptions'
        },
        template: require('./options-loader.html'),
        /*controllerAs: 'ctrl',
        controller: controller,*/
        link: function (scope, element, attrs) {
 
           /* scope.optionItem = {
                type: 'option-' + options.type
            }*/
            

            scope.setOptionType = function (option) {
                //console.log('::',option.type)
                option.type = 'option-' + option.type;
                return option;
            }
            /* let type     = 'option-' + options.type;             
             if( $injector.has( attrs.$normalize(`ddf-${type}-directive`) ) ) {
                 let template = `<ddf-${type} id="el-${scope.$id}"></ddf-${type}>`;                    
                 element.append( $compile(template)(scope) );
             } else {
                 element.append(`<p class="error"> Option Directive: "ddf-${type}" not found </p>`);
             }  */
        }
    };
}