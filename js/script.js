import {shots} from './_shots.js';

document.addEventListener("DOMContentLoaded", function () {




  shots();



  let laserSaber = document.querySelector('.laser-saber-movable-reflect');
  let boom = document.querySelector('#boom');
  let laserOpen = false;

  laserSaber.addEventListener('click', function (e) {
    this.classList.toggle('--active');
    if (this.classList.contains('--active')) {
      // TODO
      // надо предзагрузку на аудиофайлы
      new Audio('./audio/1.mp3').play();
      setTimeout(function () { boom.play(); }, 900);
      laserOpen = true;
    } else {
      // TODO
      // надо предзагрузку на аудиофайлы
      new Audio('./audio/0.mp3').play();
      setTimeout(function () { 
        boom.pause(); 
        boom.currentTime = 0;
      }, 1000);      
      laserOpen = false;
    }
  });



  window.addEventListener('mousemove', function (e) {

    laserSaber.style.left = e.x + 'px';
    laserSaber.style.top = e.y + 'px';
    let movingLeft = false;
    let movingRight = false;

    if (getMouseDirection(e)[0] === 'left') {
      laserSaber.classList.add('--left');
      laserSaber.classList.remove('--right');
      laserSaber.classList.remove('--rightX2');
      movingLeft = true;
      movingRight = false;
    } else {
      laserSaber.classList.add('--right');
      laserSaber.classList.remove('--left');
      laserSaber.classList.remove('--leftX2');
      movingRight = true;
      movingLeft = false;
    }

    let positiveMovementX = Math.abs(e.movementX);
    if (positiveMovementX < 9) {
      laserSaber.classList.remove('--right');
      // laserSaber.classList.remove('--rightX2');
      laserSaber.classList.remove('--left');
      // laserSaber.classList.remove('--leftX2');
    } 

    if ((positiveMovementX > 100) && laserOpen) {
      if (movingLeft) {
        new Audio('./audio/left.mp3').play();
        laserSaber.classList.add('--leftX2');
      }
      if (movingRight) {
        new Audio('./audio/right.mp3').play();
        laserSaber.classList.add('--rightX2');
      }
    }

  });



  var xDirection = "";
  var yDirection = "";
  var oldX = 0;
  var oldY = 0;

  function getMouseDirection(e) {
    //deal with the horizontal case
    if (oldX < e.pageX) {
      xDirection = "right";
    } else {
      xDirection = "left";
    }

    //deal with the vertical case
    if (oldY < e.pageY) {
      yDirection = "bottom";
    } else {
      yDirection = "top";
    }

    oldX = e.pageX;
    oldY = e.pageY;

    return [xDirection, yDirection, ,];
  }



  // let laserColor__itemAll = document.querySelectorAll('.laser-color__item');
  // for (let item of laserColor__itemAll) {
  //   item.addEventListener('click', function(e){

  //   });
  // }



});

