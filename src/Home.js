import React from "react";
import "./styles.css";
import Heading from "./heading";
import CarouselHome from "./components/CarouselHome";

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="row hero-header">
            <div className="MotionArt-sec-3">
              <div>
                <img
                  src="/images/wel.gif"
                  alt="Welcome"
                  className="MotionArt-sec-3-img"
                />
              </div>
              <h4 className="Attract-Your-Visitors-txt-30">
                <span
                  style={{
                    color: "rgb(227, 121, 1)",
                    fontFamily: "Lucida Handwriting",
                  }}
                >
                  TO <br />
                </span>
                <span className="ai-infotech-text">
                  AI INFOTECH solutions
                </span>
              </h4>
            </div>
            <Heading title="Best Education Expertise" />
            <p className="hero-tagline">For better education</p>
          </div>
          <div className="content hero-intro">
            <p>
              At Infotech Classes, we empower learners with cutting-edge
              courses designed to unlock your potential. Join us to master
              in-demand skills and shape your future with expert-led education.
            </p>
          </div>
          <div className="carousel-wrapper">
            <CarouselHome />
          </div>
        </div>
      </section>

      {/* Courses Section with Duration Wrapper */}
      <section className="courses">
        <div className="container">
          <Heading subtitle="OUR COURSES" title="Explore Our Offerings" />
          <div className="row course-list">
            <div className="course-card">
              <h3>Unix</h3>
              <p>Master essential skills in Linux, Unix, and RHEL, enabling you to manage, configure, and 
                troubleshoot systems with efficiency and confidence.</p>
              <div className="course-duration">
                <p>
                  <strong>Duration:</strong> 12 weeks
                </p>
              </div>
            </div>
            <div className="course-card">
              <h3>Oracle Databases</h3>
              <p>
              Dive into Oracle
               Databases to support business intelligence and decision-making.
              
              </p>
              <div className="course-duration">
                <p>
                  <strong>Duration:</strong> 10 weeks
                </p>
              </div>
            </div>
            <div className="course-card">
              <h3>Storage & Backup</h3>
              <p>Learn comprehensive strategies for storage solutions and backup techniques,
                 ensuring your data is secure and recoverable.</p>
              <div className="course-duration">
                <p>
                  <strong>Duration:</strong> 8 weeks
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <Heading subtitle="TESTIMONIALS" title="What Our Students Say" />
          <div className="row testimonial-list">
            <div className="testimonial-card">
              <p>"Unix course was a game-changer for my career!"</p>
              <h4>- Kamlesh Mokashi</h4>
            </div>
            <div className="testimonial-card">
              <p>"Oracle at Infotech gave me the skills I needed to succeed."</p>
              <h4>- Sudesh Naykawadi</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
