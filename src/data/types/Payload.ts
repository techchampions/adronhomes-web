export interface RealEstatePayload {
  marketID: string;
  contract_business_type: string;

  contract_subscriber_name_1: string;
  contract_subscriber_name_2: string;
  contract_subscriber_name_3: string;
  contract_additional_name?: string;

  contract_marital_status: string;
  contract_gender: string;
  contract_date_of_birth: string; // YYYY-MM-DD
  contract_nationality: string;

  contract_residential_address: string;
  contract_town: string;
  contract_state: string;
  contract_country: string;

  contract_email: string;
  contract_sms: string; // phone with country code

  contract_employer_address: string;
  contract_occupation: string;
  contract_employer_phone: string;
  contract_employer: string;

  contract_next_of_kin_phone: string;
  contract_next_of_kin_name: string;
  contract_next_of_kin_relationship: string;

  contract_profile_picture: File | null;
  contract_profile_picture2: File | null;
  contract_id_files: File[] | null;

  land_size: string; // e.g., "600 sqm"

  payment_duration: string; // e.g., "12 months"
  payment_schedule: string; // e.g., "Monthly"
  payable_amount: number;
  payment_method: string; // e.g., "interswitch"
  payment_type: number; // e.g., 1
  paid_amount: number;

  start_date: string; // YYYY-MM-DD
  end_date: string; // YYYY-MM-DD

  property_purpose: string; // e.g., "Residential"
  longitude: number;
  latitude: number;
  property_id: string;
  reference: string;
  number_of_unit: number;
}
