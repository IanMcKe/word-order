var wordOrder = function(userString) {
    var wordCount = {};
    //removes special characters and convert to lowercase; trims white space at beginning and end of string
    userString = userString.trim().replace(/[^a-zA-Z" "]+/g, '').toLowerCase();
    //removes extra whitespace
    userString = userString.replace(/(\s+\s+)/g, ' ')
    if ((userString !== '') && (userString !== ' ')) {
        var splitString = userString.split(' ');
        var finalWordCount = {};
        for (var i = 0; i < splitString.length; i++) {
            if (splitString[i] in wordCount) {
                wordCount[splitString[i]] += 1;
            } else {
                wordCount[splitString[i]] = 1;
            }
        }
        var wordCountSorted = Object.keys(wordCount).sort(function(a,b){return wordCount[b] - wordCount[a]});
        for (var i = 0; i < wordCountSorted.length; i++){
            finalWordCount[wordCountSorted[i]] = wordCount[wordCountSorted[i]]; ;
        }

        return finalWordCount;
    } else {
        wordCount["error"] = "enter some words!";
        return wordCount;
    }
};

$(document).ready(function() {
    $("form#userString").submit(function(event) {
        var result = wordOrder($("input#userString").val());
        $('.wordOrder').empty();
        for (key in result) {
            $('.wordOrder').append(key + ": " + result[key] + " " + "<br>");
        }
        event.preventDefault();
    });
});
