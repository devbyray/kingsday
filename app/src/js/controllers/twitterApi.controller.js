/**
 * Twitter API factory does a call to the twitter API
 */

app.controller("TweetController", function($scope, Tweet) {

    $scope.keywords = ['kingsday','koningsdag','orangje', 'willem', 'nederland', '538,koningsdag', 'slam,koningsdag'];

    var randomKeyword = function() {
        var maxNr = $scope.keywords.length;
        var randomNr = Math.floor((Math.random() * maxNr) + 1);
        var randomNr2 = Math.floor((Math.random() * maxNr) + 1);
        var keyWord = $scope.keywords[randomNr];
        var keyWord2 = $scope.keywords[randomNr2];

        var keyWords = keyWord + ',' + keyWord2;

        console.log('maxNr: ', maxNr);
        console.log('randomNr: ', randomNr);
        console.log('keyWords: ', keyWords);

        return keyWords;
    };

    $scope.loadNewData = function() {
        console.log('loading....');

        Tweet.get({ search: randomKeyword() }, function(data) {
            if($scope.tweets && $scope.tweets.length > 0) {
                $scope.tweets = $scope.tweets.concat(data.statuses);
            }
            else {
                $scope.tweets = data.statuses;
            }
            setTimeout("masonLayout()",'100');
        });
    };

    $scope.loadNewData();

});

function masonLayout() {
    var msnContainer = document.querySelector('.tweets');
    if(msnContainer) {
        var msnry = new Masonry(msnContainer, {
            // options
            percentPosition: true,
            itemSelector: '.tweetColumn'
        });
    }
}