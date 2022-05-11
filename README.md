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

<br><br>
*node traktApi.js getBearer
<br>
After configure your userConfig file, execute node traktApi.js getBearer to set your bearer token <br>
Then you can execute node traktApi.js movies or node traktApi.js shows to save your lists on xls format
