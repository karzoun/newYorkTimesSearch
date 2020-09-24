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

            $('#wellSection').empty()
            for (var i = 0; i < NYTData.response.docs.length; i++) {
                console.log(NYTData.response.docs[i].headline.main)
                console.log(NYTData.response.docs[i].section_name)
                console.log(NYTData.response.docs[i].pub_date)
                console.log(NYTData.response.docs[i].byline.original)
                console.log(NYTData.response.docs[i].web_url)

                var wellSection = $('<div>')
                wellSection.addClass('well')
                wellSection.attr('id', 'articleWell-' + i)
                $('#wellSection').append(wellSection)

                $('#articleWell-' + i).append('<h3>' + NYTData.response.docs[i].headline.main + '</h3>')
                $('#articleWell-' + i).append('<h5>' + NYTData.response.docs[i].section_name + '</h5>')
                $('#articleWell-' + i).append('<h5>' + NYTData.response.docs[i].pub_date + '</h5>')
                $('#articleWell-' + i).append('<h5>' + NYTData.response.docs[i].byline.original + '</h5>')
                $('#articleWell-' + i).append('<a href=" +  NYTData.response.docs[i].web_url + ">' + NYTData.response.docs[i].web_url + '</a>')


            }




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