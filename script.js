document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const eventName = document.getElementById('event').value;
    const userName = document.getElementById('name').value;
    
    if (userName.trim() === '') {
        alert('Please enter your name');
        return;
    }

    const listId = eventName.toLowerCase() + 'List';
    const listItem = document.createElement('li');
    listItem.textContent = userName;
    document.getElementById(listId).appendChild(listItem);
    
    document.getElementById('name').value = '';
});