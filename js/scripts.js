var wordOrder = function(userString) {
    //removes special characters and convert to lowercase
    userString = userString.replace(/[^a-zA-Z" "]+/g, '').toLowerCase();
    //removes extra whitespace
    var splitString = userString.replace(/(\s+\s+)/g, ' ').split(' ');
    var wordCount = {};
    var finalWordCount = {};
    for (var i = 0; i < splitString.length; i++) {
        if (splitString[i] in wordCount) {
            wordCount[splitString[i]] += 1;
        } else {
            wordCount[splitString[i]] = 1;
        }
    }
    debugger;
    var wordCountSorted = Object.keys(wordCount).sort(function(a,b){return wordCount[b] - wordCount[a]});
    for (var i = 0; i < wordCountSorted.length; i++){
        finalWordCount[wordCountSorted[i]] = wordCount[wordCountSorted[i]]; ;
    }

    return finalWordCount;
};

$(document).ready(function() {
    $("form#userString").submit(function(event) {
        var result = wordOrder($("input#userString").val());
        $('.wordOrder').empty();
        for (key in result) {
            $('.wordOrder').append(key + ": " + result[key] + " ");
        }
        event.preventDefault();
    });
});

//
// wordCountSorted = Object.keys(wordCount).sort(function(a,b){return list[b] - list[a]});
// return wordCountSorted;
//
// for (var = i; i < wordCountSorted.length; i++){
//     newWordCount[wordCountSorted[i]] = wordCount[wordCountSorted[i]]; ;
// }
//
// var list = {"you": 100, "me": 75, "foo": 116, "bar": 15};
// keysSorted = Object.keys(list).sort(function(a,b){return list[a]-list[b]})
// alert(keysSorted);     // bar,me,you,foo
