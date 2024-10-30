function createStars() {
    const starsContainer = document.getElementById('stars');
    const stars = [];
    const numStars = 100; // 별의 개수

    // 별들 초기화
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
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

    // 마우스 움직임에 반응
    document.querySelector('.eyewrap').addEventListener('mousemove', (e) => {
        const rect = starsContainer.getBoundingClientRect();
        const mouseX = ((e.clientX - rect.left) / rect.width) * 100;
        const mouseY = ((e.clientY - rect.top) / rect.height) * 100;

        stars.forEach(star => {
            const dx = mouseX - star.originalX;
            const dy = mouseY - star.originalY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxDistance = 30; // 영향을 미치는 최대 거리
            
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
    });

    // 마우스가 영역을 벗어났을 때 별들이 원래 위치로 돌아가기
    document.querySelector('.eyewrap').addEventListener('mouseleave', () => {
        stars.forEach(star => {
            star.x = star.originalX;
            star.y = star.originalY;
            star.element.style.left = `${star.x}%`;
            star.element.style.top = `${star.y}%`;
        });
    });
}

// 페이지 로드 시 별 생성
window.addEventListener('load', createStars);