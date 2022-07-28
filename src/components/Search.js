const Search = () => {
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="body d-flex justify-content-between align-items-center">
            <div className="col-6 my-5">
              <input
                type="text"
                class="form-control w-75"
                placeholder="Search"
              ></input>
            </div>
            <div className="col-6">
              <select
                class="form-select w-25 ms-auto"
                aria-label="Default select example"
              >
                <option selected>Filter region</option>
                <option value="1">Africa</option>
                <option value="2">America</option>
                <option value="3">Asia</option>
                <option value="3">Europe</option>
                <option value="3">Oceania</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Search };
