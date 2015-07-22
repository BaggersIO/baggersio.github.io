!function(){"use strict";function e(e){return["$window","$rootScope","$timeout",function(t,n,a){return{restrict:"EA",compile:function(i,c){i.addClass("ng-hide"),t.applicationCache&&(t.applicationCache.addEventListener(e,function(){i.removeClass("ng-hide");var e=n.$eval(c.dismissDelay);e>=0&&a(function(){i.addClass("ng-hide")},e,!0)}),angular.isUndefined(c.dismissOnClick)||i.bind("click",function(){i.addClass("ng-hide")}))}}}]}var t={};["cached","checking","downloading","error","noupdate","obsolete","updateready"].map(function(n){t[n]=e(n)}),angular.module("ng-appcache",[]).factory("appcache",["$window","$rootScope","$q","$timeout",function(e,t,n,a){function i(){return n.reject("unsupported")}var c=this;if(e.applicationCache){c.abortUpdate=function(){try{return void 0===e.applicationCache.abort()?!1:!0}catch(t){if(!t.message.match(/^'undefined'/))throw t;return!1}},c.checkUpdate=function(){function t(){c.removeEventListener("updateready",i),c.removeEventListener("noupdate",r)}function i(){a(function(){o.resolve(),t()},0,!0)}function r(){a(function(){o.reject(),t()},0,!0)}var o=n.defer();c.addEventListener("updateready",i),c.addEventListener("noupdate",r);try{e.applicationCache.update()}catch(d){if("InvalidStateError"!==d.name&&"INVALID_STATE_ERR"!==d.name)throw d;o.reject(d.name)}return o.promise},c.swapCache=function(){var t=n.defer();try{e.applicationCache.swapCache(),t.resolve()}catch(a){if("InvalidStateError"!==a.name&&"INVALID_STATE_ERR"!==a.name)throw a;t.reject(a.name)}return t.promise},c.addEventListener=function(t,n,a){a=angular.isUndefined(a)?!1:a,e.applicationCache.addEventListener(t,n,a)},c.removeEventListener=function(t,n,a){a=angular.isUndefined(a)?!1:a,e.applicationCache.removeEventListener(t,n,a)},c.on=c.addEventListener,c.off=c.removeEventListener;var r={0:"UNCACHED",1:"IDLE",2:"CHECKING",3:"DOWNLOADING",4:"UPDATEREADY",5:"OBSOLETE"};c.status=e.applicationCache.status,c.textStatus=r[e.applicationCache.status],t.$watch(function(){return e.applicationCache.status},function(e){c.status=e,c.textStatus=r[e]}),e.applicationCache.addEventListener("error",function(){t.$digest()},!1)}else c.abortUpdate=function(){return!1},c.checkUpdate=i,c.swapCache=i,c.addEventListener=function(){},c.removeEventListener=function(){},c.on=function(){},c.off=function(){};return c}]).directive("appcacheCached",t.cached).directive("appcacheChecking",t.checking).directive("appcacheDownloading",t.downloading).directive("appcacheError",t.error).directive("appcacheNoupdate",t.noupdate).directive("appcacheObsolete",t.obsolete).directive("appcacheUpdateready",t.updateready)}();