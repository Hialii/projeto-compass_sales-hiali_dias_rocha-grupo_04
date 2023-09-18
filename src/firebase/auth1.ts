import axios, {AxiosResponse} from 'axios';

const KEY = 'AIzaSyBcRuadd7cuL0DhfW4sHFAs1h_v_lblDEs';

interface AuthResponse {
  email: string;
  kind: string;
  idToken: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

interface AuthData {
  email: string;
  password: string;
  returnSecureToken: boolean;
}

export async function authenticate(
  mode: 'signUp' | 'signInWithPassword',
  email: string,
  password: string
): Promise<string> {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${KEY}`;

  const data: AuthData = {
    email,
    password,
    returnSecureToken: true,
  };

  try {
    const response: AxiosResponse<AuthResponse> = await axios.post(url, data);
    const token = response.data.idToken;
    return token;
  } catch (error) {
    throw error;
  }
}

export async function createUser(email: string, password: string): Promise<string> {
  return authenticate('signUp', email, password);
}

export async function signInWithEmailPassword(email: string, password: string): Promise<string> {
  return authenticate('signInWithPassword', email, password);
}
