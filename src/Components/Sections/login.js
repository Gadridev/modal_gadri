import React, { useState } from 'react';
import './login.css'
import {FcGoogle} from 'react-icons/fc'
import {BsFacebook,BsApple} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'
import image1 from '../../images/background.webp'
import { useForm } from 'react-hook-form';


function LoginForm({ onClose }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error,seterror]=useState('')
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);



  return (
    <div className="login-form">
      <div className='login-form-handl'>
        <div>
        <span className='icon-flex'><AiOutlineClose className='btn_close' onClick={onClose} /></span>
          <span className='txt_head'>Connectez-vous à votre compte GadriApp</span>
      <div className='login-form-pad' style={{padding:'20px'}}>
            <button type='button' className='btn_google'> 
            <FcGoogle className='btn_so'  />
            <span className='txt_google'>Connecter avec Google </span>
            </button>
            <button type='button' className='btn_google'> 
            <BsFacebook className='btn_so' />
            <span className='txt_google'>Connecter avec Facebook </span>
            </button>
            <button type='button' className='btn_google'> 
            <BsApple className='btn_so' />
            <span className='txt_google'>Connecter avec Apple </span>
            </button>
      <form onSubmit={handleSubmit(onSubmit)}>
            
        <span className='sp'>
        
          <input type="text" {...register('E-mail',{required:"E-mail its required"})}  placeholder="E-mail"/>
       
        </span>
        <br/>
        <br/>
        <label> 
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" {...register('Password',{required:"Password is required"})} />
        </label>
        <br/>
        <br/>
       
        <button type="submit" className='btn_con'>Log In</button>
       
      </form>
        </div>
        
        </div>
        <div className='image'>
          <img src={image1} alt="error" />

        </div>
         
    </div>

   </div>
  );
}

export default LoginForm