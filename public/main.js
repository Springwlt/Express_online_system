$("#commit").on("click",function(evt){
    if(Hint()) {
        var examAnswer = new  ExamAnswer();
        var  examsAnswer = examAnswer.getExamAnswer(document.getElementById("form"));
        var ansewerLibrary = AnsewerLibrary();
        var score = getScore(ansewerLibrary,examsAnswer);
        document.getElementById("score").value = score;
    }else{
        evt.preventDefault();
    }
    $.post("/score",$("#form").serialize(),function(score){
        $("#score").prop("value",score);
    });
});
var getScore = function(ansewerLibrary,examsAnswer) {
    var score = 0;
    _.forEach(ansewerLibrary, function(n) {
        _.forEach(examsAnswer, function(m) {
            if(n.name === m.name) {
               if(m.value.toString() === n.answer.toString()) {
                    score += n.score;
               }
            }
        });
    });
    return score;
}
