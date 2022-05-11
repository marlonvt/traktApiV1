//var request = require('request');
var axios = require('axios');

// load user config from config
var userConfig = require('./config/userConfig.json')

module.exports = function getUserShows() {
     var headers = {
        "Content-Type": "application/json",
        "Authorization": userConfig.authToken,
        "trakt-api-version": 2,
        "trakt-api-key": userConfig.clientID
    } 

    var response = axios.get("https://api.trakt.tv/users/" + userConfig.username + "/watched/shows", {headers: headers})
        .then(response => {
            console.log("Finded " + response.data.length + " shows");
            return response.data
        })
        .catch(err => {
            console.log('Error: ', err.message);
            return false
        });
        return response
}
