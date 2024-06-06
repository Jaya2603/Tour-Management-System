import React from 'react';
import { Container, Row, Col } from 'reactstrap'; // Assuming you're using Bootstrap for styling
import Subtitle from '../shared/Subtitle';// Import your Subtitle component
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery'; // Import the MasonryImagesGallery component

const GalleryPage = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <Subtitle subtitle={"Gallery"} />
            <h2 className="gallery__title">
              Visit our customers tour gallery
            </h2>
          </Col>
          <Col lg="12">
            <MasonryImagesGallery />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GalleryPage;
