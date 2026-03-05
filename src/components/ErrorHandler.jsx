// // verbatim from last project (needs re-factored/types removed)
// import {useContext} from 'react';
// import { ResponseContext } from '../context/AppProvider';



// export default function ErrorHandler () {
//     const {error} = useContext(ResponseContext);
// if (error !== "") {
//     console.log("____________________________________________________");
//     console.log("_______________________ERROR________________________");
//       console.error(`[ERROR]: ${error}`);
//       alert(`[ERROR]: ${error}`);
//     }
// return (
//     error? <span>{error}</span> :
//         <></>
// )
// };