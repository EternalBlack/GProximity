# GProximity
Google Maps Proximity Jquery Plugin

A script for calculating the distance in meters between two points utilizing google maps geocoder to work with addresses.

[See a demo](http://gproximity.eternalblack.com) | Coming soon.



## Functions
---
##### `$.gproximity = function(obj1, obj2, callback)`
Dalculates the distance beween obj1 and obj2 and triggers callback function in finish.

##### `obj1`
Can be either an array or a string

##### `obj2`
Can be either an array or a string

---

#### `$.gproximity.init = function({api_key: null, api_secret: null, callback: function(){}})`
#### Not yet working!!! Trying to add google maps API dynamically.

##### `api_key`
Can be either an array or a string

##### `callback`
Can be either an array or a string

##### `callback`
Callback function on finish. Contains the result as parameter. Output in meters



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
$.gproximity('Flagpole Plaza NY 10004', [40.6892282, -74.1145403], function(res){
  $('.map').html(res +  "meter");
});
```
