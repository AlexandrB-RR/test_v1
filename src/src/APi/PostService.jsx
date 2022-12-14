// import axios from "axios";
import axiosConfig from '../APi/axiosConfig';

export default class PostService {
  static async getAll(status) {
    const response = await axiosConfig.get(
      "/v2/pet/findByStatus"
      , {
        params: {
          status: status,
        }
      });
    return response;
  }

  static async getOneById(id) {
    const response = await axiosConfig.get(
      "/v2/pet/" + id);
    return response;
  }

  static async createPost(onePost) {
    const response = await axiosConfig.post(
      '/v2/pet'
      , {
        "id": onePost.id,
        "category": {
          "id": 0,
          "name": onePost.categoryName
        },
        "name": onePost.petName,
        "photoUrls": [
          onePost.photoUrls
        ],
        "tags": [
          {
            "id": 0,
            "name": "string"
          }
        ],
        "status": onePost.status
      });
    return response;
  }
}
