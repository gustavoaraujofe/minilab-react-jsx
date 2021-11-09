import "bootstrap/dist/css/bootstrap.min.css";
import Greeting from "./Greeting";
import Profile from "./Profile";
import List from "./ToDoList";
import Emotion from "./EmotionMeter";
// Não se esqueça de importar os componentes!

function App() {
  return (
    <div className="container mt-5 mb-5 col-6">
      <small>Interpolação de variáveis</small>
      <Greeting />
      <small>Imagens</small>
      <hr />
      <Profile />
      <small>Renderização de listas</small>
      <hr />
      <List />
      <small>Renderização condicional</small>
      <hr />
      <Emotion />
    </div>
  );
}

export default App;
