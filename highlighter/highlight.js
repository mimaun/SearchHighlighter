"use strict";

window.onload = function() { 
// fill in this anonymous function's  body and add other functions as needed.

    // get all words from <p>.
    var allText = $("p").text();
    var allwords = allText.split(/[,.\n\s!?()]+/);
    var spanList = [];

    // add class, class's name should be same each lowercase word.
    $.each(allwords, function(i, val) { 

        // avoid null.
        if(val != undefined) {
            var newSpan = $('<span>' + val + '</span>');
            newSpan.addClass(val.toLowerCase());
            spanList.push(newSpan);
        } 
        // delete null.
        else 
            allwords.splice(i, 1);
    }); 

    // click event.

    // remove highlight class from all words.

    // search same word by class name.
    
    // create and add "highlight" class, it should highlight word.

};

