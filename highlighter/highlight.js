"use strict";

window.onload = function() { 
// fill in this anonymous function's  body and add other functions as needed.

    // get all words from <p>.
    var allText = $("p").text();
    $("p").replaceWith("");
    var allLines= allText.split(/[\n]+/);
    var allwords = []
    
    $.each(allLines, function(i, val) { 
        // var wordArr = val.split(/[,.\s!?()]+/);
        var wordArr = val.split(/[\s!?()]+/);
        $.each(wordArr, function(i, val) { 
            if(val != undefined) 
                allwords.push(val);
        });
        allwords.push("\n");
    });

    //add class, class's name should be same each lowercase word.
    $.each(allwords, function(i, val) { 
    
        var newSpan;
    
        // avoid null.
        if(val != undefined) {
            newSpan = $("<span>" + val + "</span>");
            newSpan.addClass(val.toLowerCase());
            newSpan.css({
                "background-color": "transparent"
            });

            // click event.
            newSpan.click(clickWord);

            // print to screen.
            if(val == "\n") {
                $("body").append("<br>");
                return true;
            }
            // else if(val == "," || val == "." || val == "?" || val == "!") {
            //     $("body").append(val);
            //     return true;
            // }
            else {
                $("body").append(newSpan); 
                $("body").append(" "); 
            }
        } 
        // delete null.
        else 
            allwords.splice(i, 1); 
    }); 
};

// click event.
function clickWord() {

    // search word.
    var word = $(this).attr("class");

    // remove highlight class from all words.
    $("span").each(function(i) {
        if($(this).hasClass("highlight")) {

            $(this).removeClass("highlight");

            // reset highlight color.
            $(this).css({
                "background-color": "transparent"
            });
        }
    });

    // search same word by class name.
    $("span").each(function(i) { 
        if($(this).attr("class") == word) {
            $(this).addClass("highlight");
            console.log("found");
        }
    });

    // create and add "highlight" class, it should highlight word.
    $("span.highlight").css({
        "background-color": "lightgreen"
    });
}

