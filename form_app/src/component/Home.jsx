import React from 'react'
import { useState } from 'react';
import axios from "axios";
import './Home.css';

const Home = () => {

  const [name, setName] = useState("");
   const [date, setDate] = useState( new Date());
  const [sex, setSex] = useState("");
  const [mobile, setMobile] = useState("");
  const [govid, setGovID] = useState("");
  const [goverid, setGovIDR] = useState("");
  const [label, setLabel] = useState("");
  const [gname, setGname] = useState("");
  const [email, setEmail] = useState("");
  const [ceumber, setCEumber] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");
  const [occupation, setOccupation] = useState("");
  const [religion, setReligion] = useState("");
  const [marride, setMarried] = useState("");
  const [bgrop, setBgrop] = useState("");
  const [nation, setNation] = useState("");

 // const[table, setTable] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const User = {

      Name: name,
      Date :new Date(date),
      Sex: sex,
      Mobile: mobile,
      Govid: govid,
      Govrid: goverid,
      Label:label,
      Gname:gname,
      Email: email,
      CEumber:ceumber,
      Address: address,
      State: state,
      City: city,
      Country: country,
      Pincode: pincode,
      Occupation: occupation,
      Relegion: religion,
      Married: marride,
      Bgroup: bgrop,
      Nationality:nation


    }

    setName("");
   
    //setTable(User);
    

    console.log(User);

    axios.post("http://localhost:8000/fills", User)
  }

  return (
    <div>


      <div className='Main'>

        <div className='Title'>Personal Details</div>
        <form className="form" onSubmit={submitHandler}>

          <div className='first'>
            <div className='input-1'>
              <label>Name<strong style={{ color: "red" }}>*</strong></label>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type="text" className='input-11' placeholder='Enter Name' onChange={e => setName(e.target.value)} value={name} required />
            </div>




            <div className='input-2'>
              <label>Date of Birth or <br />Age<strong style={{ color: "red" }}>*</strong></label>
              &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;<input type="date" className="input-12" onChange={e => setDate(e.target.value)} value={date} required />
            </div>







            <div className='gender'>

              <label>Sex<strong style={{ color: "red" }}>*</strong></label>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <select onChange={e => setSex(e.target.value)} value={sex} className="sex" placeholder='Enter sex'>
                <option>Enter sex</option>
                <option>Male</option>
                <option>Female</option>
              </select>


            </div>


          </div>


          <div className='second'>

            <span className='Mobile'>
              <label>Mobile</label>:  &nbsp;&nbsp;&nbsp;
              <input type="Number" placeholder='Enter Mobile' onChange={e => setMobile(e.target.value)} value={mobile} className="input-13" />
            </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;




            <span className='Goveid'>

              Govt issue ID&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <select onChange={e => setGovID(e.target.value)} value={govid} className="Idtype" placeholder='ID Type'>
                <option>ID Type</option>
                <option>Paasport</option>
                <option>Adhar Card</option>
                <option>office id</option>
              </select>
            </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span className='EnterId'>
              <input type="text" placeholder='Enter Govt ID'onChange={e => setGovIDR(e.target.value)} value={goverid} className='EnterGO' />
            </span>


          </div>           




          <div className='Title'>Contact Details</div>
          <div className='THIRD'>
            <span className='Gove'>

              <label>Guardian Details</label>&nbsp;
              <select onChange={e => setLabel(e.target.value)} value={label} className="EnterLabel" placeholder='Enter Label' >
                <option>Enter Label</option>
                <option>Paasport</option>
                <option>Adhar Card</option>
                <option>office id</option>
              </select>&nbsp;
              <input type="text" placeholder='Enter Gurdian Name' className='Entergname' onChange={e => setGname(e.target.value)} value={gname} />
            </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <span className='email'>
              <label>Email</label>&nbsp;&nbsp;
              <input text="Email" placeholder='Enter Email' onChange={e => setEmail(e.target.value)} value={email} className="Email" />
            </span>

            <span className='Emergency'>

              <label>Emergency Contact Number</label>&nbsp;&nbsp;
              <input type='Number' placeholder='Enter Emergency No' className='Enumber' onChange={e => setCEumber(e.target.value)} value={ceumber}></input>
            </span>

          </div>


          <div className='Title'>Address Details</div>
          <div className='Four-1'>

            <span className='Address'>
              <label>Address</label>&nbsp;&nbsp;
              <input text="text" placeholder='Enter Adress' className='address' onChange={e => setAddress(e.target.value)} value={address} />
            </span>

            <span className='State'>
              <label>State</label>&nbsp;&nbsp;
              <select onChange={e => setState(e.target.value)} value={state} className="state-1" placeholder='Maharashtra'>
              <option>Select State</option>
                <option>Maharashtra</option>
                <option>Rajasthan</option>
                <option>Utterpradesh</option>
                <option>Himachal</option>
                <option>Madhyapradesh</option>
                <option>Gujrat</option>
                <option>Bengal</option>
                <option>Chennai</option>
                <option>Tamilnadu</option>
                <option>Madraas</option>
                <option>Andhrapradesh</option>
                <option>Tamilnadu</option>
              </select>
            </span>


            <span className='City'>

              <label>City</label>&nbsp;&nbsp;
              <select onChange={e => setCity(e.target.value)} value={city} className="city-1" placeholder='Nagpur'>
              <option>Select city</option>
                <option>Nagpur</option>
                <option>Pune</option>
                <option>Mumbai</option>
                <option>Delhi</option>
                <option>Indore</option>
                <option>Bhopal</option>
                <option>Chandigadh</option>
                <option>Bengluru</option>
                <option>Hydrabaad</option>
                <option>Nashik</option>
                <option>Satara</option>
                <option>Sangli</option>
              </select>
            </span>




          </div>

          <div className='Four'>

            <span className='Country'>
              <label>Country</label>&nbsp;&nbsp;
              <select onChange={e => setCountry(e.target.value)} value={country} className="country-1" placeholder='india'>
              <option>Select Country</option>
                <option>india</option>
                <option>indoneshia</option>
                <option>Nepal</option>
                <option>Shrilanka</option>
                <option>Bhutan</option>
                <option>Myanmaar</option>
                <option>Japan</option>
                <option>Uk</option>
                <option>US</option>
                <option>London</option>
                <option>Thailand</option>
                <option>Briten</option>
                <option>Jarmani</option>
                <option>France</option>
                <option>Swizerland</option>
                <option>Newzeland</option>
              </select>
            </span>



            <span className='pincode'>

              <label>Pincode</label>&nbsp;&nbsp;
              <input type="text" placeholder='Enter Pincode' onChange={e => setPincode(e.target.value)} value={pincode} className="pincode-1" />

            </span>
          </div>


          <div className='Title'>Other Details</div>

          <div className='fifth'>
            <span className='occupation'>
              <label>Occupation</label>&nbsp;&nbsp;
              <input type='text' placeholder='Enter occupation' onChange={e => setOccupation(e.target.value)} value={occupation} className="ocuupation-1" />
            </span>

            <span className='Religon'>
              <label>Religion</label>&nbsp;&nbsp;
              <select onChange={e => setReligion(e.target.value)} value={religion} className="religion-1" placeholder='Enter Religon'>

                <option>Enter Religion</option>
                <option>Hindu</option>
                <option>Baudh</option>
                <option>Jain</option>
                <option>Sikh(Khalsa)</option>

              </select>
            </span>
            <span className='Maritial'>
              <label>Maritial Status</label>&nbsp;&nbsp;
              <select onChange={e => setMarried(e.target.value)} value={marride} className="martial">
                <option>Enter Maritial Status</option>
                <option>Married</option>
                <option>Unmarried</option>


              </select>
            </span>

            <span className='Blood'>
              <label>Blood Group</label>&nbsp;&nbsp;
              <select onChange={e => setBgrop(e.target.value)} value={bgrop} className="blood" placeholder='Group'>

                <option>Group</option>
                <option>A+</option>
                <option>AB+</option>
                <option>B+</option>
                <option>O+</option>


              </select>
            </span>
          </div>
          <div className='Six'>
            <span className='nation'>
              <label>Nationality</label>
              <select className='nationality' onChange={e => setNation(e.target.value)} value={nation} placeholder="indian">
                <option>indian</option>
                <option>india</option>
                <option>indoneshia</option>
                <option>Nepal</option>
                <option>Shrilanka</option>
                <option>Bhutan</option>
                <option>Myanmaar</option>
                <option>Japan</option>
                <option>Uk</option>
                <option>US</option>
                <option>London</option>
                <option>Thailand</option>
                <option>Briten</option>
                <option>Jarmani</option>
                <option>France</option>
                <option>Swizerland</option>
                <option>Newzeland</option>
              </select>
            </span>

          </div>
          <div className='subtin'>
            <button className='Cancel'>CANCEL<br /><strong style={{ textDecoration: "underline" }}>(ESC)</strong></button>
            <button className='submit' onSubmit={submitHandler}>SUBMIT<br /><strong style={{ textDecoration: "underline" }}>(T S)</strong></button>

          </div>
        </form>

       


      </div>

 
    </div>
  )
}

export default Home;