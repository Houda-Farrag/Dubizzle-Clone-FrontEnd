import toast from "react-hot-toast";
import getMyAdds from "./useGetMyAdds"

const useDeleteProduct = () => {
    const deleteProduct = async (prodId) => {
        const token = localStorage.getItem('jwt')
        try {
            if (token){
                const deleteResponse = await fetch(`http://localhost:3000/products/delete/${prodId}`,{
                    method: 'DELETE',
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                })
                
                if (deleteResponse.ok) {
                    toast.success("Product Deleted Successfully");
                    getMyAdds()
                }
            }
        } catch (error) {
            console.log("No token found")
        }
    }
  return {deleteProduct}
}

export default useDeleteProduct