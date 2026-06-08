// document.addEventListener('DOMContentLoaded', () => {
//     // 검색 버튼 클릭 이벤트 예시
//     const searchBtn = document.querySelector('.search-btn');
//     searchBtn.addEventListener('click', () => {
//         alert('어둠탐사기록은 현재 폐쇄 모드입니다.');
//     });

//     // 유틸리티 탭(읽기, 편집, 도구) 클릭 시 인터랙션 효과
//     const links = document.querySelectorAll('.utility-links span');
//     links.forEach(link => {
//         link.style.cursor = 'pointer';
//         link.addEventListener('click', (e) => {
//             alert(`"${e.target.innerText}" 기능에 접근 권한이 없습니다.`);
//         });
//     });
// });

// [데이터베이스] 가상의 위키 데이터셋 설정
let wikiData = [
  {
    id: 1,
    code: "Qterw-D-16",
    title: "[심연교통공사에 어서오세요]",
    agency: "(주)백일몽",
    category: "어둠",
    grade: "어스름(D)",
    gradeWeight: 1, // 정렬용 가중치 (낮을수록 높은 등급 처리)
    quote:
      "“ 잠들었다 깨어 보니 지하철 안.\n마치 퇴근길 같지만, 어딘가,\n이상한 역명들이 들려오기 시작한다-. ”",
    body: `<p>&lt;<span class="highlight-red">어둠탐사기록</span>&gt;에 등장하는 괴담.</p>
               <p><span class="highlight-red">백일몽 주식회사</span>의 식별코드는 Qterw-D-16.</p>
               <br>
               <p>초창기에 작성된 <span class="highlight-red">어스름(D) 등급</span> 어둠 중 홀로 압도적인 탈출난이도를 자랑하는 미친 괴담.</p>
               <p class="strikethrough">그러고 영원히 고통받는 <span class="highlight-red">현장탐사팀</span></p>
               <br>
               <p>탐사는 총 56회까지 기록되었다.</p>`,
  },
  {
    id: 2,
    code: "Abyss-C-04",
    title: "[종점행 귀신 신호]",
    agency: "불명",
    category: "어둠",
    grade: "짙은어둠(C)",
    gradeWeight: 2,
    quote: "“ 이 선로의 끝에는 역이 존재하지 않는다. ”",
    body: "<p>자정 이후 끊어진 선로 위에서 감지되는 정체불명의 주파수 괴담.</p>",
  },
  {
    id: 3,
    code: "Void-B-09",
    title: "[거꾸로 걷는 안내원]",
    agency: "(주)백일몽",
    category: "인간형",
    grade: "심연(B)",
    gradeWeight: 3,
    quote: "“ 절대 그녀의 앞모습을 정면으로 쳐다보지 마십시오. ”",
    body: "<p>심연교통공사 구역 내의 유일한 에스코트 유형의 위험 개체.</p>",
  },
];

// 글로벌 상태값 정의
let currentArticleId = null;
let currentSortType = "code"; // code 또는 grade

// DOM 요소 탐색
const homePage = document.getElementById("homePage");
const detailPage = document.getElementById("detailPage");
const wikiList = document.getElementById("wikiList");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const backToHome = document.getElementById("backToHome");

const sortByCodeBtn = document.getElementById("sortByCode");
const sortByGradeBtn = document.getElementById("sortByGrade");

// 상세페이지 DOM 요소
const detailTitle = document.getElementById("detailTitle");
const detailCode = document.getElementById("detailCode");
const detailAgency = document.getElementById("detailAgency");
const detailCategory = document.getElementById("detailCategory");
const detailGrade = document.getElementById("detailGrade");
const detailQuote = document.getElementById("detailQuote");
const detailBody = document.getElementById("detailBody");

// 편집 영역 DOM 요소
const btnRead = document.getElementById("btnRead");
const btnEdit = document.getElementById("btnEdit");
const btnTool = document.getElementById("btnTool");
const btnDelete = document.getElementById("btnDelete");
const viewModeArea = document.getElementById("viewModeArea");
const editModeArea = document.getElementById("editModeArea");
const editQuoteInput = document.getElementById("editQuoteInput");
const editBodyInput = document.getElementById("editBodyInput");
const btnSave = document.getElementById("btnSave");
const btnCancel = document.getElementById("btnCancel");

// --- [기능 1] 리스트 렌더링 및 정렬/검색 시스템 ---
function renderList() {
  wikiList.innerHTML = "";
  const keyword = searchInput.value.trim().toLowerCase();

  // 1. 제목 기준 필터링 처리
  let filteredData = wikiData.filter((item) =>
    item.title.toLowerCase().includes(keyword),
  );

  // 2. 정렬 조건 분기 처리
  if (currentSortType === "code") {
    filteredData.sort((a, b) => a.code.localeCompare(b.code));
  } else if (currentSortType === "grade") {
    filteredData.sort((a, b) => a.gradeWeight - b.gradeWeight);
  }

  // 3. 동적 HTML 엘리먼트 빌드
  filteredData.forEach((item) => {
    const li = document.createElement("li");
    li.className = "wiki-item";
    li.innerHTML = `
            <div class="item-title">${item.title}</div>
            <div class="item-meta">
                <div>${item.code}</div>
                <div class="highlight-red">${item.grade}</div>
            </div>
        `;
    li.addEventListener("click", () => openDetail(item.id));
    wikiList.appendChild(li);
  });
}

// --- [기능 2] 상세 페이지 네비게이션 및 바인딩 ---
function openDetail(id) {
  const article = wikiData.find((item) => item.id === id);
  if (!article) return;

  currentArticleId = id;

  // 데이터 바인딩
  detailTitle.innerText = article.title;
  detailCode.innerText = article.code;
  detailAgency.innerText = article.agency;
  detailCategory.innerText = article.category;
  detailGrade.innerText = article.grade;
  detailQuote.innerText = article.quote;
  detailBody.innerHTML = article.body;

  // 화면 토글
  homePage.classList.add("hidden");
  detailPage.classList.remove("hidden");
  window.scrollTo(0, 0);

  // 탭 리셋
  resetTabs();
}

function showHomePage() {
  detailPage.classList.add("hidden");
  homePage.classList.remove("hidden");
  currentArticleId = null;
  renderList();
}

function resetTabs() {
  btnRead.classList.add("active");
  btnEdit.classList.remove("active");
  viewModeArea.classList.remove("hidden");
  editModeArea.classList.add("hidden");
}

// --- [기능 3] 편집 모드 활성화 & 권한 제한 제어 ---
function toggleEditMode(isEdit) {
  if (isEdit) {
    const article = wikiData.find((item) => item.id === currentArticleId);
    btnEdit.classList.add("active");
    btnRead.classList.remove("active");
    viewModeArea.classList.add("hidden");
    editModeArea.classList.remove("hidden");

    // 기존 텍스트 원본 textarea에 바인딩
    editQuoteInput.value = article.quote;
    editBodyInput.value = article.body;
  } else {
    resetTabs();
  }
}

// --- 이벤트 리스너 등록 ---

// 실시간 제목 검색 인터랙션 (인풋 입력할 때마다 실시간 필터링)
searchInput.addEventListener("input", renderList);
searchBtn.addEventListener("click", renderList);

// 배너 클릭 시 홈 화면 컴백 연동
backToHome.addEventListener("click", showHomePage);

// 정렬 버튼 토글 제어
sortByCodeBtn.addEventListener("click", () => {
  sortByCodeBtn.classList.add("active");
  sortByGradeBtn.classList.remove("active");
  currentSortType = "code";
  renderList();
});

sortByGradeBtn.addEventListener("click", () => {
  sortByGradeBtn.classList.add("active");
  sortByCodeBtn.classList.remove("active");
  currentSortType = "grade";
  renderList();
});

// 상단 유틸리티 탭 제어
btnRead.addEventListener("click", () => toggleEditMode(false));
btnEdit.addEventListener("click", () => toggleEditMode(true));

// 도구 및 삭제 버튼 차단 권한 얼럿
btnTool.addEventListener("click", () =>
  alert(
    "경고: 해당 도구 기능에 대한 접근 권한이 없습니다. 외부 탐사 대원은 제한됩니다.",
  ),
);
btnDelete.addEventListener("click", () =>
  alert("경고: 시스템 삭제 권한이 거부되었습니다. 관리자 세션이 필요합니다."),
);

// 수정 데이터 저장 로직
btnSave.addEventListener("click", () => {
  const article = wikiData.find((item) => item.id === currentArticleId);
  if (article) {
    article.quote = editQuoteInput.value;
    article.body = editBodyInput.value; // 변경된 텍스트 적용

    // 상세화면 다시 새로고침 바인딩
    openDetail(currentArticleId);
  }
});

btnCancel.addEventListener("click", () => toggleEditMode(false));

// 웹페이지 초기 구동 시 리스트 로드
document.addEventListener("DOMContentLoaded", renderList);
