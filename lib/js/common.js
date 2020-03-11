$(function(){

    //ドロワーメニュー
  $('.toggle_nav,.toggle_nav_bg').on('click', function () {
    $('body').toggleClass('open');
  });

  //page_top
  var topBtn = $('.page_top');
  topBtn.hide();
  //スクロールが100に達したらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
  //スクロールしてトップ
  topBtn.click(function () {
    $('body,html').animate({
         scrollTop: 0
    }, 500);
    return false;
  });

  //anchor_scroll
  $('a[href^=#]').click(function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
  });

  //スマートフォン表示時のみ電話番号にリンクを貼る設定JS
  if(!navigator.userAgent.match(/(iPhone|iPad|Android)/)){
    $("a.tel-link").each(function(){
      $(this).replaceWith("<span>" + $(this).html() + "</span>");
    });
  }

});

//ドロワーメニューPushbar.js
var pushbar = new Pushbar({
  blur:true,
  overlay:true,
});