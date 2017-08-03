$(document).ready(function () {
    $.ajax({
        url: 'https://randomuser.me/api/?format=json',
        dataType: 'json',
        success: function (data) {
            // console.log(data.result[0].name.first);
            var userFirstName = data.results[0].name.first;
            // console.log(userFirstName);
            $('body').append(userFirstName);
        }
    });
});