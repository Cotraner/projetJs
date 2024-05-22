let isEditMode = false;
let isAdminAuthenticated = false;

let editButton = document.getElementById('editButton');
let deleteButtons = document.getElementsByClassName('deleteButton');
let addMemberButton = document.getElementById('addMemberButton');
let addMemberForm = document.getElementById('addMemberForm');
let newMemberNameInput = document.getElementById('newMemberName');

editButton.addEventListener('click', function() {
  if (isEditMode) {
    let confirmExit = confirm("Êtes-vous sûr de vouloir quitter le mode édition ?");
    if (confirmExit) {
      exitEditMode();
    }
  } else {
    let username = prompt("Veuillez entrer le nom d'utilisateur administrateur", "");
    if (username === "admin") {
      let password = prompt("Veuillez entrer le mot de passe administrateur", "");
      if (password === "admin_pwd") {
        enterEditMode();
      } else {
        alert("Mot de passe incorrect");
      }
    } else {
      alert("Nom d'utilisateur administrateur incorrect");
    }
  }
});

for (let i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener('click', function() {
    if (isEditMode) {
      let confirmDelete = confirm("Êtes-vous sûr de vouloir supprimer ce membre ?");
      if (confirmDelete) {
        this.parentNode.remove();
      }
    }
  });
}

addMemberButton.addEventListener('click', function() {
  let newMemberName = newMemberNameInput.value;
  let desc = document.getElementById("desc").value;
  if (newMemberName !== "") {
    let newMember = document.createElement('div');
    newMember.className = 'member';
    newMember.innerHTML = '<span class="name carte_version_petite">' + newMemberName + '</span>' +
      '<button class="deleteButton">Supprimer</button>';
    document.getElementById('members').appendChild(newMember);
    newMemberNameInput.value = "";
  }
});

function enterEditMode() {
  isEditMode = true;
  isAdminAuthenticated = true;
  editButton.style.backgroundColor = "#4CAF50";
  editButton.textContent = "Mode normal";
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].style.display = "inline-block";
  }
  addMemberForm.style.display = "block";
}

function exitEditMode() {
  isEditMode = false;
  isAdminAuthenticated = false;
  editButton.style.backgroundColor = "#f44336";
  editButton.textContent = "Mode édition";
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].style.display = "none";
  }
  addMemberForm.style.display = "none";
}