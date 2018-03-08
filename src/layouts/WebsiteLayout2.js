import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import {Grid, Col, Row} from 'react-bootstrap';

import basic_info from '../editables/basic_info.json';
import education from '../editables/education.json';
import experience from '../editables/experience.json';
import '../App.css';


class WebsiteLayout1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderNavigation() {
    return experience.map((entry) => {
      return (
        <li className="nav-item">
          <a className = "nav-link" href={"#" + entry.section_title}>{entry.section_title}</a>
        </li>
      )
    })
  }
  renderSubEducation(s) {
    return s.map((entry, index) => {
      return (
        <p className="wrap"><span className="h6">{entry.section_title}</span>{entry.section_content}</p>
      )
    })
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
          {this.renderSubEducation(entry.sections)}
        </div>
      )
    })
  }

  renderDetails(details) {
    return details.map((entry, index) => {
      return (
        <li className="detail">{entry}</li>
      )
    })
  }

  renderExperienceDetails(d) {
    return d.map((entry, index) => {
      return (
        <div className="sub-container subwork-container" key={index}>
          <Row>
            <Col xs={12} md={8}>
              <a href={entry.header_link}><h5 className="header">{entry.header}</h5></a>
            </Col>
            <Col xs={6} md={4}>
              <h6 className="first-right-align float-right" ex={6} md={4}>{entry.first_right_align}</h6>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={8}>
              <p className="title">{entry.title}</p>
            </Col>
            <Col xs={6} md={4}>
              <p className="second-right-align float-right" ex={6} md={4}>{entry.second_right_align}</p>
            </Col>
          </Row>
          <ul>
            {this.renderDetails(entry.details)}
          </ul>
        </div>
      );
    });
  }

  renderDropdown() {
    return experience.map((entry, index) => {
      return (
        <li><a class="dropdown-item" href="index.html" id="currentlink">about</a></li>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <Helmet>
          <title>Homepage</title>
          <meta charset="utf-8" />
          <meta id="og:author" property="og:author" content={basic_info.name} />
          <meta name="author" content={basic_info.name} />
          <meta name="description" content={basic_info.name + "- Online Portfolio"} />
        </Helmet>
        <header class="container">
            <h1 align="center">{basic_info.name}</h1>
        </header>
        <div class="mobile">
          <nav class="dropdown" align="center">
            <a type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">about &emsp; &emsp;  <span class="caret"></span></a>
            <ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenuButton">
                {this.renderDropdown()}
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default WebsiteLayout1;
