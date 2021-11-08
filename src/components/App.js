import "bootstrap/dist/css/bootstrap.min.css";
import greeting from "./Greeting";
import profile from "./Profile";
import list from "./ToDoList";
import emotion from "./EmotionMeter";
// Não se esqueça de importar os componentes!

function App() {
  return (
    <div className="container mt-5 mb-5 col-6">
      <small>Interpolação de variáveis</small>
      {greeting}
      <small>Imagens</small>
      <hr />
      {profile}
      <small>Renderização de listas</small>
      <hr />
      {list}
      <small>Renderização condicional</small>
      <hr />
      {emotion}
    </div>
  );
}

export default App;
