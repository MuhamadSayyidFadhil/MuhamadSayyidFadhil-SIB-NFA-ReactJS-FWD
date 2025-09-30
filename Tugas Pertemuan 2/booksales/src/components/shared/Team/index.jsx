export default function Team() {
    return(
        <>
                <section className="py-5 bg-light">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="fw-bold">Our Team</h2>
              <p className="text-muted">
                Meet the people behind this bookstore project.
              </p>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
              <div className="col">
                <div className="card shadow-sm h-100 text-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    className="card-img-top"
                    alt="Team Member"
                  />
                  <div className="card-body">
                    <h5 className="card-title">John Doe</h5>
                    <p className="card-text text-muted">Frontend Developer</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm h-100 text-center">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    className="card-img-top"
                    alt="Team Member"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Jane Smith</h5>
                    <p className="card-text text-muted">UI/UX Designer</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm h-100 text-center">
                  <img
                    src="https://randomuser.me/api/portraits/men/85.jpg"
                    className="card-img-top"
                    alt="Team Member"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Michael Lee</h5>
                    <p className="card-text text-muted">Backend Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}