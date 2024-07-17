import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Row,
  Col,
} from "reactstrap"; // Assuming you're using reactstrap for Bootstrap components

const CardComponent = ({ cardtitle, Cardsubtitle, Cardtext, cardbody }) => {
  return (
    <Card >
      <div className="card-image text-center">
        <img src="large.png" className="w-100" style={{width:"100px,height:100px"}}/>
      </div>
      <CardBody>
        <div>
        <Row className="m-auto">
  <Col xs={4} sm={3} md={4} className="listTitle pe-0 pe-sm-1">
    <label className="card-result-heading">Wordmark</label>
  </Col>
  <Col md="8" className="m-auto">
   <label><a href="#">BRÜUSH</a></label> 
  </Col>
</Row>





          <Row className="mt-1">
            <Col md="4" className="m-auto">
              <label className="card-result-heading">Status</label>
            </Col>
            <Col md="8" className="m-auto">
              <label className="status-success-badge" href="#">
                Live
              </label>
              <label className="status-pending-badge ms-1" href="#">
                Pending
              </label>
            </Col>
          </Row>
          <Row className="mt-1">
            <Col md="4" className="m-auto">
              <label className="card-result-heading"> Goods & Services</label>
            </Col>
            <Col md="8" className="m-auto" >
              <span className="card-result-content">
                IC 035: Mail order services featuring personal care and
                hygiene...
              </span>
            </Col>
          </Row>
          <Row className="mt-1">
            <Col md="4" className="m-auto">
              <label className="card-result-heading"> Class</label>
            </Col>
            <Col md="8" className="m-auto">
              <span className="card-result-content">035</span>
            </Col>
          </Row>
          <Row className="mt-1">
            <Col md="4" className="m-auto">
              <label className="card-result-heading">Serial</label>
            </Col>
            <Col md="8" className="m-auto">
              <span className="card-result-content">88232525</span>
            </Col>
          </Row>
          <Row className="mt-1">
            <Col md="4" className="m-auto">
              <label className="card-result-heading">Owners</label>
            </Col>
            <Col md="8" className="m-auto">
              <span className="card-result-content">
                Bruush Oral Care Inc. (CORPORATION; CANADA)
              </span>
            </Col>
          </Row>
        </div>

        <CardText>{Cardtext}</CardText>
        {/* <Button color="primary">Button</Button> */}
      </CardBody>
      </Card>
      
  );
};

export default CardComponent;
