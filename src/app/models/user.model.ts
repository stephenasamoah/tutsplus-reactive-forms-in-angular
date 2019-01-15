export class UserModel {
  id: number;
  company_type: string;
  email: string;
  password: {
    pwd: string;
    confirmPwd: string;
  };
  conditions: boolean;

  constructor(values: Object = {}) {
    // Initialize constructor
  }
}
