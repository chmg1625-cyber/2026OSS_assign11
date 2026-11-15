import CourseList from './components/CourseList.jsx';

export default function App() {
  return (
    <main className="page">
      <header className="hero">
        <div>
          <p className="topline">MY SEMESTER · COURSE PLAN</p>
          <h1>나의 전공·교양 과목 관리</h1>
          <p className="subtitle">이번 학기 수강 과목과 학습 완료 상태를 관리합니다.</p>
        </div>
        <span className="tag">2026 학습 계획</span>
      </header>
      <CourseList />
      <footer className="bottom"><span>나의 학기 과목 관리</span><span>과목 상태는 이 브라우저 화면에서 관리됩니다.</span></footer>
    </main>
  );
}
