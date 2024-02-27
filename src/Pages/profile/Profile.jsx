
import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form,  } from "react-bootstrap";
// import { useNavigate } from 'react-router-dom';

 import "./Profile.css"
const getDays = () => {
  

  const result = [];
  for (let i = 1; i <= 31; i++) {
    result.push(i);
  }
  return result;
};
 
const getMonths = () => {
  const result = [];
  for (let i = 1; i <= 12; i++) {
    result.push(i);
  }
  return result;
};
 
const getYears = () => {
  const result = [];
  for (let i = 1970; i <= 2030; i++) {
    result.push(i);
  }
  return result;
};

const Profile = () => {
  // let navigate=useNavigate() 
  const [name, setName] = useState("");
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [gender, setGender] = useState("");
 
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
 
  const handleDayChange = (event) => {
    setDay(event.target.value);
  };
 
  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };
 
  const handleYearChange = (event) => {
    setYear(event.target.value);
  };
 
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log("Name:", name);
    console.log("Date of Birth:", `${day}-${month}-${year}`);
  };
 
  return (
    <div className=" mt-48 ">
               
    <div className=" container border-solid border-1 border-slate-400">
    <Container >
      <h3 className="text-2xl ml-20">Edit Profile</h3>
      <Form onSubmit={handleSubmit} className="mt-4 gap-x-2">
                         <div className="flex flex-row  justify-around" >
                        <div className="col-auto">
        <Form.Group controlId="formName">
          <h4>Name</h4>
          
          <input
          className=" w-96  mt-2 shadow-none outline-0   rounded-lg border-solid border-1 border-slate-400 "
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={handleNameChange}
          />
        </Form.Group >
        <Form.Group controlId="formDOB">
          <Form.Label className="mt-3">Date of Birth</Form.Label>
          <div className="flex flex-row">
            <Form.Control
              as="select"
              value={day}
              onChange={handleDayChange}
              className=""
            >
              {getDays().map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </Form.Control>
 
            <Form.Control
              as="select"
              value={month}
              onChange={handleMonthChange}
              className=" shadow-none"
            >
              {getMonths().map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </Form.Control>
 
            <Form.Control
              as="select"
              value={year}
              onChange={handleYearChange}
              className=" shadow-none"
            >
              {getYears().map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </Form.Control>
          </div>
        </Form.Group>
 
        <Form.Group controlId="formGender">
          <Form.Label className="mt-3">Gender</Form.Label>
          <Form.Control
          className="w-6/12 shadow-none"
            as="select"
            value={gender}
            onChange={handleGenderChange}
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Form.Control>
        </Form.Group>
                              
                              
        <textarea type="text" placeholder="about me (optional)" className="w-6/12 h-28 rounded-lg  border-solid border-1 border-slate-400 shadow-none outline-0 mt-10 "/>
        
        </div>
                               <div className=" justify-around col-5 w-1/4 h-1/4 mx-20  border-solid border-1 border-slate-400 shadow-none outline-0 mt-10  "><p className="text-2xl">why is it important?</p> <p >Dubizzle is built on trust. Help other people get to know you. Tell them about the things you like. Share your favorite brands, books, movies, shows, music, food. And you will see the results</p></div>
                               </div>

        <h5 className="ml-24 mb-2 mt-2">Contact Information </h5>

       <div className="">
          <div className=" flex flex-row justify-around rounded-lg   ">
                  <input placeholder='Phone Number:xxxxxxxx' type="number"  className=" ml-5 w-1/4 outline-0 rounded-md border-solid border-1 border-slate-400"/>
                 <span className=" col-auto ml-14">This is the number for buyers contacts, reminders, and other notifications.</span>
                 </div>
    
     </div>
     
     <br/>
     <div className="flex flex-row  justify-around  ">
      <input  type='email' placeholder='email' className="  mr-5 w-1/4 outline-0 rounded-md border-solid border-1 border-slate-400"  />
<span  className=" ">We won't reveal your email to anyone else nor use it to send you spam</span>
        
        </div>
        <div className=" flex flex-row justify-around">
      
          <button  className="mt-3"  >Discard</button>
        <button className="mt-5 bg-red-600 rounded-lg mb-3  hover:bg-red-700 h-10 w-32 text-white" type="submit">
                  save change
        </button>
        </div>
      </Form>
    </Container>
    </div>
    </div>
  );
};

export default Profile;
