(function() {
    'use strict';

    angular
        .module('app')
        .factory('topspotsFactory', topspotsFactory);

    topspotsFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function topspotsFactory($http, $q) {
        var service = {
            getTopSpots: getTopSpots
        };
        return service;

        ////////////////

        function getTopSpots() {
        	var defer = $q.defer();
            $http.get('http://localhost:52160/api/TopSpots').then(
            	function(response) {
                   if (typeof response.data === 'object') {
                       defer.resolve(response.data);
                   } else {
                       defer.reject(response.data);
                   }
               },
               function(error) {
                   defer.reject(error);
               }
           );

           return defer.promise;
        }
    }
})();
