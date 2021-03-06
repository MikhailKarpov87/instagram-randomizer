import { profilePicMatchTexts } from "./constants";

//  Calculating remove animations speed based on number of items
export const calculateRemovingSpeed = itemsNum => {
  if (itemsNum < 10) return 700;
  if (itemsNum >= 10 && itemsNum < 30) return 400;
  if (itemsNum >= 30 && itemsNum < 100) return 250;
  if (itemsNum >= 100) return 100;
};

// Gettings profile image URL from instagram web page with DOMParser
export const getProfileImageURL = page => {
  const doc = new DOMParser().parseFromString(page, "text/html");
  const img = doc.querySelector("meta[property='og:image']").content;
  return img ? img : false;
};

//  Function for filtering input
export const filterInput = input => {
  const lines = input.split("\n");
  let filteredInput = [];
  let resultInput;
  //  Searching for element with profile name
  if (profilePicMatchTexts.some(value => input.includes(value))) {
    for (let id in lines) {
      //  Check for first row - in case if profilepic element was not selected
      if (
        id < 2 &&
        profilePicMatchTexts.some(value => lines[id].includes(value)) &&
        lines[id - 2]
      ) {
        filteredInput.push(lines[id - 2]);
      }

      //  If current element is profilepic and next element is existing -
      //  this means it's a profile pic element. Adding it to results
      profilePicMatchTexts.some(value => lines[id].includes(value)) &&
        lines[id++] &&
        !!lines[id] &&
        filteredInput.push(lines[id]);
    }

    resultInput = filteredInput.join("\n");
  } else {
    resultInput = input;
  }
  return resultInput;
};

//  Timeout function
export const timeout = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};
