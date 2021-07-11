import axios, { AxiosResponse } from 'axios';
import { IProduct } from '../models/product';
import { ISector } from '../models/sector';

axios.defaults.baseURL="http://localhost:5000/api";

const responseBody = (response: AxiosResponse)=>response.data;

const requests = {
    get: (url : string) => axios.get(url).then(responseBody),
    post: (url : string , body: {}) => axios.post(url, body).then(responseBody),
    put:(url: string, body: {}) => axios.put(url, body).then(responseBody),
    del:(url: string) => axios.delete(url).then(responseBody)
}
const Products = {
    productList: () : Promise<IProduct[]> => requests.get('/product'),
    productDetails :(productId: string) => requests.get(`/product/${productId}`),
    productCreate : (product: IProduct) => requests.post('/product',product),
    editProduct:(product: IProduct) => requests.put(`/product/${product.productId}`,product),
    deleteProduct: (productId: string) => requests.del(`/product/${productId}`)
}
const Sectors = {
    sectorList: () : Promise<ISector[]> => requests.get('/sector'),
    sectorDetails :(sectorId: string) => requests.get(`/sector/${sectorId}`),
    sectorCreate : (sector: ISector) => requests.post('/sector',sector),
    editSector:(sector: ISector) => requests.put(`/sector/${sector.sectorId}`,sector),
    deleteSector: (sectorId: string) => requests.del(`/sector/${sectorId}`)
}

export default {
    Products,
    Sectors
}


