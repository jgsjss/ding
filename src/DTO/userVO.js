export default class uservo {
  _bizAddr1;
  _bizAddr2;
  _bizNum;
  _bizZip;
  _inProcess;
  _mgEmail;
  _mgName;
  _mgPhNum;
  _phNum;
  _userDate;
  _userId;
  _userName;
  _userNum;
  _userPw;
  _userType;

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

  get bizAddr1() {
    return this._bizAddr1;
  }

  set bizAddr1(value) {
    this._bizAddr1 = value;
  }

  get bizAddr2() {
    return this._bizAddr2;
  }

  set bizAddr2(value) {
    this._bizAddr2 = value;
  }

  get bizNum() {
    return this._bizNum;
  }

  set bizNum(value) {
    this._bizNum = value;
  }

  get bizZip() {
    return this._bizZip;
  }

  set bizZip(value) {
    this._bizZip = value;
  }

  get inProcess() {
    return this._inProcess;
  }

  set inProcess(value) {
    this._inProcess = value;
  }

  get mgEmail() {
    return this._mgEmail;
  }

  set mgEmail(value) {
    this._mgEmail = value;
  }

  get mgName() {
    return this._mgName;
  }

  set mgName(value) {
    this._mgName = value;
  }

  get mgPhNum() {
    return this._mgPhNum;
  }

  set mgPhNum(value) {
    this._mgPhNum = value;
  }

  get phNum() {
    return this._phNum;
  }

  set phNum(value) {
    this._phNum = value;
  }

  get userDate() {
    return this._userDate;
  }

  set userDate(value) {
    this._userDate = value;
  }

  get userId() {
    return this._userId;
  }

  set userId(value) {
    this._userId = value;
  }

  get userName() {
    return this._userName;
  }

  set userName(value) {
    this._userName = value;
  }

  get userNum() {
    return this._userNum;
  }

  // set userNum(value) {
  //   this._userNum = null;
  // }

  get userPw() {
    return this._userPw;
  }

  set userPw(value) {
    this._userPw = value;
  }

  get userType() {
    return this._userType;
  }

  set userType(value) {
    this._userType = value;
  }

  // @Prop({ type: Object as () => userInterface, default: () => new UserDTO() })
  // public user: userDTO;
  // printDTO(user: UserDTO): UserDTO {
  //   return user;
  // }
}
