import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> leadership
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SRM Institute of Science and Technology</h4>
                <h5>B.Tech CSE</h5>
              </div>
              <h3>2024–28</h3>
            </div>
            <p>
              Chennai, India. CGPA 9.51. Coursework includes Operating Systems,
              Data Structures, Algorithms, AI, Machine Learning, Networking, and
              Databases.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sannmati Higher Secondary School</h4>
                <h5>Class XII</h5>
              </div>
              <h3>2023–24</h3>
            </div>
            <p>
              Indore, India. Percentage 91.4. Strong academic grounding in science,
              mathematics, and problem solving.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sannmati Higher Secondary School</h4>
                <h5>Class X</h5>
              </div>
              <h3>2021–22</h3>
            </div>
            <p>
              Indore, India. Percentage 89.6. Built a strong base for future
              technical study.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AARUSH SRMIST</h4>
                <h5>Community Member</h5>
              </div>
              <h3>2025–26</h3>
            </div>
            <p>
              Conducted the TechnoManagement Fest AARUSH'25 and served as a
              Quality Assurance lead while supporting event execution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
