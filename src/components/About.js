import Footer from './Footer';
import Header from './Header';
import "./aboutus.css";
import logo from '../images/management.jpg';
export default function (){
    return(
        <>
        <Header/>

        <div className="aboutus-section">
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="aboutus">
                        <h2 className="aboutus-title">About Us</h2>
                        <p className="aboutus-text">We are the students of Sukkur IBA University - studying in Seventh Semester at Department of Computer Science, this is the semester project of Web Engineering we have studied in Sixth Semester</p>
                        <p className="aboutus-text">This project is developed by two core members - includes name : Sammar Abbas and Rajesh Kumar (98) these both members have worked really hard making day and nights no difference. Further, now they are expecting good grades as they should be graded.</p>
                        <a className="aboutus-more" href="#">read more</a>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="aboutus-banner">
                        <img src="http://themeinnovation.com/demo2/html/build-up/img/home1/about1.jpg" alt=""/>
                    </div>
                </div>
                <div className="col-md-5 col-sm-6 col-xs-12">
                    <div className="feature">
                        <div className="feature-box">
                            <div className="clearfix">
                                <div className="iconset">
                                    <span className="glyphicon glyphicon-cog icon"></span>
                                </div>
                                <div className="feature-content">
                                <div className="logo"> <a href="/"><img alt="" className="logo-default" src={logo} /></a></div>
                                </div>
                            </div>
                        </div>
                        <div className="feature-box">
                            <div className="clearfix">
                                <div className="iconset">
                                    <span className="glyphicon glyphicon-cog icon"></span>
                                </div>
                                <div className="feature-content">
                                    <h4><b>Supervisor - The Subject Teacher</b></h4>
                                    <p><b><i>Mr. Khalid Hussain Detho</i></b> is the Lecturer of Computer Science Department. He is one of the Moon in the Facuty of this Deaprtment. This project was also assigned to us by him, this give us great oppertunity to learn such latest Front-End language like React Js. We are heartly grateful of him beacuse he taught us really well.</p>
                                </div>
                            </div>
                        </div>
                        <div className="feature-box">
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <Footer/>
        </>

    );
}