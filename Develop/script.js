// var moment = require("moment");

$(document).ready(function () {
    $('.saveBtn').on('click', function () {
        const value = $(this).siblings('.description').val();
        const time = $(this).parent().attr('id')
        localStorage.setItem(time, value)
        console.log(value);


        setTimeout(function () {
            $('.notification').removeClass('show');
        }, 5000);
    });

    function hourUpdater() {
        var currentHour = moment().hours();

        $('.time-block').each(function () {
            var blockHour = parseInt($(this).attr('id').split('-')[1]);

        // this if statement is for checking if time is past current time block //

            if (blockHour < currentHour) {
                $(this).addClass('past');
            }else if (blockHour === currentHour) {
                $(this).removeClass('past');
                $(this).addClass('present');
            }else {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');   
             }
            });
        }

    hourUpdater();

    // interval checks every 15 seconds to see if hour needs to be updated // 

    var interval = setInterval(hourUpdater, 15000);

    // load all the  saved data from localStorage to be displayed in time blocks //

    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));

});
