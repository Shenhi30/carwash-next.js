import axios from "axios";
import { CarType, ServicePrice } from "@/types/types";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const api = {
    getCarTypes: async (): Promise<CarType[]> => {
        const { data } = await apiClient.get('/car-types')
        return data;
    },

    getPricesByCar: async (carTypeId: number): Promise<ServicePrice[]> => {
        const { data } = await apiClient.get(`/price/by-car?cId=${carTypeId}`)
        return data;
    }
}