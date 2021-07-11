import Header from "./Header";
import Footer from "./Footer";
import { Col } from "react-bootstrap";
export default function (){
    return(
        <>
        <Header />
        <div className="container mb-5">
        <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  </form>
  <form className="was-validated">
  <div className="mb-3">
    <label for="validationTextarea" className="form-label">Your Feedback Below !</label>
    <textarea className="form-control is-invalid" id="validationTextarea" placeholder="Please include your name before writing your feedback !" required></textarea>
    <div className="invalid-feedback">
      Please fill the message box!
    </div>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

        </div>
    
        <Footer />
        </>
    );
}