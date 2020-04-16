
angular.module('app')

    .directive('colorPicker', function() {
        return {
            restrict        :'E',
            template        : `
                <div></div>
            `,
            replace         : true,
            scope           : {
                value       : '='
            },
            link            : function(scope, element, attrs) {

                const pickr = Pickr.create({
                    el: element[0],
                    // useAsButton: true,
                    theme: 'nano', // or 'monolith', or
                    comparison: false,
                    components: {
                        // Main components
                        preview: true,
                        opacity: true,
                        hue: true,

                        // Input / output Options
                        interaction: {
                            hex: false,
                            rgba: false,
                            hsla: false,
                            hsva: false,
                            cmyk: false,
                            input: true,
                            clear: false,
                            save: false
                        }
                    }
                });

                const el = pickr.getRoot().root;

                if(attrs.vffStyle) el.setAttribute('vff-style', attrs.vffStyle);
                if(attrs.vffData) el.setAttribute('vff-data', attrs.vffData);

                pickr.on('change', (color, instance) => {

                    if(instance._lastColor.toHEXA().toString() !== color.toHEXA().toString()){
                        // console.log('change', color, instance);
                        vff.controller.update();
                    }
                });

                let val;
                Object.defineProperty(el, 'value', {
                    get(){
                        return pickr.getColor().toHEXA().toString();
                    },
                    set (color){
                        if(color){
                            val = color;
                            pickr.setColor(color)
                        }
                    }
                });
            }
        };
    })
;