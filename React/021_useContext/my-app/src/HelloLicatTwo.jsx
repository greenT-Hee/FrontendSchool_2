import { useContext } from "react"; 
import { UserInfo } from "./Context/userInfo";


const HelloLicatFour = () => {
    const { name, id } = useContext(UserInfo);
    return(
        <div>
            <h2>{name}</h2>
            <strong>{id}</strong>
        </div>
    )
}

export default HelloLicatFour;