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



// Replace 'YOUR_GITHUB_USERNAME' with your actual GitHub username
const username = 'Nam311992';
const url = `https://api.github.com/users/${username}/repos`;

// Perform the fetch request
fetch(url)
  .then(response => {
    // Check if the response is OK
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    // Parse the JSON response
    return response.json();
  })
  .then(repositories => {
    // Now 'repositories' holds the parsed JSON data
    console.log(repositories);
  })
  .catch(error => {
    // Handle errors
    console.error('There was a problem with the fetch operation:', error);
  });

  function displayRepositories(repositories) {
    // Select the project section and list elements
    const projectSection = document.getElementById('projects');
    const projectList = projectSection.querySelector('ul');
  
    // Clear any existing list items
    projectList.innerHTML = '';
  
    // Iterate over repositories and create list items
    repositories.forEach(repo => {
      const project = document.createElement('li');
      project.innerText = repo.name;
      projectList.appendChild(project);
    });
  }
  