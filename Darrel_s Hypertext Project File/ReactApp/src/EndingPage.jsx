import { useParams } from "react-router-dom";

function EndingPage({endings}){
    let {ending} = useParams()
 return(
    <>
        {ending}
    </>
    
 )
 
}
export default EndingPage;