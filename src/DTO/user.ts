import { Iperson } from '../interface/userInterface';

class User implements Iperson {
  bizAddr1: string;
  bizAddr2: string;
  bizNum: string;
  bizZip: string;
  inProcess: string;
  mgEmail: string;
  mgName: string;
  mgPhNum: string;
  phNum: string;
  userDate: string;
  userId: string;
  userName: string;
  userNum: null;
  userPw: string;
  userType: number;

  constructor() {
    this.bizAddr1 = '';
    this.bizAddr2 = '';
    this.bizNum = '';
    this.bizZip = '';
    this.inProcess = '';
    this.mgEmail = '';
    this.mgName = '';
    this.mgPhNum = '';
    this.phNum = '';
    this.userDate = '';
    this.userId = '';
    this.userName = '';
    this.userNum = null;
    this.userPw = '';
    this.userType = 0;
  }

  getBizAddr1(): string {
    return '';
  }

  getBizAddr2(): string {
    return '';
  }

  getBizNum(): string {
    return '';
  }

  getBizZip(): string {
    return '';
  }

  getInProcess(): string {
    return '';
  }

  getMgEmail(): string {
    return '';
  }

  getMgName(): string {
    return '';
  }

  getMgPhNum(): string {
    return '';
  }

  getPhNum(): string {
    return '';
  }

  getUserDate(): string {
    return '';
  }

  getUserId(): string {
    return '';
  }

  getUserName(): string {
    return '';
  }

  getUserNum(): null {
    return null;
  }

  getUserPw(): string {
    return '';
  }

  getUserType(): number {
    return 0;
  }

  setBizAddr1(bizAddr1: string): void {}

  setBizAddr2(bizAddr2: string): void {}

  setBizNum(bizNum: string): void {}

  setBizZip(bizZip: string): void {}

  setInProcess(inProcess: string): void {}

  setMgEmail(mgEmail: string): void {}

  setMgName(mgName: string): void {}

  setMgPhNum(mgPhNum: string): void {}

  setPhNum(phNum: string): void {}

  setUserDate(userDate: string): void {}

  setUserId(userId: string): void {}

  setUserName(userName: string): void {}

  setUserNum(userNum: null): void {}

  setUserPw(userPw: string): void {}

  setUserType(userType: number): void {}
}
