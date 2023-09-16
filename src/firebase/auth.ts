import axios from 'axios';

const KEY = 'AIzaSyBcRuadd7cuL0DhfW4sHFAs1h_v_lblDEs';

interface CreateUserResponse {
  email: string;
  kind: string;
  idToken: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered: boolean;
}

interface CreateUserParams {
  email: string;
  password: string;
  returnSecureToken: boolean;
}

export async function createUser(
  email: string,
  password: string
): Promise<CreateUserResponse> {
  const params: CreateUserParams = {
    email: email,
    password: password,
    returnSecureToken: true,
  };

  try {
    const response = await axios.post<CreateUserResponse>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + KEY,
      params
    );

    return response.data;
  } catch (error) {
    throw error; 
  }
}
