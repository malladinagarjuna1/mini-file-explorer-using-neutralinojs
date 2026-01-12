<div align="center">

# 📁 Mini File Explorer

### A Lightweight Cross-Platform Desktop File Manager

Built with [Neutralinojs](https://neutralino.js.org) for **GSoC 2026**

[![Neutralinojs](https://img.shields.io/badge/Neutralinojs-6.4.0-blueviolet)](https://neutralino.js.org)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Platform](https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux-lightgrey)]()

</div>

---

## 📖 Overview

A **lightweight, cross-platform desktop file explorer** that demonstrates the power of Neutralinojs native APIs for filesystem operations. This application showcases how to build native desktop utilities using web technologies without the overhead of Electron or other heavy frameworks.

Created as a sample project to understand Neutralinojs from an **application developer's perspective**, as recommended for **GSoC 2026 – Neutralinojs**.

---

## ✨ Features

- 📂 **Folder Selection** – Browse and select any folder from your local system
- 📋 **Directory Listing** – View files and subfolders with intuitive icons
- 🔍 **File Operations**
  - Create new folders with validation
  - Delete files and folders (with recursive support)
  - View file/folder metadata (size, type, timestamps)
- 🎨 **Modern Dark UI** – Sleek gradient-based interface with smooth animations
- 🔔 **Desktop Notifications** – Native notifications for user actions
- ⚡ **Fast & Lightweight** – No bundled browser engine, minimal resource usage

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Neutralinojs** | Native desktop framework |
| **HTML/CSS** | User interface |
| **Vanilla JavaScript** | Application logic |

> **Note:** No backend server, database, or heavy dependencies required!

---

## 🔌 Neutralinojs Native APIs Used

### 📁 Filesystem API
```javascript
Neutralino.filesystem.readDirectory()      // List directory contents
Neutralino.filesystem.getStats()           // Get file/folder metadata
Neutralino.filesystem.createDirectory()    // Create new folders
Neutralino.filesystem.remove()             // Delete files and folders
Neutralino.filesystem.writeFile()          // Create/write files
```

### 💻 OS API
```javascript
Neutralino.os.showFolderDialog()          // Open folder picker
Neutralino.os.showSaveDialog()            // Save file dialog
Neutralino.os.open()                      // Open files with default app
Neutralino.os.showNotification()          // Show desktop notifications
```

### 🪟 Window & App API
```javascript
Neutralino.window.setTitle()              // Update window title
Neutralino.app.exit()                     // Close application
```

These APIs provide **true native desktop functionality** without bundling Chromium or any heavy browser engine.

---

## 📂 Project Structure

```
mini-file-explorer/
├── resources/
│   ├── index.html              # Main application UI
│   ├── styles.css              # Dark theme styling
│   └── js/
│       ├── main.js             # Application logic
│       └── neutralino.js       # Neutralino client library
├── bin/                        # Platform binaries (auto-generated)
├── neutralino.config.json      # App configuration
├── .gitignore
├── LICENSE
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (for installing Neutralino CLI)
- **Git** (optional, for cloning)

### Installation & Setup

**1. Install Neutralinojs CLI**
```bash
npm install -g @neutralinojs/neu
```

**2. Clone the Repository**
```bash
git clone https://github.com/malladinagarjuna1/mini-file-explorer-using-neutralinojs.git
cd mini-file-explorer
```

**3. Run the Application**
```bash
neu run
```

The application will launch in a native window on your platform (Windows, macOS, or Linux).

---

## 🎯 What This Project Demonstrates

✅ **Deep understanding** of Neutralinojs as an application developer  
✅ **Proper usage** of filesystem and OS native APIs  
✅ **Safe file operations** with error handling and user confirmations  
✅ **Async/await patterns** for non-blocking operations  
✅ **Modern UI/UX** with CSS gradients and animations  
✅ **Cross-platform compatibility** without platform-specific code  

---

## 🔒 Security Features

- **Token-based authentication** for API calls
- **Native permission system** via `nativeAllowList` and `nativeBlockList`
- **User confirmation** for destructive operations (delete)
- **Path validation** to prevent malicious file access

---

## 🐛 Known Limitations

| Limitation | Reason |
|------------|--------|
| No automatic file watch | Requires polling or future native API |
| Basic file operations | Keeping the app minimal and focused |
| Limited file preview | Relies on system default apps |

> These limitations are **intentional** to maintain simplicity and demonstrate core Neutralinojs APIs.

---

## 🚧 Future Enhancements

- [ ] File watcher for real-time updates
- [ ] File/folder search functionality
- [ ] Copy/paste/move operations
- [ ] Multi-file selection
- [ ] File preview for images/text
- [ ] Keyboard shortcuts
- [ ] Theme toggle (light/dark)
- [ ] Favorites/bookmarks system

---

## 💡 Motivation

This project was built to:

1. **Learn Neutralinojs deeply** – Understand its architecture and APIs
2. **Gain practical experience** – Build a real-world desktop utility
3. **Prepare for GSoC 2026** – Demonstrate capability for meaningful contributions
4. **Contribute to the ecosystem** – Provide a reference implementation for developers

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  

- 🐛 **Found a bug?** [Open an issue](https://github.com/malladinagarjuna1/mini-file-explorer-using-neutralinojs/issues)
- 💡 **Have an idea?** [Start a discussion](https://github.com/malladinagarjuna1/mini-file-explorer-using-neutralinojs/discussions)
- 🔧 **Want to contribute?** Fork the repo and submit a PR

---

## 📄 License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Neutralinojs Team](https://github.com/neutralinojs) for creating an amazing lightweight framework
- [GSoC 2026](https://summerofcode.withgoogle.com/) for inspiring this project
- The open-source community for continuous support

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ using [Neutralinojs](https://neutralino.js.org)

</div>
