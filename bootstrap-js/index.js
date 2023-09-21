
let about = $("#About").offset().top;


$(window).scroll(function () {
    let winsc = $(window).scrollTop();
    if (winsc > about - 200) {
        $(".navbar").css("backgroundColor","black");
    } else {
        $(".navbar").css("backgroundColor", "transparent");
    }
})



$("a[href^='#']").click(function (e) {
    let ah = e.target.getAttribute("href");
    let sectionOffset = $(ah).offset();
    $("body").animate({ scrollTop: sectionOffset },1500);
})