import CONFIG from './config';

const API_ENDPOINT = {
  GET_ALL_RESTO: `${CONFIG.API_BASE_URL}/list`,
  GET_IMG_RESTO: (size) => `${CONFIG.API_BASE_URL}/images/${size}`,
  GET_DETAIL_RESTO: (id) => `${CONFIG.API_BASE_URL}/detail/${id}`,
  POST_REVIEW: `${CONFIG.API_BASE_URL}/review`,
};

export default API_ENDPOINT;
