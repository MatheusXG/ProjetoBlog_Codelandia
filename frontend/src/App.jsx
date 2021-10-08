import './assets/css/styles.css'
import Header from "./components/header";
import Section from "./components/section";

function App() {
  return (
    <div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column', backgroundColor: '#F3F5F7'}}>
        <Header/>
        <Section/>
      </div>
    </div>
  );
}

export default App;
