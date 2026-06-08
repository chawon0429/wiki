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
    gradeWeight: 3, // 정렬용 가중치 (높을수록 높은 등급 처리)
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
    code: "Qterw-F-243",
    title: "[선택해 줘]",
    agency: "(주)백일몽",
    category: "어둠",
    grade: "그늘(F)",
    gradeWeight: 1,
    quote: "",
    body: `<p>&lt;<span class="highlight-red">어둠탐사기록</span>&gt;에 등장하는 괴담.</p>
               <p><span class="highlight-red">백일몽 주식회사</span>의 식별코드는 Qterw-F-243.</p>
               <br>
               <p>인터넷에서 유행했던 '공포체험하고 돈 받기 VS 그냥 살기' 류의 밸런스 게임 선택지에서 파생된 어둠.</p>
               <p>특정 숫자가 포함된 URL에 접속할 시 비정기적으로 발생한다.</p>
               <br>
               <p>주로 살인마에게 쫓기건 귀신에게 쫓기게 되며, 잡힐 시 처음부터 다시 시작된다.</p>`,
  },
  {
    id: 3,
    code: "Qterw-A-104",
    title: "[산제물의 합창가]",
    agency: "(주)백일몽",
    category: "어둠",
    grade: "암흑(A)",
    gradeWeight: 6,
    quote: "",
    body: `<p>&lt;<span class="highlight-red">어둠탐사기록</span>&gt;에 등장하는 괴담.</p>
               <p><span class="highlight-red">백일몽 주식회사</span>의 식별코드는 Qterw-A-104.</p>
               <br>
               <p><span class="highlight-red">암흑(A) 등급</span> 어둠.</p>
               <p>수많은 사상자를 냈던 등급 재조정 사태의 시발점.</p>
               <br>
               <p>현재 공식적인 생존자 기록 없음.</p>`,
  },
  {
    id: 4,
    code: "Qterw-D-210",
    title: "[삐에로는 널 싫어해]",
    agency: "(주)백일몽",
    category: "어둠",
    grade: "어스름(D)",
    gradeWeight: 3,
    quote: "",
    body: `<p>&lt;<span class="highlight-red">어둠탐사기록</span>&gt;에 등장하는 괴담.</p>
               <p><span class="highlight-red">백일몽 주식회사</span>의 식별코드는 Qterw-D-210.</p>
               <br>
               <p>각종 광대 초상화가 걸린 복도가 끝없이 이어지는 곳에서 영원히 떠도는 괴담.</p>
               <p>자세히 보면 진짜 광대 분장이 아니라 광대처럼 보이도록 기괴하게 뒤틀린 사람들이 억지로 웃는 얼굴이다.</p>
               `,
  },
  {
    id: 5,
    code: "Qterw-B-11",
    title: "[유쾌 테마파크!]",
    agency: "(주)백일몽",
    category: "어둠",
    grade: "어둑(B)",
    gradeWeight: 5,
    quote: "",
    body: `<p>&lt;<span class="highlight-red">어둠탐사기록</span>&gt;에 등장하는 괴담.</p>
               <p><span class="highlight-red">백일몽 주식회사</span>의 식별코드는 Qterw-B-11.</p>
               <br>
               <p>각종 판타지 랜드를 테마로 하는 보드게임 속 놀이공원.</p>
               <p>이 괴담에 진입한 이후 세 가지 대형 어트랙션을 이용하면 귀가할 수 있다.</p>
               <br>
               <p>해당 보드게임을 플레이한 사람들이 착란상태에서 작성한 '유쾌 테마파크 이용 지침서'라는 부록으로 더 유명해진 괴담.</p>
               <br>
               <p>해당 괴담을 원작으로 하는 게임을 찾는다면 이 링크로.</p>`,
  },
  {
    id: 6,
    code: "Qterw-C-402",
    title: "[내가 죽은 날]",
    agency: "(주)백일몽",
    category: "어둠",
    grade: "거미(C)",
    gradeWeight: 4,
    quote: "",
    body: `<p>&lt;<span class="highlight-red">어둠탐사기록</span>&gt;에 등장하는 괴담.</p>
               <p><span class="highlight-red">백일몽 주식회사</span>의 식별코드는 Qterw-C-402.</p>
               <br>
               <p>흥행하지 못한 스릴러·미스터리 이야기 속에 끌려 들어와 희생자가 되는 괴담.</p>
               <p>첫 목격자는 반드시 이미 희생당한 자신의 시체를 발견하게 된다.</p>
               <br>
               <p>탐사는 총 25회까지 기록되었다.</p>
               `,
  },
  {
    id: 7,
    code: "Qterw-C-51",
    title: "[山君님]",
    agency: "(주)백일몽",
    category: "어둠",
    grade: "거미(C)",
    gradeWeight: 4,
    quote: "",
    body: `<p>&lt;<span class="highlight-red">어둠탐사기록</span>&gt;에 등장하는 괴담.</p>
               <p><span class="highlight-red">백일몽 주식회사</span>의 식별코드는 Qterw-C-51.</p>
               <br>
               <p>창귀를 소재로 그린 수묵화의 음산한 어둠.</p>
               <p>탐사는 총 17회까지 기록되었다.</p>
               `,
  },
  {
    id: 8,
    code: "Qterw-B-666",
    title: "[눈먼 자들의 저택]",
    agency: "(주)백일몽",
    category: "어둠",
    grade: "어둑(B)",
    gradeWeight: 5,
    quote: "",
    body: `<p>&lt;<span class="highlight-red">어둠탐사기록</span>&gt;에 등장하는 괴담으로,</p>
               <p><span class="highlight-red">백일몽 주식회사</span>의 식별코드는 Qterw-B-666이라고 합니다.</p>
               <br>
               <p>안녕하세요, 손님. 오늘은 당신을 멋진 전시회에 초대하기 위해 이 글을 적어봅니다.</p>
               <p>찾아오시는 길이 번거롭지 않도록, 이 글을 읽으신 후에는 어디로 향하시든 저희 전시회에 도착하시게 될 겁니다.</p><br>
               <p>이전분들의 방문 기록은 해당 문서에 106회까지 기록되어 있습니다.</p>
               <p>그리고 본 괴담에 대하여 기록하려는 모든 시도에서, 전시회에서 보낸 안내문의 형태로 글이 변형 되었다고 합니다.</p>
               <p>이렇게 초대하게 되어 영광입니다.</p>
               `,
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
    filteredData.sort((a, b) => b.gradeWeight - a.gradeWeight);
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
