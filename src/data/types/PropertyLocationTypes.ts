export interface PropertyLocation {
  id: number;
  state_name: string;
  total_property: number;
  estate_total_property: number;
  house_total_property: number;
}
export interface PropertyLocationResponse {
  status: string;
  locations: PropertyLocation[];
}
