import {useState}from 'react';
    import "./App.css";

import React from 'react';
import ReactDOM from 'react-dom/client';




function Form(){
  const[firstName,setFirstName]=useState("")
  const[lastName,setLastName]=useState("")
  const[contactNumber,setContactNumber]=useState("")
  const[email,setEmail]=useState("")
  const[gender,setGender]=useState("")
  const[college,setCollege]=useState("")
  const[city,setCity]=useState("")
  const[rollno,setRollNo]=useState("")
  const[resume,setResume]=useState("")
  const[selectedOption,setSelectedOption]=useState([])
  const[degree,setDegree]=useState("")
  const[about,setAbout]=useState("")




  const handleSubmit = (e) => {
    alert("Submitted successfully");
    e.preventDefault();
    console.log(
        firstName,
        lastName,
        email,
        contactNumber,
        gender,
        selectedOption,
        city,
        college,
        rollno,
        resume,
        degree,
        about,
       
    );

    <form action="https://www.geeksforgeeks.org/"/>
      
   
 

  }

    const handleReset = () => {
      // Reset all state variables here
      setFirstName("");
      setLastName("");
      setEmail("");
      setContactNumber("");
      setGender("male");
      setResume("");
      setCollege("")
      setDegree("");
      setRollNo("");
      setCity("");
      setSelectedOption("");
      setAbout("");
  };

  return(
    <>

    <h1>APPLICATION FORM</h1>
    <form action="https://www.geeksforgeeks.org/">
   
      <label for="firstname">First Name*</label>
      <input type="text" name="firstname" value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder="Enter your first name"></input><br></br>
      
      <label for="lastname">Last Name*</label>
      <input type="text" name="lastname" value={lastName} onChange={(e)=>setLastName(e.target.value)} placeholder="Enter your last name"></input><br></br>
      
      <label for="contactnumber">Contact Number*</label>
      <input type="tel" name="contactnumber" value={contactNumber} onChange={(e)=>setContactNumber(e.target.value)} placeholder="Enter your mobile number"></input><br></br>

      <label for="email">Email Id*</label>
      <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email id"></input><br></br>



                    
      <label for="gender">Gender*</label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={gender === "male"}
                        onChange={(e) =>
                            setGender(e.target.value)
                        }/>Male
                 
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                       
                        checked={gender === "female"}
                        onChange={(e) =>
                            setGender(e.target.value)
                        }
                    />
                    Female
                    <input
                        type="radio"
                        name="gender"
                        value="other"
                        id="other"
                        checked={gender === "other"}
                        onChange={(e) =>
                            setGender(e.target.value)
                        }
                    />Other<br></br>
                 


      <label for="degree">Degree*</label>
      <input type="text" name="degree" value={degree} onChange={(e)=>setDegree(e.target.value)} placeholder="Enter your Degree"></input><br></br>

      <label for="college">College*</label>
      <input type="text" name="college" value={college} onChange={(e)=>setCollege(e.target.value)} placeholder="Enter your College"></input><br></br>

      <label for="rollno">Roll No.*</label>
      <input type="text" name="rollno" value={rollno} onChange={(e)=>setRollNo(e.target.value)} placeholder="Enter your Roll No."></input><br></br>

      <label for="city">City*</label>
      <input type="text" name="city" value={city} onChange={(e)=>setCity(e.target.value)} placeholder="Enter your City"></input><br></br>




      <label for="file">Upload Resume</label>
                    <input
                        type="file"
                        name="file"
                        value={resume}
                        id="file"
                        onChange={(e) =>
                            setResume(e.target.files[0])
                        }
                        placeholder=" Upload File"
                       
                    /><br></br>



<label>Select Skills</label>
                    
                    <select 
                    mode="multiple"
                    allowClear
                        name="select"
                        value={selectedOption} 
                        onChange={(e) =>
                            setSelectedOption(
                                e.target.value
                            )
                        }
                     ><br></br>
      
      <option value="" selected={selectedOption === ""} multiple  >Select your Answer.</option>


   
 
                        <optgroup label="Beginers" multiple>
                            <option value="1">HTML</option>
                            <option value="2">CSS</option>
                            <option value="3"> JavaScript </option>
                        </optgroup>
                        <optgroup label="Advance">
                            <option value="4">React</option>
                            <option value="5">Node</option>
                            <option value="6">Express</option>
                        </optgroup><br></br>
             
                      </select><br></br>      
                            

                    <label for="about">About</label><br></br>
                    <textarea
                        name="about"
                        cols="30"
                        rows="10"
                        onChange={(e) =>
                            setAbout(e.target.value)
                        }
                        placeholder="About your self"></textarea><br></br>

<button
                        type="reset"
                        value="reset"
                        onClick={() => handleReset()}
                    >
                        Reset           
                    </button>
                    <button
                        type="submit"
                        value="Submit"
                        onClick={() => handleSubmit() }
                    >
                        Submit
                    </button>
                
                </form>
            </>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Form />);

