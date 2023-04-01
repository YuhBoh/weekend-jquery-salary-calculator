$(document).ready(onReady);

// Assign integer 0 to variable.
let totalCount = 0;


function onReady() {
// Hey jQuery, on elements with .submit-button, on clicking button, execute handleInput.
$( '.submit-button' ).on( 'click', handleInput);

// Hey jQuery, on elements with .delete-button, on clicking button, execute deleteInput.
$( '.delete-button' ).on( 'click', deleteInput);
}

function handleInput() {
// Assign SETTER value(whatever value we put in element with inputFirstName class) 
// to variable.
  let firstName = $('.inputFirstName').val();
  let lastName = $('.inputLastName').val();
  let id = $('.inputID').val();
  let title = $('.inputTitle').val();
  let annualSalary = Number($('.inputAnnualSalary').val());

// Hey jQuery, in tbody, append(add) value in ().
  $( 'tbody' ).append(
    `<tr>
      <td>${firstName}</td>
      <td>${lastName}</td>
      <td>${id}</td>
      <td>${title}</td>
      <td class="salary">$<span class="total-salary">${annualSalary}</span></td>
      <td class="delete-box">
        <button class="delete-button">Delete</button>
      </td>
    </tr>`
  )

// Hey jQuery, after addText function, SET the val(value) of
// whatever element with "inputFirstName" to ""(nothing).
  $('.inputFirstName').val("");
  $('.inputLastName').val("");
  $('.inputID').val("");
  $('.inputTitle').val("");
  $('.inputAnnualSalary').val("");

// Get monthlyCost by adding all annualSalary.
  totalCount += annualSalary;
  $('.total-count').text(totalCount);
// If TOTAL monthly cost esceeds $20,000, add red background to total cost.
if (totalCount > 20000) {
  $('.red').css("background-color", "red");
}
}

function deleteInput() {

$(this).parent().parent().remove();
}