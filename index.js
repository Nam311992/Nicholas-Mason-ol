// Adding Footer with Copyright Text
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `Nick Mason; ${thisYear}`;
footer.appendChild(copyright);

// Adding Skills Section
const skills = ["JavaScript", "HTML", "CSS", "Adobe Photoshop", "GitHub"];
const skillsSection = document.getElementById('Skills');
const skillsList = skillsSection.querySelector('ul');

skills.forEach(skill => {
    const skillItem = document.createElement('li');
    skillItem.innerText = skill;
    skillsList.appendChild(skillItem);
});



// Select the form by its name attribute
const messageForm = document.querySelector('form[name="leave_message"]');

// Add event listener to handle form submission
messageForm.addEventListener('submit', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  
  // Retrieve form field values
  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;
  
  // Log the values to the console
  console.log(usersName, usersEmail, usersMessage);
  
  // Clear the form fields
  event.target.reset();
  
  // Select the messages section and the list inside it
  const messageSection = document.querySelector('#messages');
  const messageList = messageSection.querySelector('ul');
  
  // Create a new list item for the message
  const newMessage = document.createElement('li');
  newMessage.innerHTML = `
    <a href="mailto:${usersEmail}">${usersName}</a>: 
    <span>${usersMessage}</span>
  `;
  
  // Create a remove button
  const removeButton = document.createElement('button');
  removeButton.innerText = 'Remove';
  removeButton.type = 'button';
  
  // Add an event listener to the remove button
  removeButton.addEventListener('click', function() {
    const entry = removeButton.parentNode;
    entry.remove();
  });
  
  // Append the remove button to the new message element
  newMessage.appendChild(removeButton);
  
  // Append the new message to the message list
  messageList.appendChild(newMessage);
});
