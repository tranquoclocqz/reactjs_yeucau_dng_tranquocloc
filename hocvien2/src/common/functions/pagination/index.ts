/**
 * @description This function will check that Is this current page has a single item and
 *      its page index is greater than 1. It will return true
 * @warn make sure you define action clearly
 */

export const shouldDecreasePageIndex = (
  currentPage, // page starts with 1
  totalSize,
  numberItemsOfEachPage,
) => {
  const numberItemsOfThisPage = getNumberItemsOfThisPage(
    currentPage,
    totalSize,
    numberItemsOfEachPage,
  );

  if (numberItemsOfThisPage === 1 && currentPage > 1) {
    return true;
  }
  return false;
};

export const isLastPage = (
  page,
  totalItems,
  numberItemOfEachPage,
) => {
  let quotient = totalItems / numberItemOfEachPage;
  let lastPage = parseInt(quotient.toString());
  if (quotient - lastPage > 0) lastPage += 1;

  return lastPage === page ? true : false;
};

export const getNumberItemsOfThisPage = (
  page,
  totalItems,
  numberItemOfEachPage,
) => {
  if (isLastPage(page, totalItems, numberItemOfEachPage)) {
    return totalItems - (page - 1) * numberItemOfEachPage;
  }

  return totalItems > numberItemOfEachPage ? numberItemOfEachPage : totalItems;
};
