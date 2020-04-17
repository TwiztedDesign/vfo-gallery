
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


                function debounce(func, wait, immediate) {
                    let timeout;

                    return function executedFunction() {
                        let context = this;
                        let args = arguments;

                        let later = function() {
                            timeout = null;
                            if (!immediate) func.apply(context, args);
                        };

                        let callNow = immediate && !timeout;

                        clearTimeout(timeout);

                        timeout = setTimeout(later, wait);

                        if (callNow) func.apply(context, args);
                    };
                }

                const el = pickr.getRoot().root;

                if(attrs.vffStyle) el.setAttribute('vff-style', attrs.vffStyle);
                if(attrs.vffData) el.setAttribute('vff-data', attrs.vffData);

                let update = debounce(vff.controller.update, 400);
                pickr.on('change', (color, instance) => {

                    if(instance._lastColor.toHEXA().toString() !== color.toHEXA().toString()){
                        // console.log('change', color, instance);
                        update();
                        // vff.controller.update();
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