import logo from './logo.svg';
import './App.css';
import styles from './Display.Styling.module.css'
import Header from './Components/Header';
import Main from './Components/Main';
import Navigation from './Components/Navigation';
import Subcontents from './Components/Subcontents';
import Advertisement from './Components/Advertisement';


function App() {
  return (
    <div className={styles.app}>
      <Header/>
      <div className={styles.contentBody}>
        <Navigation />
        <Main>
            
            <div className={styles.bloc}>
            <Subcontents  />
            <Subcontents  />
            <Subcontents  />
            </div>
            <Advertisement />
        </Main>
      </div>
    </div>
  );
}

export default App;
