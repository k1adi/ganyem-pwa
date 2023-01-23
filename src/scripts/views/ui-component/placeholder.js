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
  let placeholderDesc = '';
  let placeholderSection = '';

  // eslint-disable-next-line no-plusplus
  for (let maxDesc = 0; maxDesc < 8; maxDesc++) {
    placeholderDesc += `
      <span>
        <div class="placeholder">
          <div class="animation"></div>
        </div>
      </span>
    `;
  }

  // eslint-disable-next-line no-plusplus
  for (let maxSection = 0; maxSection < 3; maxSection++) {
    placeholderSection += `
      <div class="detail-card__placeholder--section">
        <div class="placeholder">
          <div class="animation"></div>
        </div>
      </div>
    `;
  }

  return `
  <div class="detail-wrapper__info">
    <div class="detail-card">
      <div class="detail-card__image">
        <div class="placeholder">
          <div class="animation"></div>
        </div>
      </div>

      <div class="detail-card__placeholder--name">
        <div class="placeholder">
          <div class="animation"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="detail-wrapper__desc">
    <div class="detail-card__placeholder--desc">
      ${placeholderDesc}
    </div>
    
    ${placeholderSection}
  </div>
  `;
};

const removeCurrentPlaceholder = (parentElement) => {
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
};

export { createRestoPlaceholder, createRestoDetailPlaceholder, removeCurrentPlaceholder };
