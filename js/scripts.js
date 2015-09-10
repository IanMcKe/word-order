var wordOrder = function(userString) {
    //removes special characters and convert to lowercase
    userString = userString.replace(/[^a-zA-Z" "]+/g, '').toLowerCase();
    //removes extra whitespace
    var splitString = userString.replace(/(\s+\s+)/g, ' ').split(' ');
    var wordCount = {};
    for (var i = 0; i < splitString.length; i++) {
        if (splitString[i] in wordCount) {
            wordCount[splitString[i]] += 1;
        } else {
            wordCount[splitString[i]] = 1;
        }
    }

    return wordCount;
};
