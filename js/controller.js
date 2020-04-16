angular.module('app',[])

    .controller('ctrl', ['$scope', function($scope) {

            let baseItem =
                {
                    title       : "",
                    subTitle    : "",
                    desc        : "",
                    action      : "",
                    actionLink  : "",
                    img         : ""
                };

            $scope.baseItems = [];

            $scope.addBaseItem = function(){
                let b = Object.assign({},baseItem);
                $scope.baseItems.push(b);
            };

            $scope.removeBaseItem = function(index){
                $scope.baseItems.splice(index, 1);
                if(!$scope.baseItems.length){
                    $scope.addBaseItem();
                }
            };

            vff.onController('baseItems',(e)=>{
                $scope.baseItems = e.data;
            $scope.$apply();
        }, {changeOnly : false})



        // setTimeout(function(){
        //     const pickr = Pickr.create({
        //         el: '.color-picker',
        //         theme: 'nano', // or 'monolith', or
        //         comparison: false,
        //         components: {
        //             // Main components
        //             preview: true,
        //             opacity: true,
        //             hue: true,
        //
        //             // Input / output Options
        //             interaction: {
        //                 hex: false,
        //                 rgba: false,
        //                 hsla: false,
        //                 hsva: false,
        //                 cmyk: false,
        //                 input: true,
        //                 clear: false,
        //                 save: false
        //             }
        //         }
        //     });
        // },500);

    }]);