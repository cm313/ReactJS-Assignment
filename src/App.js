import Body from "./components/Body";
import userContext from "./utils/userContext.js";
import {useState} from "react";

function App() {
  const[firstName, setFirstName] = useState("");
  const[lastName, setLastName] = useState("");
  const[emailId, setEmailId] = useState("");
  const[number, setNumber] = useState("");
  const[universityName, setUniversityName]= useState("");
  const[degree,setDegree] = useState("");
  const[specialization,setSpecialization] = useState("");
  const[fromDate,setFromDate] = useState("");
  const[toDate,setToDate] = useState("");
  const[address,setAddress] = useState("");
  const[city,setCity] = useState("");
  const[state,setState] = useState("");
  const[pincode,setPincode] = useState("");
  return (
    <userContext.Provider value={
      {firstname:firstName,
        lastname:lastName,
        emailid: emailId,
        mobilenumber:number,
        universityname: universityName,
        degree: degree,
        specialization:specialization,
        fromdate:fromDate,
        todate: toDate,
        address:address,
        city:city,
        state:state,
        pincode: pincode,
        setFirstName,
        setLastName,
        setEmailId,
        setNumber,
        setUniversityName,
        setDegree,
        setSpecialization,
        setFromDate,
        setToDate,
        setAddress,
        setCity,
        setState,
        setPincode 
      }}>
    <div className="App">
      <Body />
    </div>
    </userContext.Provider>

  );
}
export default App;
