$(window).on("scroll", function () {
    if ($(window).scrollTop() > 50 && $("header").outerWidth() > 991.98) {
        $("header").css("height", "54px")
    }
    else {
        $("header").css("height", "80px")
    }
})

$("nav span").on("mouseover", function () {
    $("nav span").css("color", "red")
})
$("nav span").on("mouseout", function () {
    $("nav span").css("color", "black")
})
$("nav span").on("click", function () {
    $("nav ul div:nth-child(1)").toggleClass("hamMenuOpen")
    $("nav ul li").toggleClass("navListOpen")
})
$(window).on("resize", function () {
    if ($("header").outerWidth() > 991.98) {
        $("nav ul div:nth-child(1)").removeClass("hamMenuOpen")
        $("nav ul li").removeClass("navListOpen")
    }
})
$("#imageClick").on("click", function () {
    $("iframe").css("display", "block")
    $("#imageClick").css("display", "none")
    var source = $("iframe").attr("src")
    $("iframe").attr("src", source + "?autoplay=1")
})