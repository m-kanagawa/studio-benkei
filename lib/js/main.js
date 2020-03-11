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

  var map = $('iframe');
  //あらかじめiframeにpointer-events:noneを掛け、マウスイベントを無効にしておく
  map.css('pointer-events', 'none');
  //一度クリックされたらマウスイベントを有効にする
  $('.sec_area').click(function() {
      map.css('pointer-events', 'auto');
  });
  //iframeからマウスが離れたら再度pointer-events:noneを効かせる
  map.mouseout(function() {
      map.css('pointer-events', 'none');
  });

});


$(window).scroll(function(){
  $(".sb").each(function(){
    var imgPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > imgPos - windowHeight + windowHeight / 4){
      $(this).addClass('animated');
    }
  });
});