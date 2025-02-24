import './App.css';
import MyName from './mydir/MyName';

function App() {
  return (
    <div className="App">
      메인<br/>
      컴포넌트에서 사용하는 데이터는 props와 state 두개가 있다.<br/>
      props : 부모 컴포넌트가 자식 컴포넌트에 주는 값 (일방향, 단방향)<br/>
      state : 컴포넌트 내부에서 선언하며 내부에서 값을 변경할 수 있음 <br/>
      props나 state 값이 변경되면 컴포넌트는 re-rendering 된다.
      <hr/>
      <MyName></MyName>
      <br></br>
      <MyName name="졸려요 엄청 배고파요" /* name이라는 props 전달 */></MyName>
    </div>
  );
}

export default App;
