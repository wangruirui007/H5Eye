/* 
* @Author: anchen
* @Date:   2016-11-01 09:19:58
* @Last Modified by:   anchen
* @Last Modified time: 2016-12-16 09:19:56
*/
var timer;
var num = 0;
var startY = endY= count = quit = liate = zong = 0;
 $('.contain1').on('touchstart', function(event) {
   var touchstar = event.targetTouches[0];
   startY = touchstar.pageY;
 });
   $('.contain1').on('touchmove', function(e) {
      var touch = e.touches[0];
      endY = touch.pageY;
      count = endY - startY;
      quit = startY - endY;
      zong  = zong + count;
      liate = liate + quit;
      if (count > 0) {
        if (quit < 0) {
         $('.cdd').css({
          transform:'translateZ('+ -zong + 'px)'
         })
        }else {
          $('.cdd').css({
          transform:'translateZ('+ liate + 'px)'
         })
        }
        
      }else if(count < 0){
        if (quit > 0) {
          console.log(liate);
         $('.cdd').css({
           transform:'translateZ('+ liate + 'px)'
          });
         }else {
           $('.cdd').css({
          transform:'translateZ('+ zong + 'px)'
         })
         }
      }
      if (-zong <= -4) {
          $('.cdd').css({
          transform:'translateZ(-4px)'
         })
      };
      if (liate >= 2200) {
         $('.cdd').css({
          transform:'translateZ(2200px)'
         })
      };
 })
// 禁止微信上下显示黑框
document.querySelector('body').addEventListener('touchstart', function (ev) {
        event.preventDefault();
})

