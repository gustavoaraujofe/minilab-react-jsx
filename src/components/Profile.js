import img from '../assets/images/puppy.jpg'

function profile() {
  return (
    <div className="card" style={{width: "18rem"}}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Cute Puppy</h5>
        <p className="card-text">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
        </p>
      </div>
    </div>
  );
}

export default profile();
