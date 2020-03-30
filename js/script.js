let thumb = slider.querySelector('.thumb');
let imgs = document.querySelector('.imgs')
    thumb.onmousedown = function(event) {
       // предотвратить запуск выделения (действие браузера)
      let shiftX = event.clientX - thumb.getBoundingClientRect().left;
      let left = 0;
      let center = 450;
      let right = 900;
      // shiftY здесь не нужен, слайдер двигается только по горизонтали

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);

      function onMouseMove(event) {
        let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;
        thumb.style.zIndex = 1000;
        
        // курсор вышел из слайдера => оставить бегунок в его границах.
        if (newLeft < 0) {
          
          newLeft = 0;

        }
        let rightEdge = slider.offsetWidth - thumb.offsetWidth;
        if (newLeft > rightEdge) {
          newLeft = rightEdge;
        }
imgs.style.display = "block";
        thumb.style.left = newLeft + 'px';
      }

      function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
      }

    };

    thumb.ondragstart = function() {
      return false;
    };
