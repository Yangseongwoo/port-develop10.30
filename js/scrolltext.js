const images = document.querySelectorAll('.hover-image');

function showImage(event) {
    const x = event.clientX;
    const y = event.clientY;

    images.forEach((img, index) => {
        img.style.left = `${x - 30}px`; // 커서 위치에 맞추어 이미지 위치 설정
        img.style.top = `${y - 30}px`; // 커서 위치에 맞추어 이미지 위치 설정

        // 이미지 전환 간격을 늘리기 위해 300으로 변경 (기존 100)
        if (index === Math.floor(x / 200) % images.length) {
            img.style.display = 'block';
            img.style.opacity = '1'; // 이미지가 보이도록 투명도 조정
        } else {
            img.style.opacity = '0'; // 다른 이미지는 숨김
        }
    });
}

function hideImage() {
    images.forEach((img) => {
        img.style.opacity = '0'; // 마우스가 떠나면 모든 이미지 투명하게
        setTimeout(() => {
            img.style.display = 'none'; // 잠시 후에 숨김
        }, 500); // 애니메이션 시간과 동일하게 설정
    });
}

// 스크롤 이벤트에 쓰로틀링 적용
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// 스크롤 이벤트에 적용
window.addEventListener('scroll', throttle(function() {
    // 스크롤 관련 코드
}, 50));

