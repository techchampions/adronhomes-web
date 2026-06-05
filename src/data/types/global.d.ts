interface UnpaginatedApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}
interface BusinessType {
  pCode: string;
  pName: string;
}
