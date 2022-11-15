import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'

const Sort = ({ label, controlId, options, onChange, onClick }) => {
  return (
    <Form>
      <Form.Group as={Row} className="mb-3" controlId={controlId}>
        <Form.Label column sm="4" style={{ textAlign: 'right' }}>
          {label}
        </Form.Label>
        <Col sm="8">
          <Form.Select aria-label={controlId} onChange={onChange} data-testid="sortby-component" onClick={onClick}>
            {options.map(item => 
              <option key={item.value} value={item.value}>{item.label}</option>
            )}
          </Form.Select>
        </Col>
      </Form.Group>
    </Form>
  )
}

export default Sort