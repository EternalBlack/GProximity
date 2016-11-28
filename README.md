# GProximity
Google Maps Proximity jQuery Plugin

A script for calculating the distance in meters between two points utilizing google maps geocoder to work with addresses.

[See a demo](http://gproximity.eternalblack.com).

## Requirements
Google Maps API needs to be present as well as jQuery.
```
<!-- Load jQuery -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<!-- Load Google Maps API -->
<script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>
<!-- Load GProxmity -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
```

## Functions
---
##### `$.gproximity = function(obj1, obj2, callback)`
Calculates the distance between obj1 and obj2 and triggers callback function on finish.

##### `obj1`
Can be either an array or a string

##### `obj2`
Can be either an array or a string

---

#### `$.gproximity.init = function(api_key, callback`

##### `api_key`
Takes the API-Key as string.

##### `callback`
Callback function as string/name. Get's called on finish. For example can be utilized to trigger proximity calculation.


## How to use
```
$.gproximity([40.6892282, -74.1145403], [40.6907984, -74.0470397], function(res){
  $('.map').html(res +  "meter");
});
```
or
```
$.gproximity([40.6892282, -74.1145403], 'Flagpole Plaza NY 10004', function(res){
  $('.map').html(res +  "meter");
});
```
or
```
$.gproximity('Flagpole Plaza NY 10004', [40.6892282, -74.1145403], function(res){
  $('.map').html(res +  "meter");
});
```
or
```
$.gproximity('Flagpole Plaza NY 10004', 'Liberty State Park Heliport, Jersey City, NJ, United States', function(res){
  $('.map').html(res +  "meter");
});
```
