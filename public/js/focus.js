const newFocusHandler = async (event) => {
    event.preventDefault();
    var id = document.getElementById('userid').textContent
    var select = document.getElementById('focus');
    var value = select.options[select.selectedIndex].value;
    console.log(value);
    const response = await fetch(`/api/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ "focus_group":value }),
        headers: {
            'Content-Type': 'application/json',
          },
        })
  if (response.ok) {
    alert('Focus updated');
window.location = '/';
  } else {
    alert('Failed to change focus');
  }
};


  document
  .querySelector('#focusbutton')
  .addEventListener('click', newFocusHandler);