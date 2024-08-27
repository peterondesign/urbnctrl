import { SlOptionsVertical } from "react-icons/sl";
import onMenuToggle from "../components/AdminActions"


const AdminButton = ({onMenuToggle}) => {
  return (
    <button onClick={onMenuToggle}>
        <SlOptionsVertical/>
    </button>
  )
}

export default AdminButton