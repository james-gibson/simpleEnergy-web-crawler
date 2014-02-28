var Crawler = require("crawler-hq").Crawler;

var urls = [];
var requestCount = 0;
var matchedUrls = [];
var done = false;

var crawler = new Crawler({
    //Options place holder
});

console.log("Crawling http://simpleenergy.com");
crawler("http://simpleenergy.com");
