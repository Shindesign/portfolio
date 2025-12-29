$(function () {
  //アコーディオン開閉＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿
  $('.toggle-title').click(function () {
    $(this).toggleClass('selected');
    $(this).next().slideToggle();
  });

  //ページ内スクロール＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿
  $('a[href^="#"]').click(function(){
    let speed = 500;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });

  //フローティングボタン表示・非表示
  $('.show-area').on('inview', function(event, isInView) {
    if (isInView) {
      $('.float-bnr').addClass('show');
    } else {
      $('.float-bnr').removeClass('show');
    }
  });
});


//hoverボタン切り替え＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿
function smartRollover() {
  if (document.getElementsByTagName) {
    var images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
      try {
        if (images[i].getAttribute("src").match("-off.")) {
          images[i].onmouseover = function () {
            this.setAttribute("src", this.getAttribute("src").replace("-off.", "-on."));
          }
          images[i].onmouseout = function () {
            this.setAttribute("src", this.getAttribute("src").replace("-on.", "-off."));
          }
        }
      } catch (e) {
      }
    }
  }
}
if (window.addEventListener) {
  window.addEventListener("load", smartRollover, false);
} else if (window.attachEvent) {
  window.attachEvent("onload", smartRollover);
}
