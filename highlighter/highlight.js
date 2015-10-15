"use strict";

window.onload = function() { 
// fill in this anonymous function's  body and add other functions as needed.

    var allText = $("#alltext").text();
    var temp = allText.split("\n");
    console.log(temp);
    var allwords = [];

    $.each(temp, function(i, val) { 
        if(val != "" || val != " ") {
            if(val.match("\n")) 
                allwords.push(val.split("\n"));
            if(val.match(",")) 
                allwords.push(val.split(","));
            else 
                allwords.push(val);
    });

    // $.each(allwords, function(i, val) {
    //     var newSpan = $("<span>" + val + "</span>");
    //     newSpan.addClass("word");
    //     console.log(val + ".");
    // });

};

