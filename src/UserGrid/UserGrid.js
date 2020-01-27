import React from "react";
import { bindActionCreators } from "redux";
import { compose } from "recompose";
import { connect } from "react-redux";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./UserGrid.css";

const Com = props => {
  const { grids } = props;


  return (
    <Container fluid>
      <Row style={{ display: "flex", flexFlow: "row wrap" }}>
        {grids.map(({ grid, name }, i) => {
          return (
            <Col className="user-photos" key={i} xs={6} md={4}>
              <h1>{name}</h1>
              {grid.map((image, index) => {
                return (
                  <Image
                    src={image.picture}
                    key={index}
                    style={{
                      margin: "2px",
                      height: "150px",
                      padding: "0"
                    }}
                  />
                );
              })}
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

function mapStateToProps(state) {
  return {
    grids: state.login.grid
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export const UserGrid = compose(connect(mapStateToProps, mapDispatchToProps))(
  Com
);
