$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});
$("input[type='text']").keypress(function(event){
    if(event.which === 13 && $(this).val() !== "" && $(this).val() !== " "){
        console.log($(this).val());
        var toDoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + toDoText + "</li>");
    }
});
$("h1 span i").click(function(){
    $("input[type='text']").fadeToggle(200);
    $(this).toggleClass("fa-plus");
    $(this).toggleClass("fa-minus");
});