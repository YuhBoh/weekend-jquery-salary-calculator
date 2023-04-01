$(document).ready(onReady);

function onReady() {
$( '.submit-button' ).on( 'click', addText);
}

function addText() {
// Assign SETTER value(whatever value we put in element with inputFirstName class) 
// to variable.
  let firstName = $('.inputFirstName').val();
  let lastName = $('.inputLastName').val();
  let id = $('.inputID').val();
  let title = $('.inputTitle').val();
  let annualSalary = $('.inputAnnualSalary').val();

// Hey jQuery, in tbody, append(add) value in ().
  $( 'tbody' ).append(
    `<tr>
      <td>${firstName}</td>
      <td>${lastName}</td>
      <td>${id}</td>
      <td>${title}</td>
      <td class="salary">${annualSalary}</td>
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
}