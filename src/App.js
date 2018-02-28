import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import {Grid, Col, Row} from 'react-bootstrap';

import logo from './logo.svg';
import education from './editables/education.json';
import work_experience from './editables/work_experience.json';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderEducations() {
    return education.map((entry, index) => {
      return (
        <div className="sub-container subeducation-container" key={index}>
          <Row className="school-row">
            <Col xs={12} md={8}>
              <a href={entry.school_link}><h5 className="school ">{entry.school}</h5></a>
            </Col>
            <Col xs={6} md={4}>
              <p className="year float-right" ex={6} md={4}>{entry.year}</p>
            </Col>
          </Row>
          <p className="degree">{entry.degree}</p>
          <p className="gpa"><span className="h6">{entry.gpa_title}</span>{entry.gpa}</p>
          <p className="relevant_coursework"><span className="h6">Relevant Coursework: </span>{entry.relevant_coursework}</p>
        </div>
      )
    })
  }

  renderDetails(details) {
    console.log(details)
    return details.map((entry, index) => {
      return (
        <li className="detail">{entry}</li>
      )
    })
  }

  renderWorkExperiences() {
    return work_experience.map((entry, index) => {
      return (
        <div className="sub-container subwork-container" key={index}>
          <Row>
            <Col xs={12} md={8}>
              <a href={entry.link}><h5 className="company">{entry.company}</h5></a>
            </Col>
            <Col xs={6} md={4}>
              <h6 className="location float-right" ex={6} md={4}>{entry.location}</h6>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={8}>
              <p className="title">{entry.title}</p>
            </Col>
            <Col xs={6} md={4}>
              <p className="date float-right" ex={6} md={4}>{entry.date}</p>
            </Col>
          </Row>
          <ul>
            {this.renderDetails(entry.details)}
          </ul>
        </div>
      )
    })
  }

  renderLeadershipExperience() {
    return (
      <div>
      </div>
    )
  }

  render() {
    return (
      <div className="container">
        <Helmet>
          <title>Jason Bao - Online Portfolio</title>
          <meta charset="utf-8" />
          <meta id="og:author" property="og:author" content="Jason Bao" />
          <meta name="author" content="Jason Bao" />
          <meta name="description" content="Jason Bao - Online Portfolio" />
        </Helmet>
        <Grid>
          <div className="name-container">
            <h3>Jason Bao - Online Portfolio</h3>
          </div>
          <div className="education-container">
            <h3 className="page-header">Education</h3>
            {this.renderEducations()}
          </div>
          <div className="work-experience-container">
            <h3 className="page-header">Work Experience</h3>
            {this.renderWorkExperiences()}
          </div>
          <div className="leadership-experience-container">
            <h3 className="page-header">Leadership Experience</h3>
            {this.renderLeadershipExperience()}
          </div>
        </Grid>
      </div>
    );
  }
}

export default App;
