import React from 'react';
import "./Pay.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useNavigate } from "react-router-dom";
import QrPay from "./QrPay"




export default function Pay() {
    const navigate = useNavigate(); 
  return (
      <div className="maincontainer">
        <div class="container py-5">
          <div class="row">
            <div class="col-lg-7 mx-auto">
              <div class="bg-white rounded-lg shadow-sm p-5">
                 <ProgressBar animated now={10}/>
                <ul role="tablist" class="nav bg-light nav-pills rounded-pill nav-fill mb-3 mt-2">
                  <li class="nav-item">
                    <a data-toggle="pill" href="#nav-tab-card" class="nav-link active rounded-pill">
                      <i class="fa fa-credit-card"></i>
                      Credit Card
                    </a>
                  </li>
                  <li class="nav-item">
                    <a data-toggle="pill" href="#nav-tab-paypal" class="nav-link rounded-pill">
                      <i class="fa fa-paypal"></i>
                      Paypal
                    </a>
                  </li>
                  <li class="nav-item">
                    <a data-toggle="pill" href="#nav-tab-paypal" class="nav-link rounded-pill">
                      <i class="fa fa-paypal"></i>
                      Paypal
                    </a>
                  </li>
                  <li class="nav-item">
                    <a data-toggle="pill" href="#nav-tab-bank" class="nav-link rounded-pill">
                      <i class="fa fa-university"></i>
                      Bank Transfer
                    </a>
                  </li>
                </ul>
                <div class="tab-content">
                  <div id="nav-tab-card" class="tab-pane show active">
                    <form role="form">
                      <div class="form-group">
                        <label for="username">Full name (on the card)</label>
                        <input type="text" name="username" placeholder="Jassa" required class="form-control" />
                      </div>
                      <div class="form-group">
                        <label for="cardNumber">Card number</label>
                        <div class="input-group">
                          <input type="text" name="cardNumber" placeholder="Your card number" class="form-control" required />
                          <div class="input-group-append">
                            <span class="input-group-text ">
                              <i class="fa fa-cc-visa mx-1"></i>
                              <i class="fa fa-cc-amex mx-1"></i>
                              <i class="fa fa-cc-mastercard mx-1"></i>
                            </span>
                          </div>
                        </div>
                       </div>
                       </form>
                      </div>
                      <div class="row">
                        <div class="col-sm-9">
                          <div class="form-group">
                            <label><span class="hidden-xs">Expiration</span></label>
                            <div class="input-group">
                              <input type="number" placeholder="MM" name="" class="form-control" required />
                              <input type="number" placeholder="YY" name="" class="form-control" required />
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-9">
                          <div class="form-group mb-4">
                            <label data-toggle="tooltip" title="Three-digits code on the back of your card">CVV
                              <i class="fa fa-question-circle"></i>
                            </label>
                            <input type="text" required class="form-control" />
                          </div>
                        </div>
                        <Form className='className="d-grid gap-2"'>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                       </Form.Group>
                      <div className='d-grid gap-2'>
                       <Button variant="outline-dark" onClick={() => navigate("/QrPay")} size="lg"> Confirm </Button>
                       </div> 
                     </Form>
                        </div>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
);
}