import React,{useState} from 'react'
import darkhorse from "../images/darkhorse-logo.png"
import { NavLink,useNavigate } from 'react-router-dom'
const Signup = () => {
    const history = useNavigate()
    const [user,setUser] = useState({
        name:"",email:"",phone:"",password:"",cpassword:""
    });
    let name,value;
    const handleInputs=(e)=>{
        name = e.target.name;
        value = e.target.value;
        setUser({...user,[name]:value})
    }
    const PostData = async(e)=>{
        e.preventDefault();
        const{name,email,phone,password,cpassword} = user;
        const res = await fetch("/register",{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({
                name,email,phone,password,cpassword
            })
        })
        const data = await res.json();
        if(data.status===422||!data){
            window.alert("Invalid Registraion")
        }else{
            window.alert("Registration Successful")
            history.push("/login")
        }
    }
  return (
    <>
        <section className='signup'>
            <div className='container-signup mt-5'>
                <div className='signup-content'>
                <h2 className='form-title'>Sign Up</h2>
                    <div className='signup-form'>
                        <form method='POST' className='register-form' id="register-form">
                            <div className='form-group'>
                                <label htmlFor='name'>
                                    <i className='zmdi zmdi-account material-icons-name'></i>
                                </label>
                                <input type="text" name="name" id="name" autoComplete='off' value={user.name} onChange={handleInputs} placeholder='Name' />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='email'>
                                    <i className='zmdi zmdi-email material-icons-name'></i>
                                </label>
                                <input type="email" name="email" id="email" autoComplete='off' value={user.email} onChange={handleInputs} placeholder='Email ID' />
                            </div>

                            <div className='form-group'>
                                <label htmlFor='phone'>
                                    <i className='zmdi zmdi-phone-in-talk material-icons-name'></i>
                                </label>
                                <input type="number" name="phone" id="phone" autoComplete='off' value={user.phone} onChange={handleInputs} placeholder='Phone Number' />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='password'>
                                    <i className='zmdi zmdi-lock material-icons-name'></i>
                                </label>
                                <input type="password" name="password" id="password" autoComplete='off' value={user.password} onChange={handleInputs} placeholder='Password' />
                            </div>
                            
                            <div className='form-group'>
                                <label htmlFor='cpassword'>
                                    <i className='zmdi zmdi-lock material-icons-name'></i>
                                </label>
                                <input type="password" name="cpassword" id="cpassword" autoComplete='off' value={user.cpassword} onChange={handleInputs} placeholder='Confirm Your Password' />
                            </div>

                            <div className='form-button'>
                                <input type="submit" name="signup" id="signup" className='form-submit' value="Register" onClick={PostData} />
                            </div>
                        </form>
                        <div className='signup-image'>
                            <figure>
                                <img src={darkhorse} alt="Company-logo"/>
                            </figure>
                            <NavLink to="/login" className="signup-image-link">I am already registered</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Signup