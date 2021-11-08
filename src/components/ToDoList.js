const tasks = [
  "Fazer compras",
  "Renovar CNH",
  "Pagar contas",
  "Estudar React",
  "Fazer Minilab",
];

function lista() {
  return (
    <ul className="list-group">
      {tasks.map((currentElement, index) => {
        return (
          <li className="list-group-item" key={currentElement}>
            <input className="form-check-input me-1" type="checkbox" />
            {currentElement}
          </li>
        );
      })}
    </ul>
  );
}

export default lista();
