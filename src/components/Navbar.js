const Navbar = () => {
  return (
    <>
      <header className="shadow-sm bg-body rounded">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between py-2 ">
            <a href="javascript:void(0)" className="logo text-decoration-none fs-3 text-dark">
              Where in the World
            </a>
            <nav className="navbar">
              <div className="d-flex align-items-center justify-content-center pt-3">
                <i class="fa-solid fa-moon m-0"></i>
                <span className="mb-1 mx-3 fs-4">Dark Mode</span>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  )
}

export {
  Navbar
}