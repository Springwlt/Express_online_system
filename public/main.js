$("#commit").on("click",function(evt){
    $.post("/score",$("#form").serialize(),function(score){
        $("#score").prop("value",score);
    });
});
