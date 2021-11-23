import { Vaccine } from './vaccine.model';

export interface Employee {
  id: number;
  first_name: string;
  last_name: string;
  dni?: number;
  email?: string;
  born_date?: string;
  address?: string;
  phone_number?: number;
  estado: string;
  vaccine?: Vaccine[];
}
