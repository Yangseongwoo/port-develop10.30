window.addEventListener('load', function() {
    // 이미 방문했는지 확인
    if (sessionStorage.getItem('hasVisited')) {
        const loadingScreen = document.querySelector('.loading-screen');
        loadingScreen.style.display = 'none';
        return;
    }
    
    // 첫 방문 표시
    sessionStorage.setItem('hasVisited', 'true');
    
    setTimeout(function() {
      const loadingScreen = document.querySelector('.loading-screen');
      const pupils = document.querySelectorAll('.pupil');
      
      pupils.forEach(pupil => {
        pupil.style.transition = 'all 0.5s ease-out';
        pupil.style.animation = 'none';
        pupil.style.transform = 'translate(-50%, -50%)';
      });
      
      setTimeout(() => {
        loadingScreen.style.transition = 'opacity 0.8s ease-out';
        loadingScreen.style.opacity = '0';
        
        setTimeout(function() {
          loadingScreen.style.visibility = 'hidden';
        }, 800);
      }, 500);
    }, 3000);
});