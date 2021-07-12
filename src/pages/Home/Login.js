import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Link } from 'react-router-dom';
import './login.css'
export default function Login () {
  return (
    <>
    <Header />
    <div className="login-page bg-light shadow" style={{marginTop: "-100px"}}>
    <div className="container">
        <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <h3 className="mb-3">Login Now</h3>
                <div className="bg-white shadow rounded">
                    <div className="row">
                        <div className="col-md-7 pe-0">
                            <div className="form-left h-100 py-5 px-5">
                                <form action="" className="row g-4">
                                        <div className="col-12">
                                            <label>Username<span className="text-danger">*</span></label>
                                            <div className="input-group">
                                                <div className="input-group-text"><i className="bi bi-person-fill"></i></div>
                                                <input type="text" className="form-control" placeholder="Enter Username" />
                                            </div>
                                        </div>

                                        <div className="col-12">
                                            <label>Password<span className="text-danger">*</span></label>
                                            <div className="input-group">
                                                <div className="input-group-text"><i className="bi bi-lock-fill"></i></div>
                                                <input type="text" className="form-control" placeholder="Enter Password" />
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="inlineFormCheck" />
                                                <label className="form-check-label" for="inlineFormCheck">Remember me</label>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <a href="#" className="float-end text-primary">Forgot Password?</a>
                                        </div>

                                        <div className="col-12">
                                            <Link to="/teacher/dashboard"><button type="submit" className="btn btn-primary px-4 float-end mt-4">login</button></Link>
                                        </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-5 ps-0 d-none d-md-block">
                            <div className="form-right h-100 bg-primary text-white text-center pt-5">
                            <i class="bi bi-shield-lock-fill"></i>
                                <h2 className="fs-1"> Login</h2>
                            </div>
                        </div>
                    </div>
                </div>
              
            </div>
        </div>
    </div>
</div>
<Footer />
</>
  );
}