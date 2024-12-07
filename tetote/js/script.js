$(function () {


/* ---------------------------
    スワイパー 
------------------------------*/

 const swiper = new Swiper(".swiper", {
  loop: true, // ループ
  speed: 1500, // 少しゆっくり(デフォルトは300)
  slidesPerView: 1.5, // 一度に表示する枚数
  spaceBetween: 30, // スライド間の距離
  centeredSlides: true, // アクティブなスライドを中央にする
  autoplay: { // 自動再生
   delay: 1000, // 1秒後に次のスライド
   disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
  },
  on: {
    init: function () {
        // スライドにクラスを付与
        this.slides.forEach((slide, index) => {
            if ((index + 1) % 2 === 0) {
                slide.classList.add('even'); // 偶数
            } else {
                slide.classList.add('odd'); // 奇数
            }
        });
    },
}
 });



 /* --------------------
 ハンバーガーメニュー
 ------------------------- */
const $trigger = $('#hamburger');
const $nav = $('#navmenu');

$trigger.on('click',function () {
 const expanded = $(this).attr('aria-expanded') === 'true';// 'true'と文字列として比較
 if (!expanded){// expanded が false の場合、メニューを開く
  openMenu();
 } else{
  closeMenu();
 }
});

function openMenu(){
 $trigger.attr('aria-expanded',true).attr('aria-label','メニューを閉じる');
 $nav.attr('aria-hidden',false).fadeIn();
}
function closeMenu(){
 $trigger.attr('aria-expanded',false).attr('aria-label','メニューを開ける');
 $nav.attr('aria-hidden',true).fadeOut();
}





});


