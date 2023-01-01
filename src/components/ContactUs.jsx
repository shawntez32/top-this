import React from "react";
import "../contact.css";

function contact() {
  let inputVal = document.getElementById("contactId").value;
  alert("Thanks for contacting us " + inputVal);
  document.getElementById("contactId").value = "";
  document.getElementById("contactEmail").value = "";
  document.getElementById("contactMsg").value = "";
}

function ContactUs() {
    return (
        <>
          <div class="background">
  <div class="container">
    <div class="screen">
      <div class="screen-header">
        <div class="screen-header-left">
        </div>
        <div class="screen-header-right">
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
        </div>
      </div>
      <div class="screen-body">
        <div class="screen-body-item left">
          <div class="app-title">
            <span>CONTACT</span>
            <span>US</span>
          </div>
          <div class="app-contact">CONTACT INFO : 313 333 5555</div>
        </div>
        <div class="screen-body-item">
          <div class="app-form">
            <div class="app-form-group">
              <input id="contactId" class="app-form-control" placeholder="NAME" />
            </div>
            <div class="app-form-group">
              <input id="contactEmail" type="email" class="app-form-control" placeholder="EMAIL" />
            </div>
            <div class="app-form-group message">
              <input id="contactMsg" class="app-form-control" placeholder="MESSAGE" />
            </div>
            <div class="app-form-group buttons">
              <button onClick={contact} class="app-form-button">SEND</button>
              <button class="app-form-button">CANCEL</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>
        </>
    )
}

export default ContactUs;