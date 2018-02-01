$(document).ready(function(){
    $(".amount-input").on('keydown', function(e){
        console.log(e.isDefaultPrevented());
        
        console.log('something is pressed');
        
        var newVal = $(".amount-input").val();
        var newVal2 = parseInt(newVal);
        console.log(newVal2);
    });
});