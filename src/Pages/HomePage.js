import React from "react";
import { Container, Row, Col } from "reactstrap";
import DropdownComponent from "../Components/DropdownComponent";
import Sidebar from "../Components/Sidebar"; 


const HomePage = () => {
    return (
      <>
    <div className="search-container">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8}>
            <div className="search d-flex flex-column flex-md-row">
              <DropdownComponent  className="me-3"/>
              <div className="forms">
                <form
                  id="upload_form"
                  method="post"
                  encType="multipart/form-data"
                >
                  <label htmlFor="upload_box" id="upload-button">
                    Upload
                  </label>

                  <input
                    id="upload_box"
                    type="file"
                    name="image"
                    title="Upload an image"
                    aria-label="Upload an image to search for"
                  />

                  <input
                    type="submit"
                    id="file_submit"
                    className="submit"
                    value="Upload Image"
                    style={{ display: "none" }}
                  />
                </form>
                <form id="url_form" method="post">
                  <div className="input-container">
                    <input
                      className="image-url"
                      id="url_box"
                      name="url"
                      maxLength="100000"
                      placeholder="Paste or enter image URL"
                      aria-label="Enter a link to an image to search for"
                      type="text"
                    />
                  </div>
                  <button
                    className="submit-button"
                    id="url_submit"
                    name="search_button"
                    type="submit"
                  ></button>
                </form>
              </div>
            </div>
          </Col>
              </Row>
             
          </Container>
          
          
      </div>
      
      <div className="App">
            <Sidebar />
        </div>
            </>
  );
};

export default HomePage;
