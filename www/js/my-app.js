// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page');
})

// function NewsAPI(){
//     var url = 'https://newsapi.org/v2/top-headlines?' +
//     'sources=bbc-news&' +
//     'apiKey=341a2ec7b1f44a2da32508bca18f7f57';
// var req = new Request(url);
// fetch(req)
// .then(function(response) {
//   console.log(response.json());
// })


// }


function NewsAPI(){
    var http = new XMLHttpRequest();
    var url = "https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=341a2ec7b1f44a2da32508bca18f7f57";
    //var req = new Request(url);

    
    http.open('GET', url);
    http.send();
    http.onreadystatechange = (e) => {
            var response = http.responseText;
            var responseJSON = JSON.parse(response); 
            console.log(Response);
            console.log(responseJSON);

             
            var content = "<table>";
            // var newsList = responseJSON;
             for (var i = 0; i <responseJSON.articles.length; i++){
                content+= "<tr>";
                content += "<td>" + responseJSON.articles[i].title + "</td>";
                content += "<td>" + responseJSON.articles[i].content + "</td>";
                content += '<td><img width="200" height="80" src="' + responseJSON.articles[i].urlToImage + '"></img></td>';
                content+= "</tr>";
            
                
                
            }
            content+= "</table>";
            document.getElementById('newsResults').innerHTML = content;
             
             //  var newsList1 = responseJSON.articles[0].title;
            //  document.getElementById('Author').innerHTML = newsList1;

            //  var newsList = responseJSON.articles[0].description;
            //  document.getElementById('description').innerHTML = newsList;


            // var content = '<table>';
            // var responseJSON =
            // for (var i = 0; i <10; i ++){
            //     content = content +"<tr><td>";
            //     content+= responseJSON.articules[i].content;
            //     content+= "</td><td>"+
            //     responseJSON.articules[i].content;
            //     +"</td></tr>";

            //     content += "</table>";
            //     document.getElementById.innerHTML = content;
            // }
    }

    
}

                // responseJSON.articles[i].title + "</td><td>";
                // responseJSON.articles[i].title + "</td><td>";
                // responseJSON.articles[i].title + "</td><td>";
                // responseJSON.articles[i].title + "</td><td>";
                // responseJSON.articles[i].title + "</td><td>";
                // responseJSON.articles[i].title + "</td><td>";
                // responseJSON.articles[i].title + "</td><td>";
                // responseJSON.articles[i].title + "</td><td>";
                // responseJSON.articles[i].title + "</td><tr>";