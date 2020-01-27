import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { bindActionCreators } from "redux";
import { compose } from "recompose";
import { connect } from "react-redux";
import {
  Container,
  Row,
  Col,
  Image,
  InputGroup,
  Navbar,
  Button,
  FormControl,
  Form
} from "react-bootstrap";
import { GridLoader } from "react-spinners";
import { getImages, saveImagesGrid } from "./Actions";
import "./PhotoGrid.css";
import { Formik, ErrorMessage } from "formik";
import { css } from "@emotion/core";
import { toast } from "react-toastify";

const override = css`
  display: block;
  margin: 20rem auto;
  border-color: red;
`;


/**
 * validation for login
 * @constructor
 * @alias PhotoGridValidation
 * @description Validations
 * @param values Grid form values
 * @param values.name Grid Name
 */

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  return errors;
};

/**
 * PhotoGrid Component
 * @constructor
 * @alias PhotoGridComponent
 * @description PhotoGrid
 * @param props PhotoGrid Properties
 * @param props.saveImagesGrid Action to save grid
 * @param props.username username from user
 */

const Com = props => {
  const [photosSelected, setPhotosSelected] = useState([]);

  useEffect(() => {
    const { getImages } = props;
    getImages();
  }, []);

  const handleClick = image => {
    setPhotosSelected(photosSelected => [...photosSelected, image]);
  };

  const removeSelected = index => {
    photosSelected.splice(index, 1);
    setPhotosSelected([...photosSelected]);
  };

  const generateGrid = (values, { setSubmitting, resetForm }) => {
    if (photosSelected.length === 0) {
      toast.error("Please select photo to gallery!", {
        position: toast.POSITION.TOP_RIGHT
      });
      setSubmitting(false);
      return;
    }

    const { saveImagesGrid, username } = props;
    const save = {
      username: username,
      name: values.name,
      grid: photosSelected
    };

    saveImagesGrid(save);
    setPhotosSelected([]);
    resetForm();
    setSubmitting(false);
  };

  const { images, isLoading, isSaveGallery } = props;

  return (
    <Container fluid>
      <GridLoader
        size={50}
        css={override}
        color={"#123abc"}
        loading={isLoading}
      />
      <Row style={{ display: "flex", flexFlow: "row wrap" }}>
        <Col className="user-photos">
          <h1>This is your pastbook 2019</h1>
          {images.entries.map((image, index) => {
            return (
              <Image
                onClick={() => handleClick(image)}
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
        <Col className="user-photos-selected">
          {photosSelected.length !== 0 && (
            <h1>Click on the photo to unselect</h1>
          )}
          <GridLoader
            size={50}
            css={override}
            color={"#123abc"}
            loading={isSaveGallery}
          />
          {photosSelected.map((image, index) => {
            return (
              <span
                style={{ position: "relative", textAlign: "center" }}
                key={index}
              >
                <Image
                  onClick={() => removeSelected(index)}
                  src={image.picture}
                  style={{
                    margin: "2px",
                    height: "150px",
                    padding: "0"
                  }}
                />
                <span className="text-on-image">{index + 1}</span>
              </span>
            );
          })}
        </Col>
        <Navbar
          expand="lg"
          variant="dark"
          bg="dark"
          fixed="bottom"
          className="bg-light justify-content-between"
        >
          <Formik
            initialValues={{ name: "" }}
            validate={validate}
            onSubmit={generateGrid}
          >
            {({
              values,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting
            }) => (
              <Form onSubmit={handleSubmit} inline>
                <InputGroup>
                  <FormControl
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    placeholder="Gallery name"
                    name="name"
                  />
                  <InputGroup.Append>
                    <Button
                      variant="secondary"
                      block
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Generate Your Photo Gallery
                    </Button>
                  </InputGroup.Append>
                  <ErrorMessage
                    style={{ color: "red", paddingLeft: "10px" }}
                    name="name"
                    component="span"
                  />
                </InputGroup>
              </Form>
            )}
          </Formik>
        </Navbar>
      </Row>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    images: state.getImages.images,
    isLoading: state.getImages.isLoading,
    isSaveGallery: state.saveGrid.isSaveGallery,
    username: state.login.username
  };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getImages, saveImagesGrid }, dispatch);
};

export const PhotoGrid = compose(connect(mapStateToProps, mapDispatchToProps))(
  Com
);
