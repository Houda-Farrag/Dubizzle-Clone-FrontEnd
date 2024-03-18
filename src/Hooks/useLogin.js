import { useState } from "react";

const useLogin = () => {
  const [token, setToken] = useState(null);

  async function login(email) {
    console.log(email)
    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        body: JSON.stringify({ email }), 
      });

      const { accessToken } = await response.json();
      setToken(accessToken);
      
      localStorage.setItem('jwt', accessToken);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  }
  return { login, token , setToken };
};

export default useLogin;
