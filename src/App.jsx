import './App.css';
import myImg from './assets/my.jpg';

const personalInfo = {
  name: 'Ahmed Tarek Gendy',
  title: 'Web Developer',
  email: 'ahmed7gendy@gmail.com',
  phone: '+201156265436',
  address: 'Modern Academy Street, Mokattam, Cairo, Egypt',
};

const skills = ['JavaScript', 'React', 'HTML', 'CSS'];

const App = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="profile-container">
          <img src={myImg} alt="Ahmed Tarek Gendy" className="my-img" />
          <div className="personal-info">
            <h1>{personalInfo.name}</h1>
            <h2>{personalInfo.title}</h2>
          </div>
        </div>
        
        <div className="skills">
          <h3>Skills</h3>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
