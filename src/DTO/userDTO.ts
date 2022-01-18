<<<<<<< Updated upstream
import { userInterface } from '../interface/userInterface';

export default class UserDTO implements userInterface {
  public _bizAddr1: string;
  public _bizAddr2: string;
  public _bizNum: string;
  public _bizZip: string;
  public _inProcess: string;
  public _mgEmail: string;
  public _mgName: string;
  public _mgPhNum: string;
  public _phNum: string;
  public _userDate: string;
  public _userId: string;
  public _userName: string;
  public _userNum: null;
  public _userPw: string;
  public _userType: number;
=======
import { Iperson } from '../interface/userInterface';

export class UserDTO implements Iperson {
  //매장주소
  private _bizAddr1: string;
  //매장 상세주소
  private _bizAddr2: string;
  //사업자번호
  private _bizNum: string;
  //사업자등록증
  private _bizZip: string;
  //가입 심사중 통과여부
  private _inProcess: string;
  //관리자 메일주소
  private _mgEmail: string;
  //관리자 이름
  private _mgName: string;
  //관리자 번호
  private _mgPhNum: string;
  //매장 대표번호
  private _phNum: string;
  //회원가입 날짜
  private _userDate: string;
  //회원 아이디
  private _userId: string;
  //대표자 이름
  private _userName: string;
  //회원 번호(DB 인덱스값)
  private _userNum: null;
  //대표자 비밀번호
  private _userPw: string;
  // ?
  private _userType: number;
>>>>>>> Stashed changes

  constructor(
    userNum: null,
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

  get userNum(): null {
    return this._userNum;
  }

  set userNum(value: null) {
    this._userNum = null;
  }

  printDTO(user: UserDTO): UserDTO {
    return user;
  }
}
