import { useState, React } from "react";
import { Zoom, Fade } from "react-awesome-reveal";
import int from "../media/Internship.png";
import aasf from "../media/aasf.jpeg";
import hr from "../media/HR.png";
import sld from "../media/SLD.jpeg";
import spark from "../media/spark.png";
import dir from "../media/DIR.png";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/esm/Card";
import Modal from "react-bootstrap/Modal";

const Experience = ({ darkMode }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  return (
    <div data-theme={darkMode ? "dark" : "light"}>
      <br></br>
      <Fade>
        <Container>
          <br></br>
          <h2 className="lead" align="center">
            <b>- Experience -</b>
          </h2>
          <br></br>
          <Zoom>
            <Row>
              <Col lg={4} sm={12}>
                <Card
                  align="center"
                  className="exp"
                  data-theme={darkMode ? "dark" : "light"}
                >
                  <br></br>
                  <center>
                    <div class="flip-card">
                      <div class="flip-card-inner">
                        <div className="flip-card-front">
                          <Card.Img variant="top" src={dir} />
                          <Card.Body>
                            <Card.Title align="center">
                              Due Invoice Reminder using Zapier Automation
                            </Card.Title>
                            <Card.Text>
                              <p align="center">
                                Automating application which sends Due Invoice
                                Reminders to the recipients emails.
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className="flip-card-back">
                          <p>
                            Allowed users to view details of their due invoices,
                            amount, due date, and recipient information.
                            <br></br>Used Passport and Google OAuth 2.0 for user
                            authentication.
                            <br></br>Integrated with Zapier to automate past-due
                            invoice reminders and follow-up sequences.
                          </p>
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
                  <div>
                    <a
                      href="https://github.com/tejasri415/Invoice-Reminder-using-Zapier-Automation"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Github Repo
                      </Button>
                    </a>
                  </div>
                  <br></br>
                </Card>
              </Col>
              <Col lg={4} sm={12}>
                <Card
                  align="center"
                  className="exp"
                  data-theme={darkMode ? "dark" : "light"}
                >
                  <br></br>
                  <center>
                    <div class="flip-card">
                      <div class="flip-card-inner">
                        <div className="flip-card-front">
                          <Card.Img variant="top" src={hr} />
                          <Card.Body>
                            <Card.Title align="center">HR Portal</Card.Title>
                            <Card.Text>
                              <p align="center">
                                In this HR Portal, the HR of a company has
                                access to all the employee details and can hire
                                candidates by scheduling interviews.
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className="flip-card-back">
                          <p>
                            Implemented CRUD operations in the application
                            <br></br> Used React Hooks, CSS Modules, Bootstrap
                            in Front-end part
                            <br></br>Created APIs to integrate frontend and
                            backend together
                            <br></br> Used NodeJS + Express for back-end API.
                          </p>
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
                  <div>
                    <Modal show={show} onHide={handleClose} className="modal">
                      <Modal.Body>
                        Heya! The project is in development mode, you can visit
                        the repository and have a look. Feel free to contribute!
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="outline-dark" onClick={handleClose}>
                          Close
                        </Button>
                        <a
                          href="https://github.com/Tejaswi-Chaudhari/Gift-of-the-Gab"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <Button variant="outline-dark">
                            View Github Repo
                          </Button>
                        </a>
                      </Modal.Footer>
                    </Modal>

                    <a href=" " target="_blank" rel="noreferrer noopener">
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Github Repo
                      </Button>
                    </a>
                  </div>
                  <br></br>
                </Card>
              </Col>
              <Col lg={4} sm={12}>
                <Card
                  align="center"
                  className="exp"
                  data-theme={darkMode ? "dark" : "light"}
                >
                  <br></br>
                  <center>
                    <div class="flip-card">
                      <div class="flip-card-inner">
                        <div className="flip-card-front">
                          <Card.Img variant="top" src={spark} />
                          <Card.Body>
                            <Card.Title align="center">
                              Spark Airways
                            </Card.Title>
                            <Card.Text>
                              <p align="center">
                                Created a console-based application that allows
                                users to book flights
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className="flip-card-back">
                          <p>
                            Utilized data structures and algorithms to manage
                            passenger details and reservation processes.
                            <br></br>Implemented a user-friendly interface in
                            the console.
                            <br></br>Tech Stack - C++ OOPs
                          </p>
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
                  <div>
                    <a
                      href="https://github.com/tejasri415/SparkAirways"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Github Repo
                      </Button>
                    </a>
                  </div>
                  <br></br>
                </Card>
              </Col>
            </Row>
          </Zoom>
          <br></br>
          <Zoom>
            <Row>
              <Col lg={4} sm={12}>
                <Card
                  align="center"
                  className="exp"
                  data-theme={darkMode ? "dark" : "light"}
                >
                  <br></br>
                  <center>
                    <div class="flip-card">
                      <div class="flip-card-inner">
                        <div className="flip-card-front">
                          <Card.Img variant="top" src={sld} />
                          <Card.Body>
                            <Card.Title align="center">
                              Sign Language Detector
                            </Card.Title>
                            <Card.Text>
                              <p align="center">
                                Used custom dataset consists of 41 classes, each
                                2400 images were captured using OpenCV.
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className="flip-card-back">
                          <p>
                            Used Convolutional Neural Networks(CNN) to train the
                            model. Achieved 99% accuracy with very negligible
                            loss
                            <br></br>Tech Stack - Python, OpenCV, TensorFlow,
                            Keras
                          </p>
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>
                  <div>
                    <a
                      href="https://github.com/tejasri415/Sign-Language-Detection-DL"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button
                        variant={darkMode ? "outline-light" : "outline-dark"}
                        className="sbtn"
                      >
                        View Github Repo
                      </Button>
                    </a>
                  </div>
                  <br></br>
                </Card>
              </Col>
              <Col lg={4} sm={12}>
                <Card
                  align="center"
                  className="exp"
                  data-theme={darkMode ? "dark" : "light"}
                >
                  <br></br>
                  <center>
                    <div class="flip-card">
                      <div class="flip-card-inner">
                        <div className="flip-card-front">
                          <Card.Img variant="top" src={int} />
                          <Card.Body>
                            <Card.Title align="center">
                              Internship at Ignitus
                            </Card.Title>
                            <Card.Text>
                              <p align="center">
                                Worked as Machine Learning Intern
                              </p>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className="flip-card-back">
                          <p>
                            Worked on various datasets and their visualizations
                            with detailed documentation.
                            <br></br>Played a key role in projects related to
                            Dimensionality Reduction, Topic Modelling, enhanced
                            performance of the Learning Management System.
                            <br></br>Demonstrated enthusiasm, dedication, and a
                            strong work ethic toward assigned tasks.
                          </p>
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>

                  <br></br>
                </Card>
              </Col>
              <Col lg={4} sm={12}>
                <Card
                  align="center"
                  className="exp"
                  data-theme={darkMode ? "dark" : "light"}
                >
                  <br></br>
                  <center>
                    <div class="flip-card">
                      <div class="flip-card-inner">
                        <div className="flip-card-front">
                          <Card.Img variant="top" src={aasf} />
                          <Card.Body>
                            <Card.Title align="center">
                              Web Development Mentor
                            </Card.Title>
                            <Card.Text>
                              <p align="center"></p>
                            </Card.Text>
                          </Card.Body>
                        </div>
                        <div className="flip-card-back">
                          <p>
                            Mentor in Web Development Department in Winter
                            Projects, AASF IIITM, GWalior. Managed and helped
                            teams in working towards web development projects.
                            <br></br>Co-organized meetings and discussions with
                            the teams.
                          </p>
                        </div>
                      </div>
                    </div>
                  </center>
                  <br></br>

                  <br></br>
                </Card>
              </Col>
            </Row>
          </Zoom>
        </Container>
      </Fade>
      <br></br>
      <hr></hr>
      <br></br>
    </div>
  );
};

export default Experience;
