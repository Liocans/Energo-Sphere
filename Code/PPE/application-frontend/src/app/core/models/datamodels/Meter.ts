import { EnergyType } from "./EnergyType";

export class Meter{

    id?: string;

    value?: number;

    energyType?: EnergyType;

    meterHistory?: number[];

    numeric?: boolean;

    open?: boolean;
    
    fullName: string;
}