let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
let editIndex = -1; // Track the contact index being edited

// Function to display contacts
function displayContacts() {
    const contactsList = document.getElementById('contacts-list');
    contactsList.innerHTML = '';

    contacts.forEach((contact, index) => {
        const contactCard = document.createElement('div');
        contactCard.classList.add('contact-card');

        contactCard.innerHTML = `
            <div>
                <strong>${contact.name}</strong><br>
                Phone: ${contact.phone}<br>
                Email: ${contact.email}
            </div>
            <button onclick="editContact(${index})">Edit</button>
            <button onclick="deleteContact(${index})">Delete</button>
        `;

        contactsList.appendChild(contactCard);
    });
}

// Function to add or update a contact
function addOrUpdateContact() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    if (name && phone && email) {
        const newContact = { name, phone, email };
        
        if (editIndex >= 0) {
            // Update existing contact
            contacts[editIndex] = newContact;
            editIndex = -1; // Reset edit index after updating
        } else {
            // Add new contact
            contacts.push(newContact);
        }

        localStorage.setItem('contacts', JSON.stringify(contacts));
        
        document.getElementById('name').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('email').value = '';

        displayContacts();
    } else {
        alert("Please fill out all fields.");
    }
}

// Function to populate form fields for editing
function editContact(index) {
    const contact = contacts[index];
    document.getElementById('name').value = contact.name;
    document.getElementById('phone').value = contact.phone;
    document.getElementById('email').value = contact.email;

    editIndex = index; // Set the current contact index for editing
}

// Function to delete a contact
function deleteContact(index) {
    contacts.splice(index, 1);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    displayContacts();
}

// Display contacts on page load
displayContacts();
