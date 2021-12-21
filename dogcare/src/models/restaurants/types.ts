export interface Restaurant {
  id: number;
  name: string;
  type: string;
  phone: string;
  schedule: string;
  address: Address;
}

export interface Address {
  id: number;
  state: string;
  city: string;
  pc: number;
  longitude: string;
  latitude: string;
  street: string;
  ext_number: number | null;
  int_number: number | null;
  restaurants: string[];
}
