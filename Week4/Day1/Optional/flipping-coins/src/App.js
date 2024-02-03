import logo from './logo.svg';
import './App.css';

function App() {

  function tossCoin() {
        return Math.random() > 0.5 ? "heads" : "tails";
    }
 

      function fiveHeads() {
            return new Promise( (resolve, reject) => {
      
            let headsCount = 0;
            let attempts = 0;
            while(attempts < 100) {
                  attempts++;
                  let result = tossCoin();
                  console.log(`${result} was flipped`);
                  if(result === "heads") {
                      headsCount++;
                  } else {
                      headsCount = 0;
                  }
                  if(headsCount==5){
              resolve(`It took ${attempts} tries to flip five "heads"`)
          }

        }
        reject(`it took more than 100 attempts and there is only ${attempts}`)

            });
      }
      const res=()=>{
        fiveHeads()
            .then( res => console.log(res) )
            .catch( err => console.log(err) );
        console.log( "When does this run now?" );
      }
        


      
    
  return (
    <div className="App">
      <button onClick={(e)=>res()}>Click me !</button>
      
    </div>
  );
}

export default App;
