// import { getStrapiURL } from "@/lib/utils";

interface RegisterUserProps {
  username: string;
  password: string;
  email: string;
}

interface LoginUserProps {
  identifier: string;
  password: string;
}

const baseUrl = ""
const cookieResponse = {
  "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "username": "john_doe",
    "email": "john.doe@example.com",
    "created_at": "2024-06-11T12:34:56.789Z",
    "updated_at": "2024-06-11T12:34:56.789Z"
  }
}

export async function registerUserService(userData: RegisterUserProps) {
  // const url = new URL("/api/auth/local/register", baseUrl);

  try {
    // const response = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ ...userData }),
    //   cache: "no-cache",
    // });

    return cookieResponse;
  } catch (error) {
    console.error("Registration Service Error:", error);
  }
}

export async function loginUserService(userData: LoginUserProps) {
  // const url = new URL("/api/auth/local", baseUrl);

  try {
    // const response = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ ...userData }),
    //   cache: "no-cache",
    // });

    return cookieResponse;
  } catch (error) {
    console.error("Login Service Error:", error);
    throw error;
  }
}