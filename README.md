<div align="center">

#  Mini File Explorer

### A Lightweight Cross-Platform Desktop File Manager

Built with [Neutralinojs](https://neutralino.js.org) for **GSoC 2026**


## demonstration video



https://github.com/user-attachments/assets/536ac14b-cddb-4515-9b52-4f889d7e4c91





</div>

---

##  Overview

A **lightweight, cross-platform desktop file explorer** that demonstrates the power of Neutralinojs native APIs for filesystem operations. This application showcases how to build native desktop utilities using web technologies without the overhead of Electron or other heavy frameworks.

Created as a sample project to understand Neutralinojs from an **application developer's perspective**, as recommended for **GSoC 2026 – Neutralinojs**.

---

##  Features

- 📂 **Folder Selection** – Browse and select any folder from your local system
- 📋 **Directory Listing** – View files and subfolders with intuitive icons
- 🔄 **Auto-Refresh** – Automatic file change detection with polling-based monitoring
- 🔍 **File Operations**
  - Create new folders with validation
  - Delete files and folders (with recursive support)
  - View file/folder metadata (size, type, timestamps)
- 🎨 **Modern Dark UI** – Sleek gradient-based interface with smooth animations
- 🔔 **Desktop Notifications** – Native notifications for file changes and user actions
- ⚡ **Fast & Lightweight** – No bundled browser engine, minimal resource usage

---

##  Tech Stack

| Technology | Purpose |
|------------|---------|
| **Neutralinojs** | Native desktop framework |
| **HTML/CSS** | User interface |
| **Vanilla JavaScript** | Application logic |

> **Note:** No backend server, database, or heavy dependencies required!

---

##  Neutralinojs Native APIs Used

### Filesystem API
```javascript
Neutralino.filesystem.readDirectory()      // List directory contents
Neutralino.filesystem.getStats()           // Get file/folder metadata
Neutralino.filesystem.createDirectory()    // Create new folders
Neutralino.filesystem.remove()             // Delete files and folders
Neutralino.filesystem.writeFile()          // Create/write files
```

### OS API
```javascript
Neutralino.os.showFolderDialog()          // Open folder picker
Neutralino.os.showSaveDialog()            // Save file dialog
Neutralino.os.open()                      // Open files with default app
Neutralino.os.showNotification()          // Show desktop notifications
```

###  Window & App API
```javascript
Neutralino.window.setTitle()              // Update window title
Neutralino.app.exit()                     // Close application
```

These APIs provide **true native desktop functionality** without bundling Chromium or any heavy browser engine.

---

##  Project Structure

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

##  Getting Started

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

##  What This Project Demonstrates

✅ **Deep understanding** of Neutralinojs as an application developer  
✅ **Proper usage** of filesystem and OS native APIs  
✅ **Safe file operations** with error handling and user confirmations  
✅ **Async/await patterns** for non-blocking operations  
✅ **Modern UI/UX** with CSS gradients and animations  
✅ **Cross-platform compatibility** without platform-specific code  
✅ **Automatic change detection** using polling-based directory snapshots  

---

## 🔄 File Change Detection (Auto-Refresh)

The application features an **automatic file change detection system** that monitors the currently selected directory for any modifications.

### How It Works

The system uses a **polling-based snapshot comparison** approach:

1. **Initial Snapshot** – When you select a folder, the app takes a snapshot of all files/folders with their metadata (names and modification times)

2. **Continuous Monitoring** – Every 3 seconds, a new snapshot is taken and compared with the previous one

3. **Change Detection** – The comparison identifies:
   - ✅ **Added files/folders** – New items that weren't in the previous snapshot
   - ❌ **Removed files/folders** – Items that existed before but are now gone
   - ✏️ **Modified files/folders** – Items with different modification timestamps

4. **User Notification** – When changes are detected:
   - A popup alert displays what changed
   - The file list automatically refreshes
   - A visual indicator (🔄 Auto-refresh active) shows monitoring is active

### Implementation Details

```javascript
// Snapshot structure (lightweight)
{
  "file1.txt": { mtime: 1705190400000, isDir: false },
  "folder1":   { mtime: 1705190500000, isDir: true }
}

// Polling interval: 3 seconds
// No file content tracking (efficient)
// Automatic cleanup when folder changes
```

### Why Polling?

Neutralinojs currently doesn't provide a native filesystem watcher API (like Node.js's `fs.watch`). The polling approach:

- ✅ **Works cross-platform** (Windows, macOS, Linux)
- ✅ **Lightweight** – Only tracks metadata, not file contents
- ✅ **Reliable** – No dependency on OS-specific events
- ⚠️ **Trade-off** – 3-second delay vs. instant notifications

### Visual Indicators

- **🔄 Auto-refresh active** badge appears when monitoring a folder
- Pulsing animation indicates active polling
- Badge disappears when monitoring stops

---

##  Security Features

- **Token-based authentication** for API calls
- **Native permission system** via `nativeAllowList` and `nativeBlockList`
- **User confirmation** for destructive operations (delete)
- **Path validation** to prevent malicious file access

---

##  Known Limitations

| Limitation | Reason | Solution |
|------------|--------|----------|
| Polling-based file watch | No native filesystem event API in Neutralinojs | Uses 3-second polling interval for change detection |
| Basic file operations | Keeping the app minimal and focused | Future enhancements planned |
| Limited file preview | Relies on system default apps | Intentional design choice |

> **Note on File Change Detection:** The app uses a polling-based directory snapshot mechanism to detect filesystem changes due to the absence of a native event-based filesystem watcher API in Neutralinojs. This approach involves trade-offs between responsiveness and resource usage. The current implementation checks for changes every 3 seconds, providing a good balance between real-time updates and system performance.

---

##  Future Enhancements

- [x] ✅ **File watcher for real-time updates** – Implemented via polling-based snapshot comparison
- [ ] File/folder search functionality
- [ ] Copy/paste/move operations
- [ ] Multi-file selection
- [ ] File preview for images/text
- [ ] Keyboard shortcuts
- [ ] Theme toggle (light/dark)
- [ ] Favorites/bookmarks system
- [ ] Configurable polling interval

---

##  Motivation

This project was built to:

1. **Learn Neutralinojs deeply** – Understand its architecture and APIs
2. **Gain practical experience** – Build a real-world desktop utility
3. **Prepare for GSoC 2026** – Demonstrate capability for meaningful contributions
4. **Contribute to the ecosystem** – Provide a reference implementation for developers

---





