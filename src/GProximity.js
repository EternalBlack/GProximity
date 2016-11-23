/*
█              ██████████████████████████████████████████████
███              ████████████████████████████████████████████
██████             ██████████████████████████████████████████
████████              ███████████████████████████████████████
██████████┌            ██████████████████████████████████████
████████████              ███████████████████████████████████
██████████████              █████████████████████████████████
█████████████████             ███████████████████████████████
███████████████████              ████████████████████████████
█████████████████████┌            ██████████████████████████████████████████████
███████████████████████              ███████████████████████████████████████████
██████████ ██████████████              █████████████████████████████████████████
██████████   ███████████████             ███████████████████████████████████████
██████████     ███████████████              ████████████████████████████████████
██████████        ██████████████┌            ███████████████████████████████████
██████████          ██████████████              ████████████████████████████████
██████████            ██████████████              ██████████████████████████████
███████████             ███████████████             ████████████████████████████
█████████████             ███████████████              █████████████████████████
███████████████              ██████████████┌            ████████████████████████
█████████████████▄             ██████████████              █████████████████████
███████████████████              ██████████████              ███████████████████
██████████████████████             ███████████████             █████████████████
████████████████████████             ███████████████              ██████████████
██████████ ███████████████              ██████████████┌            █████████████
██████████    ██████████████▄             ██████████████              ██████████
██████████     ▀██████████████              ██████████████              ████████
██████████        ███████████████             ███████████████             ██████
██████████          ███████████████             ███████████████              ███
██████████            ███████████████              ██████████████┌            ██
███████████              ██████████████▄             ██████████████
█████████████▄            ▀██████████████              ██████████████
███████████████              ███████████████             ███████████████
██████████████████             ███████████████             ███████████████
████████████████████             ███████████████              ██████████████┌
██████████████████████              ██████████████▄             ██████████████

 * gproximity v0.1.0
 *
 * Licensed GPLv3 for open source use
 * or GProximity Commercial License for commercial use
 *
 * http://gproximity.eternalblack.com
 * Copyright 2016 Eternal Black | Markus Bittner
 */

(function($) {
    $.gproximity = function(obj1, obj2, callback) {
        var plugin = this;
        var _lat1, _lng1, _lat2, _lng2;

        switch ($.type(obj1)) {
            case 'string':
                var geocoder = new google.maps.Geocoder();
                geocoder.geocode({
                    'address': obj1
                }, function(results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        _lat1 = results[0].geometry.location.lat();
                        _lng1 = results[0].geometry.location.lng();
                    } else {
                        return null;
                    }
                });
                break;
            case 'array':
                _lat1 = obj1[0];
                _lng1 = obj1[1];
                break;
            default:
                return null;
        }

        switch ($.type(obj2)) {
            case 'string':
                var geocoder = new google.maps.Geocoder();
                geocoder.geocode({
                    'address': obj2
                }, function(results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        _lat2 = results[0].geometry.location.lat();
                        _lng2 = results[0].geometry.location.lng();
                    } else {
                        return null;
                    }
                });
                break;
            case 'array':
                _lat2 = obj2[0];
                _lng2 = obj2[1];
                break;
            default:
                return null;
        }

        var d = calcDistance(_lat1, _lng1, _lat2, _lng2);
        var res = Math.round(d * 1000);
        if (typeof callback == 'function') {
            callback.call(this, res);
        }
        return res;
    }

    $.gproximity.init = function(options) {
        var settings = $.extend({
            api_key: null,
            api_secret: null,
            callback: function() {}
        }, options);

        return true;
    }

    calcDistance = function(lat1, lng1, lat2, lng2) {
        var earth = 6371;

        var _lat1 = lat1 * (Math.PI / 180);
        var _lng1 = lng1 * (Math.PI / 180);
        var _lat2 = lat2 * (Math.PI / 180);
        var _lng2 = lng2 * (Math.PI / 180);

        var x0 = _lng1 * earth * Math.cos(_lat1);
        var y0 = _lat1 * earth;

        var x1 = _lng2 * earth * Math.cos(_lat2);
        var y1 = _lat2 * earth;

        var dx = x0 - x1;
        var dy = y0 - y1;

        var d = Math.sqrt((dx * dx) + (dy * dy));
        return d;
    }

}(jQuery));
