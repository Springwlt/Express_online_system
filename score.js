var AnserLibrary = require("./AnsewerLibrary.js");
var _ = require("./public/lodash.js");
var ansewerLibrary = AnserLibrary();
function getScore(anwer) {
    var score = 0;
    var result = [];
    _.forEach(anwer,function(n,i) {
        result.push({name:i,value:n});
    });
    _.forEach(ansewerLibrary,function(n,i){
        _.forEach(result,function(m,j) {
                if(n.name === m.name && m.value.toString() === n.answer.toString()) {
                    score += n.score;
                }
        });
    });
        return score;
}
module.exports = getScore;
