$(function () {
  $("#drop").click(function () {
    $(".hide_area").toggleClass("hide");
    $(this).toggleClass("icon_rotate");
  });

  $(".tip_icon, .tooltip").hover(function () {
    $(".tooltip").toggleClass("show");
  });
  //   $("#tooltipClose").click(function () {
  //     $(".tooltip").hide();
  //   });

  $(".menu_list ul > li").click(function () {
    if ($(this).is(".active") == true) {
      $(this).removeClass("active");
    } else {
      $(this).addClass("active");
    }
  });

  $(".ck_tab_list_ul li").click(function () {
    if ($(this).is(".active") == true) {
      $(this).removeClass("active");
    } else {
      $(this).addClass("active");
      $(this).siblings().removeClass("active");
    }
  });

  //   $(".menu_list ul > li").click(function () {
  //     if ($(this).is(".active") == true) {
  //       $(this).removeClass("active");
  //     } else {
  //       $(this).addClass("active");
  //       $(this).siblings().removeClass("active");
  //     }
  //   });
});
// $(".tab_list_box > li").click(function () {
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
