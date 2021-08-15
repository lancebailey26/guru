

const editHandler = async (event) => {
    event.preventDefault();
    
      const name = document.querySelector('#edit-routine-name').value.trim();
      const body = document.querySelector('#edit-routine-body').value.trim();
      
     
      
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
    
      const response = await fetch(`/api/routines/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ "name":name,"body":body  }),
        headers: {
            'Content-Type': 'application/json',
          },
       
        
      });
  
      if (response.ok) {
        alert('routine updated');
window.location = '/routines';
      } else {
        alert('Failed to edit routine, you can only edit routines that belong to you.');
      }
    }
  };
    document
    .querySelector('#subedit')
    .addEventListener('click', editHandler);