export enum DataType {
    INDEPENDENT_LIVING = 'IndependentLiving',
    SUPPORT_AVAILABLE = 'SupportAvailable',
}

export interface Data {
    address: string;
    id: string;
    price: number;
    title: string;
    type: DataType;
}
