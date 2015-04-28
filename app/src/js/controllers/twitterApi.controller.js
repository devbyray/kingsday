/**
 * Twitter API factory does a call to the twitter API
 */

app.controller("TweetController", function($scope, Tweet) {

    $scope.keywords = ['koningsdag',  'oranje',  'koning',  'king',  'amsterdam',  'breda',  '538',  'slamfm'];

    var randomKeyword = function() {
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

        Tweet.get({ search: ':koningsdag' }, function(data) {
            if(data.statuses) {
                $scope.tweets = data.statuses;
                setTimeout("masonLayout()",'200');
            } else {
                console.log('no data found');
            }
        }, function(error){
            console.log('data niet gevonden');
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

