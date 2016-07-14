(function() {
    var app = angular.module('ranking', []);

    app.controller('RankingController', function($http) {
        var self = this;
        this.entries;

        var ret = $http.jsonp('https://itunes.apple.com/jp/rss/topsongs/limit=100/genre=27/json?callback=JSON_CALLBACK')
            .then(function successCallback(response) {
                self.entries = response.data.feed.entry;
                console.log(self.entries);
            }, function errorCollback(response) {

            });

        console.log(ret);
    });

    app.config(function($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist(
            ['self', 'http://**']
        );
    });


})();