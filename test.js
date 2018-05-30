
$(function (){
     $("#form").on("submit",function(e){
         e.preventDefault();
        var val = $("input").val();
        if (val !=='') {
            var elem = $("<li></li>").text(val);
            $(elem).append("<button class= 'rem'>X</button>");
            $("#list").append(elem);
            $("input").val("");
            $(".rem").on("click",function() {
                    $(this).parent().remove();
                });
            }
    
        });
    
    });