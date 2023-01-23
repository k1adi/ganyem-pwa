import axios from 'axios';
import API_ENDPOINT from '../global/api-endpoint';

class RestoSource {
  static async getAllResto() {
    try {
      const response = await axios.get(API_ENDPOINT.GET_ALL_RESTO);
      return Promise.resolve(response.data);
    } catch (err) {
      throw new Error(err);
    }
  }

  static async getDetailResto(id) {
    try {
      const response = await axios.get(API_ENDPOINT.GET_DETAIL_RESTO(id));
      return Promise.resolve(response.data);
    } catch (err) {
      throw new Error(err);
    }
  }
}

export default RestoSource;
