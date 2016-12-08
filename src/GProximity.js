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

 * gproximity v0.1.1
 *
 * Licensed GPLv3 for open source use
 * or GProximity Commercial License for commercial use
 *
 * https://gproximity.eternalblack.com
 * Copyright 2016 Eternal Black | Markus Bittner
 */

(function($) {
    $.gproximity = function(obj1, obj2, callback) {
        var plugin = this;

        loadLatLng(obj1, 0).then(function() {
            loadLatLng(obj2, 1).then(function() {
                var d = calcDistance(_lat1, _lng1, _lat2, _lng2);
                var res = Math.round(d * 1000);
                if (typeof callback == 'function') {
                    callback.call(this, res);
                }
                return res;

            }).fail(function() {
                return null;
            });
        }).fail(function() {
            return null;
        });
    }

    var loadLatLng = function(obj, set) {
        var deferred = $.Deferred();
        switch ($.type(obj)) {
            case 'string':
                var geocoder = new google.maps.Geocoder();
                geocoder.geocode({
                    'address': obj
                }, function(results, status) {
                    if (status == 'OK') {
                        if(!set) {
                            _lat1 = results[0].geometry.location.lat();
                            _lng1 = results[0].geometry.location.lng();
                        } else {
                            _lat2 = results[0].geometry.location.lat();
                            _lng2 = results[0].geometry.location.lng();
                        }
                        deferred.resolve();
                    } else {
                        deferred.reject();
                    }
                });
                break;
            case 'array':
                if(!set) {
                    _lat1 = obj[0];
                    _lng1 = obj[1];
                } else {
                    _lat2 = obj[0];
                    _lng2 = obj[1];
                }
                deferred.resolve();
                break;
            default:
                deferred.reject();
        }
        return deferred;
    }

    $.gproximity.init = function(api_key, callback) {
        if (typeof callback == 'undefined') {
            callback = '';
        }
        $.getScript("https://maps.googleapis.com/maps/api/js?key="+api_key+"&callback="+callback+"", function () {});
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
