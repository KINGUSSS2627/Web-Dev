// $ or Jquery();

// we can skip this by including script at the end
// for safe load process use this below statement
$(document).ready(function () {
    $("h1").css("color", "red");
});


// how to select an element using j query
$("h1");
jQuery("h1");

// Adding class to h1
$("h1").addClass("big_change margin-10");
// Removing a class from an Element

$("h1").hasClass("margin-10");

// to chk if any thing has a particular class or not
$("h1").removeClass("margin-10");

// To change a text
$("h1").text("This is new Heading");

// to change css
$("button").html("<em>Modified Click</em>");

// to get a attribute
$("a").attr("href");

// to set a attribute
$("a").attr("href", "https://www.youtube.com/");

// to add a event listner in jQuery
$("h1").click(function () {
    $("h1").css("font-family", "Verdana, Geneva, Tahoma, sans-serif");
})

$("button").hover(function () {
    $("button").css("backgroundColor", "yellow");
})

$("#inp").keypress(function (event) {
    $("h1").text(event.key);
})

// easier way to add any event
$("h1").on("mouseover", function () { $("h1").css("color", "blue"); });


// Adding and removing elements
$("h1").before("<hr>");
$("h1").after("<hr>");
$("h1").prepend("<hr>");
$("h1").append("<hr>");

// Animate using jQuery
// $("button").on("click", function () {
//     $("h1").slideToggle();
// });

// $("button").on("click", function () {
//     $("h1").fadeToggle();
// });

//Custom animate
$("button").on("click", function () {
    $("h1").animate({ opacity: 0.5 });
});

//Chain up
$("button").on("click", function () {
    $("h1").slideUp().slideDown();
});

