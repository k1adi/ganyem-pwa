const createRestoPlaceholder = () => {
  let restoCardItem = '';
  // eslint-disable-next-line no-plusplus
  for (let maxCard = 0; maxCard < 6; maxCard++) {
    restoCardItem += `
      <div class="card--resto">
        <div class="card--resto__image">
          <div class="placeholder">
            <div class="animation"></div>
          </div>
        </div>
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
