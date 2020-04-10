window.addEventListener("load",setForm);
function setForm(){
    document.getElementById("satisfied").addEventListener("click",validateInput);
    document.getElementById("not-satisfied").addEventListener("click",validateInput);
    document.getElementById("donate").addEventListener("click",errors);
    document.getElementById("reason").addEventListener("click",errors);
    var inputs = document.getElementsByTagName("input");
    inputs[inputs.length-1].addEventListener("click",function(e){if(!confirm("Do you want to send the form?")){e.preventDefault();}})
}

function validateInput() {
    var satisfied = document.getElementById("satisfied");
    var donate = document.getElementById("donate");
    var notSatisfied = document.getElementById("not-satisfied");
    var reason = document.getElementById("reason");
    var error = document.getElementsByClassName("error-message")[0];
    if(satisfied.checked){
      //donate.disabled = false;
      reason.value= "";
      reason.readOnly = true;
    }
    if(notSatisfied.checked){
      donate.checked = false;
      //donate.disabled = true;
      reason.readOnly = false;
    }
    error.innerHTML = '';
  }
  function errors(e) {
    var satisfied = document.getElementById("satisfied");
    var donate = document.getElementById("donate");
    var notSatisfied = document.getElementById("not-satisfied");
    var reason = document.getElementById("reason");
    var error = document.getElementsByClassName("error-message")[0];
    validateInput();
    if(satisfied.checked){
      if(e.target.name == "reason"){
        error.innerHTML = 'you must click non-Satisfied';
      }
    }
    if(notSatisfied.checked){
      if(e.target.name == "donate"){
        error.innerHTML = 'you must click Satisfied';
      }
    }

    }
  
  // document.body.innerHTML = `
  // <!-- Display error message in following div -->
  // <div class="error-message"></div>
  
  // <form id="satisfaction" onsubmit="return validateInput()">
  //   <input type="radio" id="satisfied" name="satisfied" checked="checked" required /> Satisfied
  //   <input type="checkbox" id="donate" name="donate" /> Donate<br />
  //   <input type="radio" id="not-satisfied" name="satisfied" required /> Not satisfied
  //   <input type="text" id="reason" name="reason" /> Reason<br />
  //   <input type="submit" value="Submit" />
  // </form>`;
  
  // validateInput();
  
  // console.log(document.getElementsByClassName("error-message")[0].innerHTML);