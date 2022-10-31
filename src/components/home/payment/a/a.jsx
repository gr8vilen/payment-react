import React from 'react'
import {useState} from 'react';
import { NavLink , useNavigate } from "react-router-dom";



function A() {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  console.log(name + ' ' + phone + ' ' + email)

  const navigate = useNavigate();

  // intergrain
  const rs = 1;

  const submit = (e) => {
    e.preventDefault();
    if(name === '' ){
      alert('Please enter a name')
    }
    else if(phone === ''){alert('Please enter a phone number')
    }
    else if(email === ''){alert('Please enter email')}
    else{
      var options = {
        key: "rzp_test_QxWBt6HhQXN7Nv",
        key_secret: "DEmiq1LskPS7iB7H0NctMbce",
        amount: rs * 100,
        currency: "INR",
        name: "zphone",
        description: "for testing purpose",
        handler: function (response) {
          localStorage.setItem("payid", response.razorpay_payment_id);
          navigate('/b');


        },
        prefill: {
          name: name,
          email: email,
          contact: "+91"+phone,
        },
        notes: {
          address: "some where in the world",
        },
        theme: {
          color: "#3399cc",
        },
      };
  
      var pay = new window.Razorpay(options);
      pay.open();
    };
    

  };

  //end


  return (
    <div>
      <div class="container-fluid">
      <div class="row vertical-center">
          <form class="col-xs-8 col-xs-offset-2  col-sm-6 col-sm-offset-3 col-md-4 col-sm-offset-4 col-lg-2 col-lg-offset-5">
            <h1>payment detail</h1>
            <p>
              <label class="sr-only" for="">name</label>
              <input class="form-control" type="text" placeholder="name" required autofocus value={name} onChange={(e) => setName(e.target.value)} />
            </p>
            <p>
              <label class="sr-only" for="">email</label>
              <input class="form-control" type="email" placeholder="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </p>
            <p>
              <label class="sr-only" for="">phone</label>
              <input class="form-control" type="number" placeholder="1234567890" pattern="[0-9]{10}" required value={phone} onChange={(e) => setPhone(e.target.value)} />
            </p>
            <NavLink to="/b">
              <button class="btn btn-primary btn-block" type="sumbit" onClick={submit} >buy now</button>
            </NavLink>
          </form>


      </div>

    </div>
    </div>
  )
}

export default A