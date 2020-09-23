// phKbttx0qAqZPhTJ5khYXCQA4gkc9KJC
//api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=phKbttx0qAqZPhTJ5khYXCQA4gkc9KJC
var authKey = "phKbttx0qAqZPhTJ5khYXCQA4gkc9KJC"

var queryTerm = "";
var numResults = 0
var startYear = 0
var endYear = 0

var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey

var articleCounter = 0

function runQuery(numArticles, queryURL) {

    $.ajax({ url: queryURL, method: 'GET' })
        .done(function(NYTData) {
            console.log(queryURL)
            console.log(numArticles)
            console.log(NYTData)

        })

}

$('#searchButton').on('click', function() {

    queryTerm = $('#search').val().trim()

    var newURL = queryURLBase + "&q=" + queryTerm

    numResults = $('#numRecords').val()

    startYear = $('#startYear').val().trim()
    endYear + $('#endYear').val().trim()
    if (parseInt(startYear)) {
        startYear = startYear + "0101"
        newURL = newURL + "&begin_date=" + startYear


    }
    if (parseInt(endYear)) {
        endYear = endYear + "0101"
        newURL = newURL + "&end_date=" + endYear


    }



    runQuery(numResults, newURL)
    return false;

})