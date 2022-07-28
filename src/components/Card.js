import "../App.css";

const Card = (props) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3 ">
            <div className="card">
              <img
                src={props.img}
                className="card-img-top"
                alt="germany flag" 
                width={300}
                height={200}
              />
              <div className="card-body">
                <h3 class="card-title mb-3">Germany</h3>
                <p class="card-text">
                  {" "}
                  <span className="fw-bold">Population:</span> 81,770,900
                </p>
                <p class="card-text my-1">
                  <span className="fw-bold">Region:</span> Europe
                </p>
                <p class="card-text">
                  <span className="fw-bold">Capital:</span> Berlin
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Card };
