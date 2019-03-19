function filtering(file, res) {
    file = file.replace(/["]/g, '');
    file = file.replace(/[']/g, '');
    file = file.replace(/[.]/g, ' ');
    file = file.replace(/[,]/g, ' ');
    file = file.replace(/[;]/g, ' ');
    file = file.replace(/[:]/g, ' ');
    file = file.replace(/[־]/g, ' ');
    file = file.replace(/[-]/g, ' ');
    file = file.replace(/[=]/g, ' ');
    file = file.replace(/[!]/g, ' ');
    file = file.replace(/[?]/g, ' ');
    file = file.replace(/[^א-ת ]/g, ' ');
    var wordArray = [];
    var newarray = [];
    wordArray = file.split(' ');
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] !== '' && wordArray[i].length > 1) {
            newarray.push(wordArray[i])
        }
    }
    console.log(newarray.length);
    
    var a = resultKeyVal(newarray);
    res(a);
}
function resultKeyVal(newarray) {
    var words = [];
    for (let i = 0; i < newarray.length; i++) {
        if (!words.includes(newarray[i])) {
            words.push(newarray[i]);
        }
    }
    console.log(2);
    
    var arr = [];
    for (let j = 0; j < words.length; j++) {
        var w = { name: words[j], word: [] };
        for (let q = 0; q < newarray.length; q++) {
            if (newarray[q] == w.name) {
                w.word.push(newarray[q + 1])
            }
        }
        arr.push(w);
    }
    console.log(3);
    
    return filterSum(arr);
}
function filterSum(arr) {
    var trash = [];
    var result = [];
    var count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].word.length; j++) {
            if (!trash.includes(arr[i].word[j])) {
                arr[i].word.forEach((v) => (v === arr[i].word[j] && count++));
                var ws = { word1: arr[i].name, word2: arr[i].word[j], sum: count };
                count = 0;
                result.push(ws)
                trash.push(arr[i].word[j]);
            }
        }
        console.log(5);
        
    }
    console.log(6);
    
    return result;
}

module.exports = filtering;

