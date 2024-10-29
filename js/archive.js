document.addEventListener("DOMContentLoaded", function () {
    const cursorImage = document.getElementById("cursor-image");
    const archivesContents = document.querySelectorAll(".archives-content");

    // 화면 너비가 768px 이상일 때만 이벤트 리스너 추가
    if (window.innerWidth > 768) {
        archivesContents.forEach(content => {
            content.addEventListener("mouseenter", function(event) {
                cursorImage.style.display = "block"; // 이미지 표시
                document.body.style.cursor = "none"; // 기본 커서 숨김
            });

            content.addEventListener("mousemove", function(event) {
                cursorImage.style.left = `${event.pageX}px`; // 커서의 X 좌표
                cursorImage.style.top = `${event.pageY}px`; // 커서의 Y 좌표
            });

            content.addEventListener("mouseleave", function() {
                cursorImage.style.display = "none"; // 이미지 숨김
                document.body.style.cursor = "default"; // 기본 커서로 복원
            });
        });
    }
});




/* archive */
document.addEventListener("DOMContentLoaded", function () {
    const cursorImage = document.getElementById("cursor-image");
    const archivesContents = document.querySelectorAll(".archives-content");

    // 화면 너비가 768px 이상일 때만 이벤트 리스너 추가
    if (window.innerWidth > 768) {
        archivesContents.forEach(content => {
            content.addEventListener("mouseenter", function(event) {
                cursorImage.style.display = "block";
                document.body.style.cursor = "none";
            });

            content.addEventListener("mousemove", function(event) {
                cursorImage.style.left = `${event.pageX}px`;
                cursorImage.style.top = `${event.pageY}px`;
            });

            content.addEventListener("mouseleave", function() {
                cursorImage.style.display = "none";
                document.body.style.cursor = "default";
            });
        });
    }
});

document.querySelectorAll('.archives-content').forEach((item) => {
    const projectImage = item.querySelector('.project-image');
    const imageDisplay = item.nextElementSibling;
    const cursorImage = document.getElementById('cursor-image');

    const offsetX = 40;
    const offsetY = 40;

    item.addEventListener('mousemove', (event) => {
        cursorImage.style.left = `${event.clientX}px`;
        cursorImage.style.top = `${event.clientY}px`;

        projectImage.style.left = `${event.clientX + offsetX}px`;
        projectImage.style.top = `${event.clientY + offsetY}px`;
    });

    item.addEventListener('mouseenter', () => {
        if (!imageDisplay.classList.contains('show')) {
            cursorImage.style.display = 'block';
            projectImage.style.display = 'block';
            projectImage.style.opacity = 1;
            projectImage.style.position = 'fixed';
        }
    });

    item.addEventListener('mouseleave', () => {
        cursorImage.style.display = 'none';
        projectImage.style.opacity = 0;
    });

    item.addEventListener('click', () => {
        const images = JSON.parse(item.getAttribute('data-images'));
        const description = item.getAttribute('data-description');
        
        imageDisplay.innerHTML = '';
        
        // 이미지와 설명을 감싸는 컨테이너 생성
        const contentContainer = document.createElement('div');
        contentContainer.style.display = 'flex';
        contentContainer.style.alignItems = 'center';
        contentContainer.style.gap = '2rem';
        contentContainer.style.padding = '2rem';
        
        // 이미지 컨테이너
        const imageContainer = document.createElement('div');
        imageContainer.style.flex = '1';
        images.forEach(src => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = "Project Image";
            img.style.width = '100%';
            img.style.height = 'auto';
            imageContainer.appendChild(img);
        });
        
        // 설명 컨테이너
        if (description) {
            const descriptionElement = document.createElement('div');
            descriptionElement.className = 'project-description';
            descriptionElement.style.flex = '1';
            descriptionElement.style.color = '#333';
            descriptionElement.style.fontSize = '1rem';
            descriptionElement.style.lineHeight = '1.6';
            descriptionElement.style.padding = '1rem';
            descriptionElement.textContent = description;
            
            contentContainer.appendChild(imageContainer);
            contentContainer.appendChild(descriptionElement);
        } else {
            contentContainer.appendChild(imageContainer);
        }
        
        imageDisplay.appendChild(contentContainer);

        if (imageDisplay.classList.contains('show')) {
            imageDisplay.classList.remove('show');
            imageDisplay.style.height = '0';
            cursorImage.src = 'image/cursor img.jpg';
            cursorImage.style.display = 'none';
        } else {
            imageDisplay.classList.add('show');
            imageDisplay.style.height = '400px';
            cursorImage.src = 'image/cursorclose.png';
            cursorImage.style.display = 'block';
        }
    });

    imageDisplay.addEventListener('click', () => {
        if (imageDisplay.classList.contains('show')) {
            imageDisplay.classList.remove('show');
            imageDisplay.style.height = '0';
            cursorImage.src = 'image/cursor img.jpg';
            cursorImage.style.display = 'none';
        }
    });

    imageDisplay.addEventListener('mousemove', (event) => {
        const x = event.clientX;
        const y = event.clientY;

        cursorImage.style.left = `${x}px`;
        cursorImage.style.top = `${y}px`;
        cursorImage.src = 'image/cursorclose.png';
        cursorImage.style.display = 'block';
    });

    imageDisplay.addEventListener('mouseenter', () => {
        cursorImage.src = 'image/cursor img';
        cursorImage.style.display = 'block';
        projectImage.style.display = 'none';
    });

    imageDisplay.addEventListener('mouseleave', () => {
        if (!imageDisplay.classList.contains('show')) {
            cursorImage.style.display = 'none';
        }
    });
});
























