export interface PolicyholderData {
  code: string;
  name: string;
  registration_date: Date;
  introducer_code: string;
}
export interface PolicyholdersResult {
  code: string;
  name: string;
  registration_date: Date;
  introducer_code: string;
  l: PolicyholderData[];
  r: PolicyholderData[];
}
