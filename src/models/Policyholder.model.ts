export interface PolicyholderData {
  code: string;
  name: string;
  registration_date: string;
  introducer_code: string;
}
export interface PolicyholdersResult {
  code: string;
  name: string;
  registration_date: string;
  introducer_code: string;
  l: PolicyholderData[];
  r: PolicyholderData[];
}
