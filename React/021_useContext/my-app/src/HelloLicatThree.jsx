import { useContext } from "react"; 
import { Darkmode } from "./Context/darkMode";
import HelloLicatFour from "./HelloLicatThree"

const HelloLicatThree = () => {
    const { mode } = useContext(Darkmode);
    return(
        <div>
            <h2>{mode + ""}</h2>
            <HelloLicatFour />
        </div>
    )
}

export default HelloLicatThree;