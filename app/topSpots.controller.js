angular.module('app').controller('topspotsListCtrl', function($scope, topspotsFactory) {
	topspotsFactory.getTopSpots().then(
		function(response) {
			//Pull the JSON data through factory to be availaible at the $scope
			$scope.topspots = response.data;
			
			// Below is the routine to render al the San Diego Hot Spots into the Google Map Screen
			// var markers pulls the number of objects reuired for the for-loop
			var sizeOfArray = ($scope.topspots).length;
			console.log(sizeOfArray);
			var markers = $scope.topspots;
			console.log(markers);
			$scope.markers = markers;
			console.log(markers);
			// var lat_lng_Coordinates = data.location;
			// console.log(lat_lng_Coordinates);




		    // for( i = 0; i < markers.length; i++ ) {
	     //        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
	     //        bounds.extend(position);
	     //        marker = new google.maps.Marker({
	     //            position: position,
	     //            map: map,
	     //            title: markers[i][0]
	     //        });



		}, 
		function(err) {
			alert(err);
		}
	);

	// Adds the user input to the table
	$scope.addNew = function() {
		var lng = [$scope.location_lng];
		var lat = [$scope.location_lat];
		$scope.location = lng.concat(lat);
		$scope.topspots.unshift({ 'name' : $scope.name, 'description' : $scope.description, 'location' : $scope.location});
		console.log($scope.location[0]);
		console.log($scope.location[1]);	
		// Clears input after submission
   		// $scope.name = null;
   		// $scope.description = null;
   		// $scope.location_lat = null;
   		// $scope.location_lng = null;
	};


	// Displays default google map area into HTML
    
    $scope.map = { center: { latitude: 32.7157, longitude: -117.161 }, zoom: 11 };
    
    $scope.marker = {
    	id: 0,
    	coords: {
    		latitude: 32.7157,
    		longitude: -117.161
    	}
    };
    // $.getJSON('../topspots.json',function(data) {
    //     $.each(data, function(key, val){
    //        $.each(val, function(k, v) {
    //             console.log(tr);
    //             if (k === 'location') {
    //                 tr += '<td><a class="btn btn-primary" href="http://maps.google.com/?ll=' + v + '" role="button">Open in Google Maps</a></td>'; 
    //             } else {
    //                 tr += '<td>' + v + '</td>';
    //             };     
    //        });
    //        tr += '</tr>';
    //        $('#topSpotsTable').append(tr);
    //     });	

    // for( i = 0; i < markers.length; i++ ) {
    //         var latlong = markers.location.split(',');
    //         var position = new google.maps.LatLng(markers[i][markers.location]);
    //         bounds.extend(position);
    //         marker = new google.maps.Marker({
    //             position: position,
    //             map: map,
    //             title: markers[i][0]
    //         });


    // $scope.mapOptions = {
    //   center: new google.maps.LatLng(35.784, -78.670),
    //   zoom: 15,
    //   mapTypeId: google.maps.MapTypeId.ROADMAP
    // };

});