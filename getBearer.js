var axios = require('axios');
var fs = require('fs');

// load user config from config
var userConfig = require('./config/userConfig.json')
var filePath = "./config/userConfig.json"

module.exports = function getBearer() {
    var jsonBody = {
        "code": userConfig.authorizeCode,
        "client_id": userConfig.clientID,
        "client_secret": userConfig.clientSecret,
        "redirect_uri": "urn:ietf:wg:oauth:2.0:oob",
        "grant_type": "authorization_code"
    }
    var headers = { 'content-type': 'application/json' }

    var response = axios.post("https://api.trakt.tv/oauth/token", jsonBody, { headers: headers })
        .then(response => {
            if (response.data.access_token && response.data.token_type) {
                console.log("authToken found: " + response.data.token_type + " " + response.data.access_token)
                userConfig.authToken = response.data.token_type + " " + response.data.access_token
                fs.writeFileSync(filePath, JSON.stringify(userConfig));
    
            } else if (response.data.error) {
                console.log("Error: " + response.data.error_description)
            }
        })
        .catch(err => {
            console.log('Error: ', err.message);
            return false
        });
    
}

//var getBearer = () => {
//module.exports = getBearer;

