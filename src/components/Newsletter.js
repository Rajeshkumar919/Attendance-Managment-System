export default function Newsletter () {
    return(

        <div className="newsletter-wrap">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <div className="title">
          <h1>Newsletter</h1>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className="col-lg-6">
        <div className="news-info">
          <form>
            <div className="input-group">
              <input type="text" className="form-control" name="search" placeholder="Email Address" />
              <div className="form_icon"><i className="fas fa-envelope"></i></div>
            </div>
            <button className="sigup"><i className="fas fa-paper-plane"></i></button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
    )
}