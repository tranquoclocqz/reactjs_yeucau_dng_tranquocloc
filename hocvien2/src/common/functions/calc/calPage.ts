export const calPage = (curPage, curSize, newSize) => {
  if (newSize > curSize) {
    return Math.ceil((curPage * curSize) / newSize);
  }
  const difPage = Math.ceil(newSize / curSize) - 1; //will render first page of new size compare to current size
  return Math.ceil((curSize * curPage) / newSize) - difPage;
};
