<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact List</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>Contact List</h1>

        <!-- Contact Form -->
        <div id="contact-form">
            <h2>Add Contact</h2>
            <input type="text" id="name" placeholder="Name" required>
            <input type="text" id="phone" placeholder="Phone Number" required>
            <input type="email" id="email" placeholder="Email" required>
            <button onclick="addContact()">Add Contact</button>
        </div>

        <!-- Contacts List -->
        <h2>Contacts</h2>
        <div id="contacts-list"></div>
    </div>

    <script src="script.js"></script>
</body>
</html>
