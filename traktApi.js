const xls = require('excel4node');

// load user config from config
var userConfig  = require('./config/userConfig.json')
var getBearer = require('./getBearer.js')
var getUserMovies = require('./getUserMovies.js')
var getUserShows = require('./getUserShows.js')

var wb = new xls.Workbook();
var sheetName = "";
var fileName = "";
var ws = wb.addWorksheet(sheetName);

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

var count = 2;
var totalMoviePlays = 0;

async function saveUserMovies() {
  sheetName = "Movies Watched";
  fileName = "movies_watched_" + userConfig.username + ".xlsx";

  ws.column(1).setWidth(50);
  ws.cell(1, 1).string("Movies").style({
    font: {
      bold: true
    }
  });
  ws.cell(1, 2).string("times watched").style({
    font: {
      bold: true
    }
  });
  ws.column(2).setWidth(20);
  var jsonMovies = await getUserMovies()
    for (var i=0;i<jsonMovies.length;i++){
      ws.cell(count, 1).string(jsonMovies[i].movie.title);
      ws.cell(count, 2).number(jsonMovies[i].plays);
      totalMoviePlays = totalMoviePlays + jsonMovies[i].plays;
      count++;
    }
  
    ws.cell(count+1, 1).string("Total of movies: " + (count-2));
    ws.cell(count+1, 2).string("Total of watched: " + totalMoviePlays);
  
    wb.write(fileName);
  
}

async function saveUserShows () {
  sheetName = "Shows Watched";
  fileName = "shows_watched_" + userConfig.username + ".xlsx";

  ws.column(1).setWidth(50);
  ws.cell(1, 1).string("Show").style({
    font: {
      bold: true
    }
  });
  ws.cell(1, 2).string("Times Watched").style({
    font: {
      bold: true
    }
  });
  ws.column(2).setWidth(20);
  
  var jsonShows = await getUserShows()
    for (var i=0;i<jsonShows.length;i++){
      ws.cell(count, 1).string(jsonShows[i].show.title);
      ws.cell(count, 2).number(jsonShows[i].plays);
      totalMoviePlays = totalMoviePlays + jsonShows[i].plays;
      count++;
    }
  
    ws.cell(count+1, 1).string("Total of shows: " + (count-2));
    ws.cell(count+1, 2).string("Total of episodes: " + totalMoviePlays);
  
    wb.write(fileName);
}

var generateType = process.argv[2]

if (!process.argv[2] || process.argv[2] != "movies" || process.argv[2] != "shows" || process.argv[2] != "getBearer") {
  console.log("You must insert all parameters. Example: node traktApi.js movies marlonvtomazin // node traktApi.js shows marlonvtomazin")
}

if (generateType == "movies") {
  saveUserMovies()
} else if (generateType == "shows") {
  saveUserShows()
} else if (generateType == "getBearer") {
  getBearer()
}



