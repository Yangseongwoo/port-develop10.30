function createStars() {
    const eyewrap = document.querySelector('.eyewrap');
    const starsContainer = document.getElementById('stars');
    const stars = [];
    const numStars = 100;

    // 별들 초기화
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        // eyewrap의 크기를 기준으로 위치 설정
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        starsContainer.appendChild(star);
        stars.push({
            element: star,
            x: parseFloat(star.style.left),
            y: parseFloat(star.style.top),
            originalX: parseFloat(star.style.left),
            originalY: parseFloat(star.style.top)
        });
    }

    // 마우스 이벤트 리스너를 eyewrap에 직접 추가
    eyewrap.addEventListener('mousemove', (e) => {
        const rect = eyewrap.getBoundingClientRect();
        const mouseX = ((e.clientX - rect.left) / rect.width) * 100;
        const mouseY = ((e.clientY - rect.top) / rect.height) * 100;
        
        // mouseX와 mouseY가 0-100 범위 내에 있을 때만 별들이 반응하도록 함
        if (mouseX >= 0 && mouseX <= 100 && mouseY >= 0 && mouseY <= 100) {
            stars.forEach(star => {
                const dx = mouseX - star.originalX;
                const dy = mouseY - star.originalY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDistance = 30;
                
                if (distance < maxDistance) {
                    const force = (maxDistance - distance) / maxDistance;
                    star.x = star.originalX + (dx * force * 0.5);
                    star.y = star.originalY + (dy * force * 0.5);
                } else {
                    star.x += (star.originalX - star.x) * 0.1;
                    star.y += (star.originalY - star.y) * 0.1;
                }
                
                star.element.style.left = `${star.x}%`;
                star.element.style.top = `${star.y}%`;
            });
        }
    });

    eyewrap.addEventListener('mouseleave', () => {
        stars.forEach(star => {
            star.x = star.originalX;
            star.y = star.originalY;
            star.element.style.left = `${star.x}%`;
            star.element.style.top = `${star.y}%`;
        });
    });
}

window.addEventListener('load', createStars);