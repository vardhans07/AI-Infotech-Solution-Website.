import React from "react";
import "./styles.css";
import Heading from "./heading";

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <Heading title="Empowering Education Excellence" />
            <p className="hero-tagline">
              At Infotech Classes, we’re committed to transforming lives through education. Discover who we are and what drives us.
            </p>
          </div>
        </div>
      </section>

      <section className="mission">
        <div className="container">
          <Heading subtitle="OUR MISSION" title="Why We Exist" />
          <div className="mission-content">
            <p>
              Our mission is to provide accessible, high-quality education that equips students with the skills they need to thrive in a dynamic world. We blend innovative teaching methods with expert-led instruction to inspire lifelong learning.
            </p>
          </div>
        </div>
      </section>

      <section className="team">
        <div className="container">
          <Heading subtitle="OUR STRENGTHS" title="What Sets Us Apart" />
          <div className="team-list">
            <div className="team-card">
              <span className="team-icon">👩‍🏫</span>
              <h3>Expert Instructors</h3>
              <p>Learn from industry professionals with years of experience.</p>
            </div>
            <div className="team-card">
              <span className="team-icon">⏳</span>
              <h3>Flexible Learning</h3>
              <p>Study at your own pace with in-person options.</p>
            </div>
            <div className="team-card">
              <span className="team-icon">🏆</span>
              <h3>Proven Results</h3>
              <p>Thousands of students have succeeded with our courses.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
