const createRestoPlaceholder = () => {
  let restoCardItem = '';
  // eslint-disable-next-line no-plusplus
  for (let maxCard = 0; maxCard < 6; maxCard++) {
    restoCardItem += `
      <div>
        ${maxCard + 1}
      </div>
    `;
  }

  return restoCardItem;
};

const createRestoDetailPlaceholder = () => {

};

const removeCurrentPlaceholder = (parentElement) => {
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
};

export { createRestoPlaceholder, createRestoDetailPlaceholder, removeCurrentPlaceholder };
