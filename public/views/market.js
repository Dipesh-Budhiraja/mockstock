$(document).ready(function () {
    console.log('market');

    $(".buy-btn").on('click', function () {
        var aaya1 = $(this).parent().siblings().children()[0].value;
        var aaya2 = $(this).parent().siblings().children()[1].value;
        var aaya3 = $(this).parent().siblings().children()[2].value;
        var aaya4 = $(this).parent().siblings().children()[3].value;
        // console.log($("#companyBuy")[0].textContent);
        $("#companyBuy")[0].textContent = aaya1;
        $("#placePriceBuy")[0].textContent = aaya2;
        $("#LVBuy")[0].textContent = aaya3;
        $("#buyFormIdBuy")[0].value= aaya4;
       

        $('.ui.modal.buy').modal('show', function () {
            var curPrice = $(".curPriceBuy")[0].textContent;
            console.log(curPrice);
            $(".amount-input-buy").keydown(function (event) {
                setTimeout(() => {
                    var amount = event.currentTarget.value;
                    // console.log(amount);
                    var quantity = amount / curPrice;
                    console.log(quantity);
                    $(".change-value-buy")[0].textContent = quantity;
                }, 0002);
            });
        });
    });

    $(".sell-btn").on('click', function () {
        var aaya1 = $(this).parent().siblings().children()[0].value;
        var aaya2 = $(this).parent().siblings().children()[1].value;
        var aaya3 = $(this).parent().siblings().children()[2].value;
        var aaya4 = $(this).parent().siblings().children()[3].value;
        
        $("#companySell")[0].textContent = aaya1;
        $("#placePriceSell")[0].textContent = aaya2;
        $("#LVSell")[0].textContent = aaya3;
        $("#buyFormIdSell")[0].value= aaya4;

        $('.ui.modal.sell').modal('show', function () {
            var curPrice = $(".curPriceSell")[0].textContent;
            console.log(curPrice);
            $(".amount-input-sell").keydown(function (event) {
                setTimeout(() => {
                    var amount = event.currentTarget.value;
                    // console.log(amount);
                    var quantity = amount / curPrice;
                    console.log(quantity);
                    $(".change-value-sell")[0].textContent = quantity;
                }, 0002);
            });
        });
    });

    $(".short-btn").on('click', function () {
        var aaya1 = $(this).parent().siblings().children()[0].value;
        var aaya2 = $(this).parent().siblings().children()[1].value;
        var aaya3 = $(this).parent().siblings().children()[2].value;
        var aaya4 = $(this).parent().siblings().children()[3].value;
        
        $("#companyShort")[0].textContent = aaya1;
        $("#placePriceShort")[0].textContent = aaya2;
        $("#LVShort")[0].textContent = aaya3;
        $("#buyFormIdShort")[0].value= aaya4;

        $('.ui.modal.short').modal('show', function () {
            var curPrice = $(".curPriceShort")[0].textContent;
            console.log(curPrice);
            $(".amount-input-short").keydown(function (event) {
                setTimeout(() => {
                    var amount = event.currentTarget.value;
                    // console.log(amount);
                    var quantity = amount / curPrice;
                    console.log(quantity);
                    $(".change-value-short")[0].textContent = quantity;
                }, 0002);
            });
        });
    });

    //nsit buy button in nsit coin section
    $(".nsit-buy-button").on('click', function () {
        $('.ui.modal.tiny.nsit-buy').modal('show', function () {
            var curPrice = $(".curPriceCoinBuy")[0].textContent;
            console.log(curPrice);
            $(".amount-input-coin-buy").keydown(function (event) {
                setTimeout(() => {
                    var amount = event.currentTarget.value;
                    // console.log(amount);
                    var quantity = amount / curPrice;
                    console.log(quantity);
                    $(".change-value-coin-buy")[0].textContent = quantity;
                }, 0002);
            });
        });
    });

    //nsit sell button in nsit coin section
    $(".nsit-sell-button").on('click', function () {
        $('.ui.modal.tiny.nsit-sell').modal('show', function () {
            var curPrice = $(".curPriceCoinSell")[0].textContent;
            console.log(curPrice);
            $(".amount-input-coin-sell").keydown(function (event) {
                setTimeout(() => {
                    var amount = event.currentTarget.value;
                    // console.log(amount);
                    var quantity = amount / curPrice;
                    console.log(quantity);
                    $(".change-value-coin-sell")[0].textContent = quantity;
                }, 0002);
            });
        });
    });
});