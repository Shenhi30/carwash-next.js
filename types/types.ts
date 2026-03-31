export interface CarType{
    id: number;
    name: string;
}

export interface ServicePrice{
    service_id: number;
    service_name: string;
    description: string | null;
    price: string;
    is_starting_price: number; // 1 = true, 0 false
}
