$(document).ready(function () {
    console.log('market');

    $(".buy-btn").on('click', function () {
        var aaya1 = $(this).parent().siblings().children()[0].value;
        var aaya2 = $(this).parent().siblings().children()[1].value;
        var aaya3 = $(this).parent().siblings().children()[2].value;
        // console.log($("#companyBuy")[0].textContent);
        $("#companyBuy")[0].textContent = aaya1;
        $("#placePrice")[0].textContent = aaya2;
        $("#LV")[0].textContent = aaya3;

        // console.log($("#companyBuy")[0].textContent);

        $('.ui.modal.buy').modal('show', function () {
            var curPrice = $(".curPrice")[0].textContent;
            console.log(curPrice);
            $(".amount-input").keydown(function (event) {
                setTimeout(() => {
                    var amount = event.currentTarget.value;
                    // console.log(amount);
                    var quantity = amount / curPrice;
                    console.log(quantity);
                    $(".change-value")[0].textContent = quantity;
                }, 0002);
            });
        });
    });

    //nsit buy button in nsit coin section
    $(".nsit-buy-button").on('click', function () {
        $('.ui.modal.tiny.nsit-buy').modal('show', function () {
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
        });
    });
});