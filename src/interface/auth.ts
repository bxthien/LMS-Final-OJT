export interface User {
  id: string;
  username: string;
  email: string;
  fullName: string;
  address: string;
  phoneNumber: number;
  url: string;
  description: string;
  avatar: string;
}

export interface UserProfile {
  username: string;
  email: string;
}
