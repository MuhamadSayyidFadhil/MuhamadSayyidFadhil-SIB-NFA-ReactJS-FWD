export default function Contact() {
    return (
        <>
                <section id="contact" className="container py-5">
          <h2 className="pb-2 border-bottom text-center">Contact Us</h2>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <form className="p-4 shadow rounded bg-light">
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    rows="4"
                    placeholder="Write your message"
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Send
                </button>
              </form>
            </div>
          </div>
        </section>
        </>
    )
}