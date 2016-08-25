(function() {
    'use strict';

    angular
        .module('app')
        .controller('topspotsListCtrl', topspotsListCtrl);

    topspotsListCtrl.$inject = ['topspotsFactory'];

    /* @ngInject */
    function topspotsListCtrl(topspotsFactory) {
        var vm = this;

    	topspotsFactory.getTopSpots().then(
    		function (data) {
    			vm.topspots = data;
    		},
    		function(error) {
                console.log(error);
    		});
        
    	
        vm.addNew = function() {
        	var lng = [vm.location_lng];
			var lat = [vm.location_lat];
			vm.location = lng.concat(lat);
			vm.topspots.unshift({ 'name' : vm.name, 'description' : vm.description, 'location' : vm.location});
			console.log(vm.location[0]);
			console.log(vm.location[1]);
        }
    }
})();











