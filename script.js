function openPopup(imageSrc) {
    const popup = document.getElementById('flyer-popup');
    const popupImage = document.getElementById('popup-image');
    popup.style.display = 'block';
    popupImage.src = imageSrc;
    document.body.style.overflow = 'hidden';
}

function closePopup() {
    const popup = document.getElementById('flyer-popup');
    popup.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// DOMContentLoaded 이벤트에서 모든 초기화 처리
document.addEventListener('DOMContentLoaded', function() {
    // 햄버거 메뉴 초기화
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // 팝업 관련 이벤트 리스너들
    const popup = document.getElementById('flyer-popup');
    if (popup) { // 팝업 요소가 있을 때만 이벤트 리스너 추가
        // ESC 키로 팝업 닫기
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closePopup();
            }
        });

        // 팝업 바깥 영역 클릭시 닫기
        popup.addEventListener('click', function(event) {
            if (event.target === this) {
                closePopup();
            }
        });
    }
}); 