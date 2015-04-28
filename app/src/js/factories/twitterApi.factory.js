/**
 * Twitter API factory does a call to the twitter API
 */

app.factory("Tweet", function($resource) {
    return $resource("http://www.raymonschouwenaar.nl/kingsday2015/api/REST.php/twitter/:search");
});