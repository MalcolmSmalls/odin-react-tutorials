import PropsTest from "./Components/PropsTest"


function App() {
  PropsTest.defaultProps = {
    names: ['RZA', 'GZA', 'ODB', 'INSPECTAH DECK', 'RAEKWON ThA CHEF', 'METHOD MAN', 'GHOSTFACE KILLA', 'U-GOD', 'MASTA KILLA' ]
  }

  return (

    <div className="App">
          <PropsTest/>
    </div>
  );
}

export default App;
