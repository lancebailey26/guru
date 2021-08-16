const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#routine-name').value.trim();
    const body = document.querySelector('#routine-body').value.trim();
  
    if (name && body) {
      const response = await fetch(`/api/routines`, {
        method: 'POST',
        body: JSON.stringify({ name, body}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/routines');
      } else {
        alert('Failed to create routine');
      }
    }
  };

  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/routines/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/routines');
      } else {
        alert('Failed to delete routine.');
      }
    }
  };
  document
  .querySelector('.new-routine-form')
  .addEventListener('submit', newFormHandler);

  document
  .querySelector('.routine-list')
  .addEventListener('click', delButtonHandler);
