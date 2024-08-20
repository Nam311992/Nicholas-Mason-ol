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



