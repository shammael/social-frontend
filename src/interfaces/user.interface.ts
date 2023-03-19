interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  picturePath: string;
  friends: string[];
  location: string;
  occupation: string;
  viewedProfile: number;
  impressions: number;
  online?: boolean;
  id?: string;
}

export default IUser;
