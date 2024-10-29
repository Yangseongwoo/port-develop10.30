/* const mockup = document.querySelector('.mockup');

mockup.addEventListener('mousemove', (e) => {
    const { offsetWidth, offsetHeight } = mockup;
    const x = e.clientX - mockup.getBoundingClientRect().left;
    const y = e.clientY - mockup.getBoundingClientRect().top;

    const xPercent = (x / offsetWidth) * 20 - 10; // -10에서 10 사이
    const yPercent = (y / offsetHeight) * 20 - 10; // -10에서 10 사이

    mockup.style.transform = `translate(${xPercent}px, ${yPercent}px)`;
});

mockup.addEventListener('mouseleave', () => {
    mockup.style.transform = 'translate(0, 0)'; // 마우스가 나가면 원래 위치로 복원
}); */