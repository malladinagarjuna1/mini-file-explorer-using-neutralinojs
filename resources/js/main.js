let currentPath = null;
let selectedItem = null;
let selectedItemType = null;


Neutralino.init();


function getPathSeparator(basePath) {
    return basePath && basePath.includes('\\') ? '\\' : '/';
}


async function deleteDirectoryRecursive(dirPath, separator) {
    try {
        const entries = await Neutralino.filesystem.readDirectory(dirPath);
        
    
        for (const entry of entries) {
    
            if(entry.entry === '.' || entry.entry === '..') continue;
            const fullPath = dirPath + separator + entry.entry;
            if (entry.type === 'DIRECTORY') {
           
                await deleteDirectoryRecursive(fullPath, separator);
            } else {
                
                await Neutralino.filesystem.remove(fullPath);
            }
        }
        
      
        await Neutralino.filesystem.remove(dirPath);
    } catch(err) {
        console.error("Error deleting directory:", dirPath, err);
        throw err;
    }
}

document.getElementById('selectFolderBtn').addEventListener("click", async() => {
    try{
        const selectedPath = await Neutralino.os.showFolderDialog('Select a folder', {
            defaultPath: 'C:\\Users'
        });
        console.log(selectedPath);
        currentPath = selectedPath;
        document.getElementById("folderPath").innerText= selectedPath;
    }catch(err){
        console.error(err);
    }
});

document.getElementById('readdirectory').addEventListener("click", async() => {
if(!currentPath){
     alert(" Please select a  folder first");
     return;
} 
try {
    const entries = await Neutralino.filesystem.readDirectory(currentPath);
    console.log(entries);
    
 
    const fileList = document.getElementById('fileList');
    fileList.innerHTML = ''; 
    
    entries.forEach(entry => {
        const li = document.createElement('li');
        const icon = entry.type === 'DIRECTORY' ? '📁' : '📄';
        li.textContent = `${icon} ${entry.entry}`;
        li.setAttribute('data-name', entry.entry);
        li.setAttribute('data-type', entry.type);
        
       
        li.addEventListener('click', () => {
            document.querySelectorAll('#fileList li').forEach(item => item.classList.remove('selected'));
            li.classList.add('selected');
            selectedItem = entry.entry;
            selectedItemType = entry.type;
            document.getElementById('deleteFolderBtn').disabled = false;
        });
        
   
        li.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            document.querySelectorAll('#fileList li').forEach(item => item.classList.remove('selected'));
            li.classList.add('selected');
            selectedItem = entry.entry;
            selectedItemType = entry.type;
            document.getElementById('deleteFolderBtn').disabled = false;
            showContextMenu(e.clientX, e.clientY);
        });
        
        fileList.appendChild(li);
    });

}catch(err){
    console.log(err);
}

});

async function showStats(fileName){
     const fullPath = currentPath+ "/" + fileName;
    const stats = await Neutralino.filesystem.getStats(fullPath);
console.log(stats);
 }



document.getElementById('getStats').addEventListener("click", async() => {
    if(!currentPath){
        alert("Please select a folder first");
        return;
    }
    try {
        const stats = await Neutralino.filesystem.getStats(currentPath);
        console.log(stats);
        alert(`Path: ${currentPath}\nType: ${stats.isDirectory ? 'Directory' : 'File'}\nSize: ${stats.size} bytes`);
    }
    catch(err){
        console.log(err);
    }
});


async function openFile(fileName){
  const fullPath= currentPath+ "/" + fileName;
  return await Neutralino.os.open(fullPath);
}


document.getElementById('createFolderBtn').addEventListener("click", async() => {
    if(!currentPath){
        alert("Please select a folder first");
        return;
    }
    
    try {
        const folderName = prompt("Enter folder name:");
        if(!folderName || folderName.trim() === '') return;
        
        const pathSeparator = currentPath.includes('\\') ? '\\' : '/';
        const folderPath = currentPath + pathSeparator + folderName.trim();
        
      
        try {
            await Neutralino.filesystem.getStats(folderPath);
            alert("Folder already exists!");
            return;
        } catch(err) {

        }
        
        await Neutralino.filesystem.createDirectory(folderPath);
        Neutralino.os.showNotification("Success", `Folder '${folderName}' created successfully`);
        
       
        document.getElementById('readdirectory').click();
    } catch(err) {
        console.error("Create folder error:", err);
        Neutralino.os.showNotification("Error", "Failed to create folder: " + err.message);
    }
});


document.getElementById('deleteFolderBtn').addEventListener("click", async() => {
    if(!currentPath){
        alert("Please select a folder first");
        return;
    }
    
    if(!selectedItem){
        alert("Please select an item to delete");
        return;
    }
    
    try {
        const pathSeparator = getPathSeparator(currentPath);
        const itemPath = currentPath + pathSeparator + selectedItem;
        const stats = await Neutralino.filesystem.getStats(itemPath);
        
        const isDir = stats.isDirectory;
        const confirmDelete = confirm(`Are you sure you want to delete the ${isDir ? 'folder' : 'file'} '${selectedItem}'? This action cannot be undone.`);
        if(!confirmDelete) return;
        
        if(isDir){
            await deleteDirectoryRecursive(itemPath, pathSeparator);
        } else {
            await Neutralino.filesystem.remove(itemPath);
        }
        
        Neutralino.os.showNotification("Success", `${isDir ? 'Folder' : 'File'} '${selectedItem}' deleted successfully`);
        selectedItem = null;
        selectedItemType = null;
        document.getElementById('deleteFolderBtn').disabled = true;
        document.querySelectorAll('#fileList li').forEach(item => item.classList.remove('selected'));
        
        document.getElementById('readdirectory').click();
    } catch(err) {
        console.error("Delete error (button):", err);
        alert("Failed to delete: " + (err && err.message ? err.message : err));
        Neutralino.os.showNotification("Error", "Failed to delete item: " + err.message);
    }
});


function showContextMenu(x, y) {
    const contextMenu = document.getElementById('contextMenu');
    contextMenu.style.display = 'block';
    contextMenu.style.left = x + 'px';
    contextMenu.style.top = y + 'px';
}

function hideContextMenu() {
    const contextMenu = document.getElementById('contextMenu');
    contextMenu.style.display = 'none';
}


document.getElementById('deleteItemBtn').addEventListener("click", async() => {
    if(!selectedItem) return;
    
    try {
        const pathSeparator = getPathSeparator(currentPath);
        const itemPath = currentPath + pathSeparator + selectedItem;
        const stats = await Neutralino.filesystem.getStats(itemPath);
        
        const confirmDelete = confirm(`Are you sure you want to delete '${selectedItem}'?`);
        if(!confirmDelete) {
            hideContextMenu();
            return;
        }
        
        if(stats.isDirectory){
            await deleteDirectoryRecursive(itemPath, pathSeparator);
        } else {
            await Neutralino.filesystem.remove(itemPath);
        }
        
        Neutralino.os.showNotification("Success", `'${selectedItem}' deleted successfully`);
        selectedItem = null;
        selectedItemType = null;
        document.getElementById('deleteFolderBtn').disabled = true;
        hideContextMenu();
        document.getElementById('readdirectory').click();
    } catch(err) {
        console.error("Delete error (context menu):", err);
        alert("Failed to delete: " + (err && err.message ? err.message : err));
        Neutralino.os.showNotification("Error", "Failed to delete item: " + err.message);
    }
});


document.getElementById('renameItemBtn').addEventListener("click", async() => {
    if(!selectedItem) return;
    
    try {
        const newName = prompt(`Rename '${selectedItem}' to:`, selectedItem);
        if(!newName || newName.trim() === '') {
            hideContextMenu();
            return;
        }
        
        const pathSeparator = currentPath.includes('\\') ? '\\' : '/';
        const oldPath = currentPath + pathSeparator + selectedItem;
        const newPath = currentPath + pathSeparator + newName.trim();
        
       
        try {
            await Neutralino.filesystem.getStats(newPath);
            alert("A file/folder with this name already exists!");
            hideContextMenu();
            return;
        } catch(err) {
           
        }
        
       
        const stats = await Neutralino.filesystem.getStats(oldPath);
        if(stats.isDirectory){
    
            alert("Folder renaming is not directly supported. Please use your file manager.");
        } else {
           
            const content = await Neutralino.filesystem.readFile(oldPath);
            await Neutralino.filesystem.writeFile(newPath, content);
            await Neutralino.filesystem.removeFile(oldPath);
            Neutralino.os.showNotification("Success", `'${selectedItem}' renamed to '${newName}'`);
        }
        
        selectedItem = null;
        hideContextMenu();
        document.getElementById('readdirectory').click();
    } catch(err) {
        console.error("Rename error:", err);
        Neutralino.os.showNotification("Error", "Failed to rename item: " + err.message);
    }
});


document.addEventListener('click', () => {
    hideContextMenu();
});


