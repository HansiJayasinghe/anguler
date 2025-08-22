
// import { stringDistance } from 'codelyzer/util/utils';

export class LoginDetails {
  [x: string]: any;
  constructor(
    public userName: string,
    public userId: number,
    public password: string,
    public userRoleCode: string,
    public divisionName: string,
    public isResetPw: number,
    public oldPassword: string,
    public divisionID: number,
    public mainFolderID: number,
    public defaultRoleId: number,
    public defaultRole: string,
    public fullName: string,
    public activeStatus: number,
    public userRoles: string,
    public permanentActiveStatus: number,
) {}
  public ip: String = "";
  public ishr!:boolean;
}