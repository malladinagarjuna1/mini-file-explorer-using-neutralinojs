let currentPath = null;


Neutralino.init();

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
    const entries=  await Neutralino.filesystem.readDirectory(currentPath);
    console.log(entries);

}catch(err){
    console.log(error);
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

document.getElementById("currentFileBtn").addEventListener("click", async() => {
    if( !currentPath){
            console.log("Select a folder first");
            return;
    }
     try {
         const filePath = await Neutralino.os.showSaveDialog({
            defaultPath: currentPath   + "/newfile.txt"

         });
         if(!filePath) return;
         await Neutralino.filesystem.writeFile(filePath,"" );

         Neutralino.os.showNotification("Success","file created");
         loadDirectory(currentPath);


     }catch(err){
        console.log(error);
        Neutralino.os.showNotification("Error", "Failed to create file");
     }
});


