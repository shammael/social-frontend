import IUser from '@/interfaces/user.interface';

interface ILoginResponse {
  user: IUser;
  token: string;
}

export default ILoginResponse;
