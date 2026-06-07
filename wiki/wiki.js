document.addEventListener('DOMContentLoaded', () => {
    // 검색 버튼 클릭 이벤트 예시
    const searchBtn = document.querySelector('.search-btn');
    searchBtn.addEventListener('click', () => {
        alert('어둠탐사기록은 현재 폐쇄 모드입니다.');
    });

    // 유틸리티 탭(읽기, 편집, 도구) 클릭 시 인터랙션 효과
    const links = document.querySelectorAll('.utility-links span');
    links.forEach(link => {
        link.style.cursor = 'pointer';
        link.addEventListener('click', (e) => {
            alert(`"${e.target.innerText}" 기능에 접근 권한이 없습니다.`);
        });
    });
});