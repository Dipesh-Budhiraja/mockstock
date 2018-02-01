$(document).ready(function(){
    
    $(".amount-input").keydown(function(event){
        var value = event.which - 48;
        console.log(value);
        
    });
});