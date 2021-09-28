// Set controlID on Form.Group for access. 
// Form.Group wraps a from with propper spacing

import React from 'react';
import Form from 'react-bootstrap/Form';

class Form1 extends React.Component{
  render(){
    return (
      <>
      <Form className='container'>
        <Form.Group conrolId='formBasicEmail'>  
          <Form.Label>Email Addres</Form.Label>
          <Form.Control type='email' placeholder='email'></Form.Control>
        </Form.Group>

        <Form.Group controlId='group2'>
          <Form.Label>Text</Form.Label>
          <Form.Control type='text' size='sm' placeholder='small'></Form.Control>

          <Form.Label>Text</Form.Label>
          <Form.Control type='text' size='lg' placeholder='large'></Form.Control>

          <Form.Label>Text Area</Form.Label>
          <Form.Control as='textarea' rows={3} placeholder='text area as="textarea"'></Form.Control>

          <Form.Label>Read Only</Form.Label>
          <Form.Control type='text' plaintext readOnly defaultValue='Read only this right here'></Form.Control>
        </Form.Group>

        <h3>File Input</h3>
        <Form.Group controlId='formFile'>
          <Form.Label>Default File</Form.Label>
          <Form.Control type='file' ></Form.Control>
        </Form.Group>
        <Form.Group conrolId='muli-file'>
            <Form.Label>Multiple</Form.Label>
            <Form.Control type='multiple' ></Form.Control>
        </Form.Group>

        <Form.Group controlId='color'>
          <Form.Label htmlFor='colorPick'>pick a color</Form.Label>
          <Form.Control type='color' id='colorPick' defaultValue="#378B68" title='pick something!'></Form.Control>
        </Form.Group>

      </Form>
      </>
    )
  }
  
} 



export default Form1;