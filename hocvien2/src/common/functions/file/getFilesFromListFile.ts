// because React don't export this type. so this is alternative measure

export const getFilesFromFileList = (fileList) => {
  const files = [];
  for (let i = 0; i < fileList.length; i++) {
    files.push(fileList[i]);
  }
  return files;
};
