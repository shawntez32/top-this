import React from "react";


function join() {
  let inputVal = document.getElementById("inputId").value;
  alert("Thanks for joining " + inputVal);
  document.getElementById("inputId").value = "";
  document.getElementById("inputEmail").value = "";
}

function JoinUs(props) {
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
            <span>JOIN</span>
            <span>US</span>
          </div>
          <div class="app-contact">CONTACT INFO : 313 333 5555</div>
        </div>
        <div class="screen-body-item">
          <div class="app-form">
            <div class="app-form-group">
              <input id="inputId" name="nameInput" class="app-form-control" placeholder="NAME" />
            </div>
            <div class="app-form-group">
              <input id="inputEmail" class="app-form-control" placeholder="EMAIL" />
            </div>
            <div class="app-form-group buttons">
              <button onClick={join} class="app-form-button">SEND</button>
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

export default JoinUs;