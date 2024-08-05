/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { Method } from 'axios'

export class ApiService {
  constructor(private endPoint: string) {}

  public async get(url: string, params?: any) {
    return this.request('GET', url, params)
  }

  public async post(url: string, body: any) {
    return this.request('POST', url, body)
  }

  public async put(url: string, body: any) {
    return this.request('PUT', url, body)
  }

  public async patch(url: string, body: any) {
    return this.request('PATCH', url, body)
  }

  public async delete(url: string, params?: any) {
    return this.request('DELETE', url, params)
  }

  private async request(method: Method, url: string, data: any) {
    try {
      const response = await axios.request({
        baseURL: this.endPoint,
        url,
        data,
        method,
        withCredentials: true,
        headers: {
          "Content-Type": data instanceof FormData ? "multipart/form-data" : "application/json",
        },
      });
      return response.data; // Retorna apenas os dados da resposta
    } catch (error: any) {
      throw error.response ? error.response.data : error; // Lança o erro da resposta, se houver, ou o erro original
    }
  }
}

const API_ENDPOINT = 'http://15.228.14.29:3000'
//const API_ENDPOINT = 'https://oxossi-back-36b128c9078e.herokuapp.com/';
const apiService = new ApiService(API_ENDPOINT);

export default apiService;
