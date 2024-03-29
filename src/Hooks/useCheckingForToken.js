import { useEffect, useState } from "react"

const useCheckingForToken = () => {
    const [profile , setProfile] = useState(null)
    const getMyProfileFromToken = async (token) =>{
        if (!token) {
            setProfile(null)
        }
        try {
            const userResponse = await fetch(`http://localhost:3000/users/getMyProfile`,{
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
        })
        
        if (userResponse.ok) {
            const {profile} = await userResponse.json()
            setProfile(profile)
        }
        } catch (error) {
            console.log("No token found")
        }
    }
    
  return {getMyProfileFromToken , profile}
}

export default useCheckingForToken