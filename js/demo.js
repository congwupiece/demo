$("#l2").on("touchstart", function(e) {
    $(this).css("opacity", "0.5");
    var x = e.originalEvent.touches[0].clientX;
    var y = e.originalEvent.touches[0].clientY;
    window.list = document.elementsFromPoint(x, y);
    window.lis = document.elementFromPoint(x, y);
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
