/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { Method } from 'axios';

export class ApiService {
  constructor(private endPoint: string) {}

  public async get(url: string, params?: any) {
    return this.request('GET', url, params);
  }

  public async post(url: string, body: any) {
    return this.request('POST', url, body);
  }

  public async put(url: string, body: any) {
    return this.request('PUT', url, body);
  }

  public async patch(url: string, body: any) {
    return this.request('PATCH', url, body);
  }

  public async delete(url: string, params?: any) {
    return this.request('DELETE', url, params);
  }

  private async request(method: Method, url: string, data: any) {
    try {
      const response = await axios.request({
        baseURL: this.endPoint,
        url,
        method,
        data,
        params: method === 'GET' ? data : undefined, // Passa dados como parâmetros apenas para GET
        withCredentials: true,
        headers: {
          "Content-Type": data instanceof FormData ? "multipart/form-data" : "application/json",
        },
      });
      return response.data; // Retorna apenas os dados da resposta
    } catch (error: any) {
      if (error.response) {
        // Lança o erro da resposta com o status e a mensagem
        throw {
          status: error.response.status,
          message: error.response.data.message || 'Erro desconhecido',
        };
      } else {
        // Lança o erro original para erros de rede
        throw { message: error.message || 'Erro desconhecido' };
      }
    }
  }
}

// Defina o endpoint da API
const API_ENDPOINT = 'https://ec2-15-228-255-140.sa-east-1.compute.amazonaws.com:447';
const apiService = new ApiService(API_ENDPOINT);

export default apiService;
