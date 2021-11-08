let emotion = "HAPPY";

function emotions() {
  return emotion === "HAPPY" ? (
    <i className="fas fa-smile-beam fa-5x"></i>
  ) : emotion === "SAD" ? (
    <i className="fas fa-frown-open fa-5x"></i>
  ) : null;
}

export default emotions();
