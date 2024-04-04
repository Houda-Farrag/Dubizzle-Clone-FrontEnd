import { useState } from "react"

const useGetMyAdds = () => {
    const [adds , setAdds] = useState(null)

    const getMyAdds = async ()=>{
        const token = localStorage.getItem('jwt')
        try {
            if (token){
                const addsResponse = await fetch(`http://localhost:3000/products/getmyadds`,{
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                })
                
                if (addsResponse.ok) {
                    const {myProducts} = await addsResponse.json()
                    setAdds(myProducts)
                }
            }
        } catch (error) {
            console.log("No token found")
        }
    }

  return {getMyAdds , adds}
}

export default useGetMyAdds