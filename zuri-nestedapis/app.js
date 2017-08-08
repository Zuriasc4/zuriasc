$(document).ready(function () {
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function (data) {
        var nation = data.results[0].nat
        var 
        console.log(nation);
         
        $("body").append("<h1>" + nation + "</h2>")
           
            
           
        }
    });
});