
// Jquery grammar to ensure run the script part after all html part done.
$(function () {
    $("#logo").hover(
        // Mouse-in function
        function () {
            // change logo picture's size to 1.3 times
            $(this).css("transform", "scale(1.3)", 1000);
        },
        // Mouse-out function
        function () {
            // change logo picture's size to it's original size
            $(this).css("transform", "scale(1)", 1000);
        });

    // Using fullpage library's grammar to initiate and use a global variable to receive it.
    let fullpage_api = new fullpage('#fullpage', {
        // turn on scrolloverflow to make the fullpage size changeable
        scrollOverflow: true,
        // make sure 
        scrollOverflowReset: true,
        // Cancel vertical centered
        verticalCentered: false,
        // Add anchors to make data-menuanchor valide.
        anchors: ['firstP', 'secondP', 'thirdP'],
        menu: ".navbar-nav",
        // Auto scrolling to next section
        autoScrolling: true,
        // In some pages, perform horizontal scrolling to access different slides.
        // scrollHorizontally: true,
    });

    // control the click event of dev class
    $(".small_box_1 .dev").click(function () {
        // show the information of developer part
        $(".developer_info").show();
        // hide original part
        $(".description,.big_box_1").css("display", "none")
    })

    // control the click event of brows class
    $(".small_box_1 .brows").click(function () {
        // show the information of browser part
        $(".browser_info").show();
        // hide original part
        $(".description,.big_box_1").css("display", "none")
    })

    // control return button in developer part
    $(".return_1").click(function () {
        $(".developer_info").css("display", "none");
        $(".description,.big_box_1").css("display", "block")
    })

    // control return button in browser part
    $(".return_2").click(function () {
        $(".browser_info").css("display", "none");
        $(".description,.big_box_1").css("display", "block")
    })

    $(".http_button").click(function () {
        // toggles the visibility of http_info
        $("#http_info").fadeToggle();
        // resize fullpage after show http_info
        fullpage_api.reBuild();
    })

    $(".get_button").click(function () {
        $("#get_info").fadeToggle();
        fullpage_api.reBuild();
    })

    $(".show_button").click(function () {
        $("#show_info").fadeToggle();
        fullpage_api.reBuild();
    })

    $(".AJAX_button").click(function () {
        $("#AJAX_info").fadeToggle();
        fullpage_api.reBuild();
    })


    $(".benificial").on("click", function () {
        $(".benificial_info").fadeToggle();
    })

    $("#mondo").on("click", function () {
        $("#mondo_info").fadeToggle();
        // to rebuild the size of fullpage.
        fullpage_api.reBuild();
    })

    $("#xanadu").on("click", function () {
        $("#xanadu_info").fadeToggle();
        fullpage_api.reBuild();

    })

    $("#huh").on("click", function () {
        $("#huh_info").fadeToggle();
        fullpage_api.reBuild();
    })

    $("#google").on("click", function () {
        $("#google_info").fadeToggle();
        fullpage_api.reBuild();
    })

    $("#ptp").on("click", function () {
        $("#ptp_info").fadeToggle();
        fullpage_api.reBuild();
    })

    $("#social").on("click", function () {
        $("#social_info").fadeToggle();
        fullpage_api.reBuild();
    })

    // control mouse in and mouse out event of skill_bar class
    $(".skill_bar").mouseenter(function () {
        // add class attribute to skill_bar class' element
        $(this).addClass(" progress-bar-striped progress-bar-animated bg-dark")
    }
    ).mouseleave(function () {
        // remove such classes
        $(this).removeClass(" progress-bar-striped progress-bar-animated bg-dark")
    })

    // create the function of fetchTime
    function fetchTime() {
        // Jquery's AJAX function
        $.ajax({
            // target url
            url: "http://worldtimeapi.org/api/timezone/Australia/Perth",
            // request type is get
            type: "get",
            // If success then run the function
            success: function (data) {
                // use regular expression only choose specific current time and exclude time zone
                let current_time = data.datetime.match(/(?<=T)(.*?)(?=\.)/)[0];
                // add time string to navbar
                $("#current_time").html("TIME: " + current_time);
            },
            // call the function after the completion of fetchTime.
            complete: function () {
                // Schedule the function to be called again in 1 second
                setTimeout(fetchTime, 1000);
            },
            // call the function if there exist any error
            error: function (error) {
                // print error info in console.  
                console.log("Error:", error);
            }
        })
    }

    // call the function
    fetchTime();

    // click event on id of joke_button
    $("#joke_button").click(function () {
        $.ajax({
            // target url
            url: "https://official-joke-api.appspot.com/random_joke",
            // request type
            type: "GET",
            // success functiion
            success: function (result) {
                // show the content of random joke
                $("#setup_container").html(result.setup);
                $("#punchline_container").html(result.punchline);
            },
            // error function
            error: function (error) {
                console.log("Error:", error);
            }
        })
    })

})
