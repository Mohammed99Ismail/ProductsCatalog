import { Iproduct } from "./Iproduct";

export class product implements Iproduct{
    id?: number;
    name: string;
    photo: string;
    price: number;
    lastUpdate: Date;

}