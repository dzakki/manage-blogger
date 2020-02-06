import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function Login() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const url = `https://accounts.google.com/o/oauth2/auth?scope=https://www.googleapis.com/auth/blogger&response_type=code&access_type=offline&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&client_id=${process.env.REACT_APP_CLIENT_ID}`

    return (
        <>
          <Button variant="outline-light" size="sm" onClick={handleShow} className="text-dark">
            Login or Register
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Body>
              <div className="m-3">
                  <div className="d-flex justify-content-center text-center">
                    <div>
                      <p className="font-weight-bolder">Welcome back.</p> 
                      <p>
                        Sign in or register to get blog list and posts of blog, you can manage your blog here there's not limit!
                      </p>
                      <div>
                        <a href={url} className="btn btn-outline-primary btn-sm">login</a>
                      </div>
                    </div>
                  </div>
              </div>
            </Modal.Body>
          </Modal>
        </>
    );
}