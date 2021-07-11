import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './register.css'
import { Link } from 'react-router-dom'
export default function Register(){
  return(
    <>
    <Header />
    <div className="container" >
		<div className="row">
			<div className="col-sm-8 col-md-6 offset-sm-2 offset-md-3">
				<form className="register-form">
					<h2 className="text-center text-success">Register Now</h2>
					<hr />
				  	<div className="form-group">
				    	<label>Email Address</label>
				    	<input type="email" className="form-control" placeholder="Enter email" />
				    	<span className="hint alert-success">Enter you valid email id</span>
				  	</div>
				  	<div className="form-group">
				    	<label>Password</label>
				    	<input type="password" className="form-control" placeholder="Password" />
				    	<span className="hint alert-success">Password should be 8 or up chars </span>
				  	</div>
				  	<div className="form-group">
				    	<label>Re-enter Password</label>
				    	<input type="password" className="form-control" placeholder="Password" />
				    	<span className="hint alert-success">Re-enter same password</span>
				  	</div>
				  	<div className="form-group form-check">
				    	<input type="checkbox" className="form-check-input" />
				    	<label className="form-check-label">Remember me</label>
				  	</div>
				  	<hr/>
					<button type="submit" className="btn btn-success float-right">Register</button>
					<p className="text-center mt-2 mb-0 float-left">If you have account <Link to="/login" className="text-success">Sign In</Link></p>
				</form>
			</div>
		</div>
	</div>
  <Footer />
  </>

  );
}