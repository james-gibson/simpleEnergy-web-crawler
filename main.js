var Crawler = require("crawler-hq").Crawler;

var urls = [];
var requestCount = 0;
var matchedUrls = [];
var done = false;

var complete = function() {
    console.log("Searched " + requestCount + " urls");
    console.log("Found  string 457b4c66887cf81d30728f7ef3be6c49 in ", matchedUrls[0]);
    process.exit(code=0)
};

var crawler = new Crawler({
    //Options place holder
});

var queueWrapper = function(url) {
    if(matchedUrls.length){complete();}
    else{
        if(url.indexOf("simpleenergy") != -1 && !urls[url]){
           urls[url] = {"url":url};
           if(!(requestCount%25)){
               console.log("    Urls searched: ",requestCount);
           }
              requestCount++;
              crawler.queue(url);
        }
    }
}

console.log("Crawling http://simpleenergy.com");
queueWrapper("http://simpleenergy.com");
