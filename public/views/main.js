var currentValue = "AL";
a = $(".nsit-buy .field select");
// if(currentValue!=""){
    a.change(function(e){
        // e.preventDefault();
        let v=a.val()
        console.log(a.val()=="")
        if(a.val()!=""){
        console.log(v+currentValue);            
        if(v=="AL"){
            $('.icon-12').removeClass('dollar');
            $('.icon-12').removeClass('pound');
            $('.icon-12').removeClass('yen');
            $('.icon-12').removeClass('rupee');
            $(".icon-12").addClass("rupee");
            
            var rupee = $("#rupee-coin")[0].textContent;
            $('.curPriceCoin')[0].textContent = rupee;

            var curPrice = $(".curPriceCoin")[0].textContent;
            console.log(curPrice);
            $(".amount-input-coin").keydown(function (event) {
                setTimeout(() => {
                    var amount = event.currentTarget.value;
                    // console.log(amount);
                    var quantity = amount / curPrice;
                    console.log(quantity);
                    $(".change-value-coin")[0].textContent = quantity;
                }, 0002);
            });
        }
        else if (v=="AK"){
            $('.icon-12').removeClass('dollar');
            $('.icon-12').removeClass('pound');
            $('.icon-12').removeClass('yen');
            $('.icon-12').removeClass('rupee');
            $(".icon-12").addClass("dollar");  
            
            var dollar = $("#dollar-coin")[0].textContent;
            $('.curPriceCoin')[0].textContent = dollar; 

            var curPrice = $(".curPriceCoin")[0].textContent;
            console.log(curPrice);
            $(".amount-input-coin").keydown(function (event) {
                setTimeout(() => {
                    var amount = event.currentTarget.value;
                    // console.log(amount);
                    var quantity = amount / curPrice;
                    console.log(quantity);
                    $(".change-value-coin")[0].textContent = quantity;
                }, 0002);
            });         
        }
        else if (v=="AZ"){
            $('.icon-12').removeClass('dollar');
            $('.icon-12').removeClass('pound');
            $('.icon-12').removeClass('yen');
            $('.icon-12').removeClass('rupee');
            $(".icon-12").addClass("pound");  
            
            var pound = $("#pound-coin")[0].textContent;
            $('.curPriceCoin')[0].textContent = pound;

            var curPrice = $(".curPriceCoin")[0].textContent;
            console.log(curPrice);
            $(".amount-input-coin").keydown(function (event) {
                setTimeout(() => {
                    var amount = event.currentTarget.value;
                    // console.log(amount);
                    var quantity = amount / curPrice;
                    console.log(quantity);
                    $(".change-value-coin")[0].textContent = quantity;
                }, 0002);
            });        
        }
        else if (v=="AR"){
            $('.icon-12').removeClass('dollar');
            $('.icon-12').removeClass('pound');
            $('.icon-12').removeClass('yen');
            $('.icon-12').removeClass('rupee');
            $(".icon-12").addClass("yen"); 
            
            var yen = $("#yen-coin")[0].textContent;
            $('.curPriceCoin')[0].textContent = yen;

            var curPrice = $(".curPriceCoin")[0].textContent;
            console.log(curPrice);
            $(".amount-input-coin").keydown(function (event) {
                setTimeout(() => {
                    var amount = event.currentTarget.value;
                    // console.log(amount);
                    var quantity = amount / curPrice;
                    console.log(quantity);
                    $(".change-value-coin")[0].textContent = quantity;
                }, 0002);
            });          
        }
        
    }
        // console.log("hello");
        
    }
    )



    var currentValue = "AL";
b = $(".nsit-sell .field select");
// if(currentValue!=""){
    b.change(function(e){
        // e.preventDefault();
        let v=b.val()
        // console.log(a.val()=="")
        if(b.val()!=""){
        // console.lo1g(v+currentValue);            
        if(v=="AL"){
            $('.icon-13').removeClass('dollar');
            $('.icon-13').removeClass('pound');
            $('.icon-13').removeClass('yen');
            $('.icon-13').removeClass('rupee');
            $(".icon-13").addClass("rupee");
        }
        else if (v=="AK"){
            $('.icon-13').removeClass('dollar');
            $('.icon-13').removeClass('pound');
            $('.icon-13').removeClass('yen');
            $('.icon-13').removeClass('rupee');
            $(".icon-13").addClass("dollar");            
        }
        else if (v=="AZ"){
            $('.icon-13').removeClass('dollar');
            $('.icon-13').removeClass('pound');
            $('.icon-13').removeClass('yen');
            $('.icon-13').removeClass('rupee');
            $(".icon-13").addClass("pound");            
        }
        else if (v=="AR"){
            $('.icon-13').removeClass('dollar');
            $('.icon-13').removeClass('pound');
            $('.icon-13').removeClass('yen');
            $('.icon-13').removeClass('rupee');
            $(".icon-13").addClass("yen");            
        }
        
    }
        // console.log("hello");
        
    }
    )
