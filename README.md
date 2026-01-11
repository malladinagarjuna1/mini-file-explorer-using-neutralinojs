# Mini File Explorer – Neutralinojs

A lightweight, cross-platform **desktop mini file explorer** built using **Neutralinojs**.  
This application demonstrates how to use Neutralinojs native APIs to interact with the operating system’s filesystem in a safe and user-friendly way.

The project is created as a **sample Neutralinojs app** to understand the framework from an **app developer’s perspective**, as recommended for **GSoC 2026 – Neutralinojs**.

---

## Features

- Select any folder from the local system
- List files and subfolders inside the selected directory
- Navigate into subfolders and go back to parent directories
- View file and folder metadata (size, type, timestamps)
- Open files using the system’s default application
- Create new files inside the selected directory
- Delete files and folders with confirmation
- Show native desktop notifications for user actions
- Simple and minimal UI focused on functionality

---

## Native APIs Used

This project uses multiple **Neutralinojs native APIs**, including:

### Filesystem
- `filesystem.readDirectory()`
- `filesystem.getStats()`
- `filesystem.writeFile()`
- `filesystem.removeFile()`
- `filesystem.removeDirectory()`

###  OS
- `os.showOpenDialog()`
- `os.showSaveDialog()`
- `os.open()`
- `os.showNotification()`

###  Window & App
- `window.minimize()`
- `window.maximize()`
- `app.exit()`

These APIs enable true native desktop functionality without bundling a heavy browser engine.

---

##  Tech Stack

- **Neutralinojs**
- HTML
- CSS
- Vanilla JavaScript

No backend server or database is used.

---

## Project Structure

mini-file-explorer/
├── index.html
├── style.css
├── script.js
├── neutralino.config.json
├── README.md
└── screenshots/

yaml
Copy code

---

##  How to Run the App

### 1. Install Neutralinojs CLI
```bash
npm install -g @neutralinojs/neu
2. Clone the repository
bash
Copy code
git clone <your-repo-url>
cd mini-file-explorer
3. Run the app
bash
Copy code
neu run
 What This Project Demonstrates
Understanding of Neutralinojs as an application developer

Correct usage of filesystem and OS native APIs

Safe handling of file operations (create/delete)

Proper async handling and error management

Building lightweight desktop utilities using web technologies

 Limitations
Automatic file system change detection (file watcher) is not implemented

Notifications are shown only for actions performed inside the app

These limitations are intentional to keep the app minimal and aligned with current Neutralinojs APIs.

 Future Improvements
File watcher support (polling or native API)

Folder creation support

Sorting and filtering files

Dark mode

Improved UI layout

 Motivation
This project was built to:

Learn Neutralinojs deeply

Understand its native API design

Prepare for meaningful contributions to the Neutralinojs ecosystem

Serve as a foundation for future GSoC contributions

 Contributing
Feedback and suggestions are welcome.
This project follows Neutralinojs coding and contribution guidelines.
