$(document).ready(function () {
    console.log('market');

    $(".buy-btn").on('click', function () {
        var aaya = $(this).parent().siblings().children()[0].value;
        
        console.log($("#companyBuy")[0].textContent);
        $("#companyBuy")[0].textContent = aaya;
        console.log($("#companyBuy")[0].textContent);
        $('.ui.modal.buy')
            .modal('show')
            ;
    });
});