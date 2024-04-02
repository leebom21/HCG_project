$(function () {
  $("#drop").click(function () {
    $(".hide_area").toggleClass("show");
    $(this).toggleClass("icon_rotate");
  });

  $(".tip_icon").hover(function () {
    $(".tooltip").toggle();
  });
});
// $(".ck_tab_list_ul li").click(function () {
//   if ($(this).is(".active") == true) {
//     $(this).removeClass("active");
//   } else {
//     $(this).addClass("active");
//     $(this).siblings().removeClass("active");
//   }
// });

// $(".btn_toggle").click(function () {
//   if ($(this).is(".on") == true) {
//     $(this).removeClass("on");
//   } else {
//     $(this).addClass("on");
//   }
// });

// $(".checkin_status").click(function () {
//   if ($(this).is(".on") == true) {
//     $(this).removeClass("on");
//     $(this).find("img").remove();
//   } else {
//     $(this).addClass("on");
//     $(this).prepend(
//       '<img src="/resource/css/golf/images/icon_check02.png" alt="">'
//     );
//   }
// });
