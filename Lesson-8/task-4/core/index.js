const video = document.querySelector('.block__item'),
      playBtn = document.querySelector('.controls__play'),
      playBtnImg = document.querySelector('.controls__play-btn'),  
      progress = document.querySelector('.controls__progress-bar') 


      function videoStatus() {
        if (video.paused) {
            video.play()
            playBtnImg.src = './img/pause.svg';
        } else {
            video.pause()
            playBtnImg.src = './img/play.svg';
        }
      }

      playBtn.addEventListener('click', videoStatus);
      video.addEventListener('click', videoStatus);

      function progressBar() {
        progress.value = (video.currentTime / video.duration) * 100;
      }

      video.addEventListener('timeupdate', progressBar);

      function changeProgress() {
        video.currentTime = (progress.value * video.duration) / 100;
      }

      progress.addEventListener('change', changeProgress);

      const popup = document.querySelector('.popup'),
            settingsBtn = document.querySelector('.controls__settings-btn');

      settingsBtn.addEventListener('click', e => {
        popup.classList.toggle('popup_active');
      })

      const block = document.querySelector('.block'),
            fullscreenBtn = document.querySelector('.controls__fullscreen-btn');

            fullscreenBtn.addEventListener('click', e => {
              block.classList.toggle('block_active');
              video.classList.toggle('block__item_active')
            })