import './Project.css';
import projectImage from '../assets/img/page1.png'; // Ganti dengan gambar yang sesuai
import projectImage2 from '../assets/img/page2.png'; // Ganti dengan gambar yang sesuai
import projectImage3 from '../assets/img/page3.png'; // Ganti dengan gambar yang sesuai
import ellipse from '../assets/img/allipse2.png';


export const Project = () => {
  return (
    <div className="project-section">
        <h1 className='project-text'>Project Kami</h1>
        <div className="project-section-page">
            <div className="project-card">
                <img src={projectImage} alt="Project Preview" className="project-image" />
                <p className="project-title">Landing Page Jokiit.com</p>
            </div>
            <div className="project-card">
                <img src={projectImage} alt="Project Preview" className="project-image" />
                <p className="project-title">Landing Page Jokiit.com</p>
            </div>
            <div className="project-card">
                <img src={projectImage} alt="Project Preview" className="project-image" />
                <p className="project-title">Landing Page Jokiit.com</p>
            </div>
        </div>
        <div className="project-section-page">
            <div className="project-card">
                <img src={projectImage2} alt="Project Preview" className="project-image" />
                <p className="project-title">Landing Page Jokiit.com</p>
            </div>
            <div className="project-card">
                <img src={projectImage2} alt="Project Preview" className="project-image" />
                <p className="project-title">Landing Page Jokiit.com</p>
            </div>
            <div className="project-card">
                <img src={projectImage2} alt="Project Preview" className="project-image" />
                <p className="project-title">Landing Page Jokiit.com</p>
            </div>
        </div>
        <div className="project-section-page">
            <div className="project-card">
                <img src={projectImage3} alt="Project Preview" className="project-image" />
                <p className="project-title">Landing Page Jokiit.com</p>
            </div>
            <div className="project-card">
                <img src={projectImage3} alt="Project Preview" className="project-image" />
                <p className="project-title">Landing Page Jokiit.com</p>
            </div>
            <div className="project-card">
                <img src={projectImage3} alt="Project Preview" className="project-image" />
                <p className="project-title">Landing Page Jokiit.com</p>
            </div>
        </div>
        
       <img src={ellipse} className='project-ellipse' alt="" />
    </div>
  );
};
