# GProximity
Google Maps Proximity jQuery Plugin

A script for calculating the distance in meters between two points utilizing google maps geocoder to work with addresses.

[See a demo](https://gproximity.eternalblack.com).

## Requirements
Google Maps API needs to be present as well as jQuery.

For Google Maps API ( can also be done via $.gproximity.init(api_key, calback) )
```
<!-- Load Google Maps API -->
<script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>
```

```
<!-- Load jQuery -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<!-- Load GProximity -->
<script src="../dist/GProximity.min.js"></script>
```

## Functions
---
##### `$.gproximity = function(obj1, obj2, callback)`
Calculates the distance between obj1 and obj2 and triggers callback function on finish.

##### `obj1`
Can be either an array or a string

##### `obj2`
Can be either an array or a string

##### `callback`
Callback function to be triggered.

---

#### `$.gproximity.init = function(api_key, callback)`

##### `api_key`
Takes the API-Key as string.

##### `callback`
Callback function as string/name (!Important! - only the name i.e. "MyCallback" and not "MyCallback()" as it gets triggred by to GoogleMaps load finish callback). Get's called on finish. For example can be utilized to trigger proximity calculation.
*For future update: passing a real function as callback appears to be more convenient. Will consider that.*


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
$.gproximity('Flagpole Plaza NY 10004', 'Berlin Alexanderplatz', function(res){
  $('.map').html(res +  "meter");
});
```
