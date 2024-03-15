import axios from "axios";
import { useNavigate } from "react-router-dom";

function Logout() {
 const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        return;
      }

      const response = await axios.post("http://localhost:3001/logout", null, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (response.status === 200) {
        localStorage.removeItem("token");
        navigate("/signin"); 
      } else {
        throw new Error(`Logout failed: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (

    <button type="button" onClick={handleLogout} className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">logout</button>

  );
}

export default Logout;
