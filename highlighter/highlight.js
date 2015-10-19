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
        var wordArr = val.split(/[\s]+/);
        $.each(wordArr, function(i, val) { 
            if(val != undefined) 
                allwords.push(val);
        });
        allwords.push("\n");
    });

    // add class, class's name should be same each lowercase word.
    $.each(allwords, function(i, val) { 

        var newSpan;
        var isSplitCharAtEnd = false;

        // avoid null.
        if(val != undefined) {

            // escape ,.!?()'":;
            var checkCharPosition = val.search(/[\\,\\.\\!\\?\\(\\)\\'\\"\\:\\;]/);
            var splitChar = ""
            
            // no escape key.
            if(checkCharPosition == -1) {
                newSpan = $("<span>" + val + "</span>");
                newSpan.addClass(val.toLowerCase());
                isSplitCharAtEnd = false;
            } 
            
            // found escape key.
            else {
                splitChar = val.charAt(checkCharPosition);
                var lengthOfWord = val.length;
                var myWord = "";

                // begin.
                if(checkCharPosition == 0) {
                    myWord = val.slice(1);
                    $("body").append(splitChar); 
                    newSpan = $("<span>" + myWord + "</span>");
                    newSpan.addClass(myWord.toLowerCase());
                    isSplitCharAtEnd = false;
                }
                // end.
                else if(checkCharPosition == lengthOfWord-1) {
                    myWord = val.slice(0, lengthOfWord-1);
                    newSpan = $("<span>" + myWord + "</span>");
                    newSpan.addClass(myWord.toLowerCase());
                    isSplitCharAtEnd = true;
                }
                // other
                else { 
                    newSpan = $("<span>" + val + "</span>");
                    newSpan.addClass(val.toLowerCase());
                    isSplitCharAtEnd = false;
                }
            }

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
            else {
                $("body").append(newSpan); 
                if(isSplitCharAtEnd)
                    $("body").append(splitChar); 
                $("body").append(" "); 
                isSplitCharAtEnd = false;
            }
        } 
        // delete null.
        else 
            allwords.splice(i, 1); 
    }); 

    console.log("I've done.");
};

// click event.
function clickWord() {
    console.log("clickEvent");

    /*
     *  $(“[class =^ Mary]”).css(color:red)
     * */

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

    console.log("I've done.");
}

