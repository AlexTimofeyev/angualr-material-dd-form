/* @ngInject */
export default function($compile, $injector) {
    return {
        restrict : 'AE',
        scope : {
            item: '=ddfElementLoader', 
        },
        transclude: false,

        link : function (scope, element, attrs) { 

            let type = scope.item.type;
            let Type = attrs.$normalize(`ddf-${type}-directive`);

            if( $injector.has(Type) ) {
                let template = `<ddf-${type} id="el-${scope.$id}"></ddf-${type}>`;                    
                element.append( $compile(template)(scope) );
            } else {
                element.append(`<p class="error"> Directive: "ddf-${type}" not found </p>`);
            }      
        }
    };
}