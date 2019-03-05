
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
    file = file.replace(/[^א-ת ]/g, '');
    var wordArray = [];
    var newarray = [];
    wordArray = file.split(' ');
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i] !== '' && wordArray[i].length > 1) {
            newarray.push(wordArray[i])
        }
    }
    res(newarray)
}
module.exports = filtering;