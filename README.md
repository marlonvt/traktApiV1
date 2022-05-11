# traktApiV1
## Simple code to download your series or movies from https://trakt.tv/ and save as xlsx

-Install node <br>
-Execute npm install <br>
-Then you need configre your config file located on ./config/userConfig.json <br>
<br>

```sh
{   "username": "your traktTV username",
    "authorizeCode": "authorize code generated after clicking on Authorize inside your api APPS",
    "clientID": "found on your api APPS",
    "clientSecret": "found in your api APPS",
    "authToken": "generated after you set yout username, authorizeCode, clientID and clientSecret and execute*"
}
```
<br>
*node traktApi.js getBearer <br>
<br>
After configure your userConfig file, execute the code below to set your authToken:

```sh 
node traktApi.js getBearer 
```
`If the token expires, get another authorizeCode on the site and run getBearer again` <br>
<br>
Then you can execute one of the two codes to get your movies or your shows:

```sh
node traktApi.js movies
node traktApi.js shows
```
