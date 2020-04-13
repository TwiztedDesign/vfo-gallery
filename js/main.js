angular.module('galleryApp',[])
    .controller('galleryAppController', ['$scope', function($scope) {
        $scope.galleryVisibility = true;

        $scope.showGallery= function(){
            $scope.galleryVisibility=true;
        };

        $scope.hideGallery = function () {
            $scope.galleryVisibility=false;
        };

        $scope.settings = {
            rtl         : true,
            toggleText  :"Show Gallery",
            horizontal  : false,
            fullImg     : true
        };

        $scope.data = [
            // {
            //     title       : "Title",
            //     subTitle    : "Sub Title",
            //     desc        : "Description",
            //     action      : "Click to buy",
            //     actionLink  : "https://www.google.com",
            //     img         : "img/item1.jpg"
            // },
            // {
            //     title       : "Title",
            //     subTitle    : "Sub Title",
            //     desc        : "Description",
            //     action      : "Click to buy",
            //     actionLink  : "https://www.google.com",
            //     img         : "img/item1.jpg"
            // },
            // {
            //     title       : "Title",
            //     subTitle    : "Sub Title",
            //     desc        : "Description",
            //     action      : "Click to buy",
            //     actionLink  : "https://www.google.com",
            //     img         : "img/item1.jpg"
            // }
        ];

        vff.onController('baseItems', e => {
            $scope.data = e.data;
            $scope.$apply();
        });

        vff.onController('settings', e => {
            $scope.settings = e.data;
            $scope.$apply();
        });
    }]);