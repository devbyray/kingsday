/**
 * Twitter API factory does a call to the twitter API
 */

app.controller("TweetController", function($scope, Tweet) {

    $scope.keywords = ['koningsdag',  'oranje',  'koning',  'king', '#538koningsdag', '#slamfm,#koningsdag'];

    $scope.randomKeyword = function() {
        var maxNr = $scope.keywords.length;
        var randomNr = Math.floor((Math.random() * maxNr));
        var keyWord = $scope.keywords[randomNr];


        console.log('maxNr:', maxNr);
        console.log('randomNr:', randomNr);
        console.log('keyWords:', keyWord);

        return ':'+keyWord;
    };

    $scope.loadNewData = function() {
        console.log('loading....');

        Tweet.get({ search: $scope.randomKeyword() }, function(data) {
            if(data.statuses) {
                $scope.tweets = data.statuses;
                setTimeout("masonLayout()",'200');
            } else {
                console.log('no data found');
            }
        }, function(error){
            console.log('get request stopt or could not find source');
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
};

