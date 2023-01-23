const createLikeButton = () => `
  <button class="like-button" aria-label="Like this resto">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButton = () => `
  <button class="like-button" aria-label="Unlike this resto">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export { createLikeButton, createLikedButton };
