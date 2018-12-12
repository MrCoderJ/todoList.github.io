$("ul").on("click", "li", function(){

   $(this).toggleClass("completed");
   
});
// to delete items from the todo lis
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});
// adding new Li to Ul

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " +  todoText  + "</li>");
    }
});
$(".fa-plus").on("click", function(){
    $("input[type='text']").fadeOut();
});
$("#toggle-form").click(function () {
    $("input[type='text']").fadeToggle();
});