import IUser from '@/interfaces/user.interface';
import { AxiosError } from 'axios';
import axios from '../axios';
import ILoginResponse from '../responses/login.interface';

AbortController

const loginService = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}, {opts: {controller: AbortController}) => {
  let error: (Error & { code?: string; cause?: unknown }) | null = null;
  let responseData: { user: IUser; token: string } | null = null;
  

  return { responseData, error, controller };
};

export default loginService;
