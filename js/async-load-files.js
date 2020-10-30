"use strict";

function loadFile(file) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (file === 5) reject("file is 5");
      resolve(file + 1);
      console.log(file);
    }, 300);
  });
}

async function handleLoadFileWithTimeOut(callback, file, time) {
  setTimeout(async () => {
    return await callback(file);
  }, time);
}

async function loadFiles(files) {
  let loadedFiles = [];

  // for (const file of files) {
  //   const time = 1000
  //   try {
  //     const loadedFile = await loadFile(file)
  //     loadedFiles.push(loadedFile)
  //   } catch (e) {
  //     const loadedFile = await handleLoadFileWithTimeOut(loadFile, file, time * 2)
  //     loadedFiles.push(loadedFile)
  //   }
  //
  //   // const loadedFile = await loadFile(file)
  //   // loadedFiles.push(loadedFile)
  // }

  // for(let i = 0; i < files.length; i++) {
  //   const file = await loadFile(files[i])
  //   loadedFiles.push(file)
  // }

  files.forEach((file) => {
    loadedFiles.push(loadFile(file));
  });
  return Promise.allSettled(loadedFiles);

  // return loadedFiles
}

const files = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

loadFiles(files)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
