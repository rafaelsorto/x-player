import axios from 'axios'

interface LoginRequestProps {
  password: string
  server: string
  username: string
}

type LoginResponse = SuccessLoginResponse & FailureLoginResponse

interface SuccessLoginResponse {
  user_info: any
  server_info: any
}

interface FailureLoginResponse {
  error: boolean
  errors: string[]
  message: string
}

export const auth = {
  async login({
    password,
    server,
    username,
  }: LoginRequestProps): Promise<LoginResponse> {
    try {
      const { data } = await axios.post('/api/auth/login', {
        password,
        server,
        username,
      })

      return data
    } catch (error) {
      return error
    }
  },
}
