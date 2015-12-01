$("#l2").on("touchstart", function() {
    $(this).css("opacity", "0.5");
});
$("#l1").on("touchstart", function() {
    $(this).css("opacity", "0.5");
});

$("#l2").on("touchend", function() {
    $(this).css("opacity", "1");
});
$("#l1").on("touchend", function() {
    $(this).css("opacity", "1");
});
