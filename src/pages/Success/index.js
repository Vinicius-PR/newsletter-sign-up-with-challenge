import iconSuccess from '../../assets/images/icon-success.svg';
import { useNavigate } from 'react-router-dom';

import './styles.css'

export default function Success({email, onSetEmail}) {
  let navigate = useNavigate();
  return (
    <main className='success'>
      <div className="content">
        <img src={iconSuccess} alt="Success" />
        <h1>Thanks for subscribing!</h1>
        <p className="confirmation-message">
          A confirmation email has been sent to <br /> <strong>{email}</strong>. Please open it and click the button inside to confirm your subscription.
        </p>
        <button 
          className="Dismiss" 
          onClick={() => {
            navigate('/');
            onSetEmail('');
          }}
        >
          Dismiss message
        </button>
      </div>
    </main>
  )
}