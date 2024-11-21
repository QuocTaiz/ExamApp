import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function NotifyModal(props){

  return (
    <>
      <Modal show={props.show} onHide={props.onHide} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            Notification
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {props.content}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={props.onClick}>Close</Button>
        </Modal.Footer>

      </Modal>
    </>
  )
}

export default NotifyModal;