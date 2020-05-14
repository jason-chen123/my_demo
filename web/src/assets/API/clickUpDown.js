export default{
       clickUpDown: function clickUpDown(height,id,s) {
       this.clear = false;
        let slide = {
          down: function(div) {
            div.style.height = height;
          },
          up: function(div) {
            div.style.height = "0";
          }
        };
        var _this = this;
        function toggleSlide(id, s) {
          var div = document.getElementById(id),
          // 此时自身高度 不包括边框
            div_height = div.offsetHeight;
          div.style.transition = "height " + s + "ms";
          
          if (div_height) {
              
            slide.up(div);
            div.style.overflow = "hidden";
          //   div.classList.remove("zhezhao");
            _this.clear = true;
          } else {
            slide.down(div);
          }
        }
        toggleSlide(id, s);
        // console.log(this.clear)
      }
}