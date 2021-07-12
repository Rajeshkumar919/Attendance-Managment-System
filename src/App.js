import Home from './pages/Home/Home';
import {Switch, Route } from 'react-router-dom';
import Login from './pages/Home/Login';
import Register from './pages/Home/Register';
import Dashboard from './TeacherDashboard/Dashboard';
import AllStudents from './TeacherDashboard/AllStudents';
import About from './components/About';
import Contact from './components/Contact';
import FacultyFaqs from './components/FacultyFaqs';
import StdFaqs from './components/StdFaqs';
import DetailsAdded from './pages/Home/DetailsAdded';



function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/teacher/dashboard" component={Dashboard} />
      <Route exact path="/teacher/allstudents" component={AllStudents} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/facultyfaqs" component={FacultyFaqs} />
      <Route exact path="/StdFaqs" component={StdFaqs} />
      <Route exact path="/AllStudents" component={AllStudents} />
      <Route exact path="/teacher/dashboard" component={Dashboard} />
      <Route exact path="/detailsadded" component={DetailsAdded} />

    </Switch>
  );
}

export default App;
