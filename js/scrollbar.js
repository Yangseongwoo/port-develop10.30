/* let scrollTimeout;
const body = document.body;

// 스크롤 이벤트 리스너
window.addEventListener('scroll', () => {
    // 스크롤바 보이기
    body.classList.remove('hide-scrollbar');
    
    // 이전 타이머 취소
    clearTimeout(scrollTimeout);
    
    // 스크롤이 멈추고 1초 후에 스크롤바 숨기기
    scrollTimeout = setTimeout(() => {
        body.classList.add('hide-scrollbar');
    }, 1000);
});

// 초기 상태에서 스크롤바 숨기기
body.classList.add('hide-scrollbar'); */

document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 15 + 'px'; // 원의 중앙이 마우스 위치에 오도록 조정
        cursor.style.top = e.clientY - 15 + 'px';
    });
});