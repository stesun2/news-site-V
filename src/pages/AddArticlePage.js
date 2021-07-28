import React from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
// import { addArticle, fetchArticleByID } from '../api/ArticlesAPI';
import ArticlesAPI from '../api/ArticlesAPI';

const AddArticlePage = () => {

  // prevents form from automatically refreshing page
  const handleFormSubmit = async (event) => {
    event.preventDefault()
    // passing an article api
    const articleObject = {
      title: event.target.title.value,
      byline: event.target.byline.value,
      abstract: event.target.abstract.value
    }
    let response = await ArticlesAPI.addArticle(articleObject)
    console.log(response)

  }
  return (
    <div>
      <h1 className="mb-3" >Add Article Page</h1>
        <Form onSubmit={ handleFormSubmit } className="mb-3">

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" size="lg" placeholder="Enter Title" name="title"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Byline</Form.Label>
            <Form.Control type="text" size="lg" placeholder="Enter Byline" name="byline"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Abstract</Form.Label>
            <Form.Control type="text" size="lg" placeholder="Enter Abstract" name="abstract"/>
          </Form.Group>

          <Button variant="outline-primary" size="lg" block-type="submit" type="submit">
            Submit
          </Button>
        </Form>
    </div>
  );
};

export default AddArticlePage;