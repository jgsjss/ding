import { Iperson } from '../interface/userInterface';

class User implements Iperson {
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

  constructor() {
    this._bizAddr1 = '';
    this._bizAddr2 = '';
    this._bizNum = '';
    this._bizZip = '';
    this._inProcess = '';
    this._mgEmail = '';
    this._mgName = '';
    this._mgPhNum = '';
    this._phNum = '';
    this._userDate = '';
    this._userId = '';
    this._userName = '';
    this._userNum = null;
    this._userPw = '';
    this._userType = 0;
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

  get userNum(): null {
    return this._userNum;
  }

  set userNum(value: null) {
    this._userNum = value;
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
