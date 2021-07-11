import Header from "./Header";
import Footer from "./Footer"

export default function () {
    return(

      <>
      <Header />
        <div className="card">
  <div className="card-header text-center bg-success text-white fw-bold">
    Welcome to SIBAU Attendence Management System
  </div>
  <div className="card-body">
    <h5 className="card-title">Frequently Asked Questions - Students</h5>
    <p className="card-text fw-bold">
      <ul>
        <li>
        How do I get an online course approved?
        </li>
        <li>
        What skills does it take to be a successful online instructor?
        </li>
        <li>
        What are the responsibilities of an online instructor?
      </li>
      <li>
      What tools are available for teaching online?
      </li>
      <li>
      How can I use online technology with my face-to-face class?
      </li>
      <li>
      Do I have to offer a face-to-face orientation?
      </li>
      <li>
      What support is available for me and my students?
      </li>
      </ul>
    </p>
    
    <a href="#" className="btn btn-primary">Go somewhere</a>


  </div>
</div>
<Footer />
</>
    );
}