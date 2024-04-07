$(function () {
  $("#testModal").hide();

  //드롭다운 이벤트
  $("#drop").click(function () {
    $(".hide_area").toggleClass("hide");
    $(this).toggleClass("icon_rotate");
  });

  //툴팁 close 버튼

  $(".tip_icon").hover(function () {
    $(this).children().toggleClass("show");
  });
  $(".tooltip_close").click(function () {
    $(this).parent().removeClass("show");
  });

  //모달 이벤트
  $("input[name='phone']").click(function (e) {
    e.preventDefault();
    $("#testModal").modal("show");

    $("#modalY").click(function () {
      $("#testModal").modal("hide");
      $("input[name='phone']").prop("checked", true);
    });
    $("#modalN").click(function () {
      $("#testModal").modal("hide");
      $("input[name='phone']").prop("checked", false);
    });
    $("#modalClose").click(function () {
      $("#testModal").modal("hide");
    });
  });

  // 대메뉴 style 변경
  $(".tab_list_box > li").click(function () {
    var index = $(this).index();

    if ($(this).is(".active") == true) {
      $(this).removeClass("active");
    } else {
      $(this).addClass("active");
      $(this).siblings().removeClass("active");
      $(".tab_cont > div").css("display", "none");

      $(".tab_cont > div").eq(index).css("display", "block");
    }
  });

  //소메뉴 style 변경
  $(".ck_tab_list_ul > li").click(function () {
    if ($(this).is(".active") == true) {
      $(this).removeClass("active");
    } else {
      $(this).addClass("active");
      $(this).siblings().removeClass("active");
    }
  });
});
