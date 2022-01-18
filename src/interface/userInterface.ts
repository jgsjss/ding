import userDTO from '../DTO/userDTO';

export interface userInterface {
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

  printDTO(user: userDTO): userDTO;

  // const signUp = (user: Iperson): Promise<Iperson> => {
  //   return new Promise((resolve, reject) => {
  //     axios
  //       .post("/api/user/signUp", user)
  //       .then((res) => {
  //         resolve(res.data);
  //       })
  //       .catch((err) => {
  //         reject(err);
  //       });
  //   });
  // };
}
