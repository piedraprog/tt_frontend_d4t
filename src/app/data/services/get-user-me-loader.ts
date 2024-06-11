import { error } from "console";
import { getAuthToken } from "./get-tokens";
// import { getStrapiURL } from "@/lib/utils";


export async function getUserMeLoader() {
  // const baseUrl = getStrapiURL();

  // const url = new URL("/api/users/me", baseUrl);
  // url.search = query;

  const authToken = await getAuthToken();
  if (!authToken) return { ok: false, data: null, error: null };

  try {
    
    const data = {
      ok: true,
      error: null,
      data: {
        "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
        "user": {
          "id": 1,
          "username": "john_doe",
          "email": "john.doe@example.com",
          "created_at": "2024-06-11T12:34:56.789Z",
          "updated_at": "2024-06-11T12:34:56.789Z"
        }
      }
    };
    
    if (data.error) return { ok: false, data: null, error: data.error };
    
    return { ok: true, data: data, error: null };
  } catch (error) {
    console.log(error);
    return { ok: false, data: null, error: error };
  }
}