export interface Iperson {
  userNum: null;
  userId: string;
  userPw: string;
  userName: string;
  bizNum: string;
  phNum: string;
  bizAddr1: string;
  bizAddr2: string;
  bizZip: string;
  mgName: string;
  mgPhNum: string;
  mgEmail: string;
  userDate: string;
  inProcess: string;
  userType: number;

  // user DTO getter sett
  getUserNum(): null;
  setUserNum(userNum: null): void;
  getUserId(): string;
  setUserId(userId: string): void;
  getUserPw(): string;
  setUserPw(userPw: string): void;
  getUserName(): string;
  setUserName(userName: string): void;
  getBizNum(): string;
  setBizNum(bizNum: string): void;
  getPhNum(): string;
  setPhNum(phNum: string): void;
  getBizAddr1(): string;
  setBizAddr1(bizAddr1: string): void;
  getBizAddr2(): string;
  setBizAddr2(bizAddr2: string): void;
  getBizZip(): string;
  setBizZip(bizZip: string): void;
  getMgName(): string;
  setMgName(mgName: string): void;
  getMgPhNum(): string;
  setMgPhNum(mgPhNum: string): void;
  getMgEmail(): string;
  setMgEmail(mgEmail: string): void;
  getUserDate(): string;
  setUserDate(userDate: string): void;
  getInProcess(): string;
  setInProcess(inProcess: string): void;
  getUserType(): number;
  setUserType(userType: number): void;

  const signUp = (user: Iperson): Promise<Iperson> => {
    return new Promise((resolve, reject) => {
      axios
        .post("/api/user/signUp", user)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };
}
