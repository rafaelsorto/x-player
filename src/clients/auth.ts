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
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/login`,
        {
          password,
          server,
          username,
        }
      )

      return data
    } catch (error) {
      return error
    }
  },
}
