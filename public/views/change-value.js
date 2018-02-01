$(document).ready(function(){
    var curPrice = $(".curPrice")[0].textContent;
    // console.log(curPrice);
    
    $(".amount-input").keydown(function(event){
        setTimeout(() => {
            var amount = event.currentTarget.value;
            // console.log(amount);
            var quantity = amount/curPrice;
            console.log(quantity);
            $(".change-value")[0].textContent = quantity;
        }, 0002);
    });
});