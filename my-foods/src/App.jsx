import  Header  from "./components/Header";
import  Bio  from "./components/Bio";
import  Cards  from "./components/Cards";
import  Footer  from "./components/Footer";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header title="Meus cumê favorito"/>
      <Bio />
      <Cards />
      <Footer description="Feito com ♡ por Angélica Egito. E todos os direitos são reservados." />
    </div>
  );
}

export default App;