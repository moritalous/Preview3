(function() {
    var app = angular.module('ranking', []);

    app.controller('RankingController', function($http) {
        var self = this;
        this.entries;

        var ret = $http.jsonp('https://itunes.apple.com/jp/rss/topfreeapplications/limit=50/json?callback=JSON_CALLBACK')
            .then(function successCallback(response) {
                self.entries = response.data.feed.entry;
                console.log(self.entries);
            }, function errorCollback(response) {

            });

        console.log(ret);
    });
})();