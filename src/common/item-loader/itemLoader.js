/* @ngInject */
export default function($compile, $injector) {
    return {
        restrict : 'AE',
        scope : {
            editable: '=ddfEditable', 
            item: '=ddfItem', 
            
        },
        transclude: false,

        link : function (scope, element, attrs) {             
            let type = scope.item.type; 

            //scope.modelkey = scope.editable === true?'name':'value';
             
            if( $injector.has( attrs.$normalize(`ddf-${type}-directive`) ) ) {
                let template = `<ddf-${type} id="el-${scope.$id}"></ddf-${type}>`;                    
                element.append( $compile(template)(scope) );
            } else {
                element.append(`<p class="error"> Directive: "ddf-${type}" not found </p>`);
            }      
        }
    };
}