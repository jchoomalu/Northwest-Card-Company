import React, { useState } from "react";
import { Form, Card, Container, Button } from "react-bootstrap";

function AddCardImage({cardId}) {
  const [imageUpload, setImageUplaod] = useState("");

  const handleFileChange = (event) => {
    setImageUplaod(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append("file", imageUpload);
    try {
      const response = await fetch(`http://localhost:1919/api//admin/addimage/${cardId}`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("File uploaded successfully");
        // Handle success
      } else {
        console.error("Failed to upload file");
        // Handle failure
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle network errors
    }
  };

  return (
    <>
      <Card className="col-sm-12 col-md-10 col-lg-8 mx-auto mb-5 shadow p-4">
        <Container className="text-center w-75 my-3 form-header">
          <h5>Add Card Image</h5>
        </Container>
        <Form onSubmit={handleFileUpload}>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Choose an image</Form.Label>
            <Form.Control
              name="imageURL"
              type="file"
              onChange={handleFileChange}
            />
          </Form.Group>
          <Button className="my-2" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </>
  );
}

export default AddCardImage;
