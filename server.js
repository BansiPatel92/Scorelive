
// process.env.NODE_ENV = process.env.NODE_ENV;
var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var $ = require("jquery");
var app = express();

// app.use(bodyParser.json()); 
var port = process.env.PORT || 5000;
app.get('/', function(req, res){
    res.send("App started!");
});
app.get('/scrape', function(req, res){
	var url = 'http://www.licescore.com/soccer/live/';

    request(url, function(error, response, html){
    	// console.log("response : ",response,html,error);
        if(!error){

            var $ = cheerio.load(html);

            var event,color,game,minute,player,updateTime;
            var json = { event : "", color : "", game : "", minute:"", player:"",updateTime:""};
        
            var className = $('.wrapper').find('.content.pb44');  
              
	        var player1 = $(className).find('.row-gray.even').find(".ply.tright.name span").text();
	        var player2 = $(className).find('.row-gray.even').find(".ply.name span").text();
	        var game = player1 +'-'+player2;
	       var result = $(className).find('.row-gray.even').find('.content.pb44 .scorelink').text();

	        // console.log("className===..",component1,component2);


	        var result = [];
	        var eachRow = $(className).find('.row-gray.even');
	        res.send("Welcome to demo!");

              // var component3 = $(className).find(".star-container").text();
            // var mainDiv = getElementsByClassName('content pb44');
            // console.log("mainDiv===",mainDiv);
            // var g = mainDiv.getElementsByClassName('row-gray even');
            // var game = g.getElementsByClassName("ply tright name").children().first().text();
            // console.log("game===",game);

        // 	$('.wrapper').filter(function(){  content pb44
        // 		$('.left-bar').filter(function(){
        // 			childDiv = mainDiv.getElementsByTagName('ul')[1],
    				// requiredDiv = childDiv.getElementsByTagName('li')[1];
        			
        // 		});
                
        //     });
        }
    })

})

app.listen(port);
console.log('Server running at http://localhost:'+ process.env.PORT);
