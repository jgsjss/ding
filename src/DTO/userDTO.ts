import { Iperson } from '../interface/userInterface';

export class UserDTO implements Iperson {
  private _bizAddr1: string;
  private _bizAddr2: string;
  private _bizNum: string;
  private _bizZip: string;
  private _inProcess: string;
  private _mgEmail: string;
  private _mgName: string;
  private _mgPhNum: string;
  private _phNum: string;
  private _userDate: string;
  private _userId: string;
  private _userName: string;
  private _userNum: null;
  private _userPw: string;
  private _userType: number;

  constructor(
    bizAddr1: string,
    bizAddr2: string,
    bizNum: string,
    bizZip: string,
    inProcess: string,
    mgEmail: string,
    mgName: string,
    mgPhNum: string,
    phNum: string,
    userDate: string,
    userId: string,
    userName: string,
    userPw: string,
    userType: number
  ) {
    this._bizAddr1 = bizAddr1;
    this._bizAddr2 = bizAddr2;
    this._bizNum = bizNum;
    this._bizZip = bizZip;
    this._inProcess = inProcess;
    this._mgEmail = mgEmail;
    this._mgName = mgName;
    this._mgPhNum = mgPhNum;
    this._phNum = phNum;
    this._userDate = userDate;
    this._userId = userId;
    this._userName = userName;
    this._userPw = userPw;
    this._userType = userType;
  }

  get bizAddr1(): string {
    return this._bizAddr1;
  }

  set bizAddr1(value: string) {
    this._bizAddr1 = value;
  }

  get bizAddr2(): string {
    return this._bizAddr2;
  }

  set bizAddr2(value: string) {
    this._bizAddr2 = value;
  }

  get bizNum(): string {
    return this._bizNum;
  }

  set bizNum(value: string) {
    this._bizNum = value;
  }

  get bizZip(): string {
    return this._bizZip;
  }

  set bizZip(value: string) {
    this._bizZip = value;
  }

  get inProcess(): string {
    return this._inProcess;
  }

  set inProcess(value: string) {
    this._inProcess = value;
  }

  get mgEmail(): string {
    return this._mgEmail;
  }

  set mgEmail(value: string) {
    this._mgEmail = value;
  }

  get mgName(): string {
    return this._mgName;
  }

  set mgName(value: string) {
    this._mgName = value;
  }

  get mgPhNum(): string {
    return this._mgPhNum;
  }

  set mgPhNum(value: string) {
    this._mgPhNum = value;
  }

  get phNum(): string {
    return this._phNum;
  }

  set phNum(value: string) {
    this._phNum = value;
  }

  get userDate(): string {
    return this._userDate;
  }

  set userDate(value: string) {
    this._userDate = value;
  }

  get userId(): string {
    return this._userId;
  }

  set userId(value: string) {
    this._userId = value;
  }

  get userName(): string {
    return this._userName;
  }

  set userName(value: string) {
    this._userName = value;
  }

  get userPw(): string {
    return this._userPw;
  }

  set userPw(value: string) {
    this._userPw = value;
  }

  get userType(): number {
    return this._userType;
  }

  set userType(value: number) {
    this._userType = value;
  }
}

exports.default = UserDTO;
