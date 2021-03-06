$(document).ready(function () {

    var options = {
        weekday: "long",
        month: "long",
        day: "numeric"
    };

    var today = new Date();
    var todaysDate = today.toLocaleDateString("en-US", options);

    $(".time-header").text(todaysDate)

    var todays = new Date();
    var hours = todays.getHours();

    var objHours = [
        {
            hour: 9,
            text: $("#textarea-1")
        },
        {
            hour: 10,
            text: $("#textarea-2")
        },
        {
            hour: 11,
            text: $("#textarea-3")
        },
        {
            hour: 12,
            text: $("#textarea-4")
        },
        {
            hour: 13,
            text: $("#textarea-5")
        },
        {
            hour: 14,
            text: $("#textarea-6")
        },
        {
            hour: 15,
            text: $("#textarea-7")
        },
        {
            hour: 16,
            text: $("#textarea-8")
        },
        {
            hour: 17,
            text: $("#textarea-9")
        }
    ]

    for (var i = 0; i < objHours.length; i++) {

        var getHours = objHours[i].hour
        var getText = objHours[i].text

        if (getHours < hours) {
            getText.addClass("grey");
        }
        if (getHours > hours) {
            getText.addClass("green");
        }
        if (getHours === hours) {
            getText.addClass("red");
        }

        getText.val(localStorage.getItem(getHours))
    }

    $(".button").on("click", function () {
        for (var i = 0; i < objHours.length; i++) {
            var schedule = objHours[i]
            var scheduleHours = schedule.hour
            var event = schedule.text.val()

            if (event !== '')
                localStorage.setItem(scheduleHours, event);
        }
    });
});