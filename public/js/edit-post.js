async function editFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value.trim();
    const description = document.querySelector('input[name="description"]').value.trim();
    const location = document.querySelector('input[name="location"]').value.trim();
    const size = document.querySelector('input[name="size"]').value.trim();
  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
      
      const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          post_id: id,
          title,
          description,
          location,
          size
        }),
        
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        document.location.replace('/profile/');
      } else {
        alert(response.statusText);
      }
  
  }
  
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);