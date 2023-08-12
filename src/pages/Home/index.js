import { useState, useEffect } from 'react';
import illustrationImg from '../../assets/images/illustration-sign-up-desktop.svg';
import illustrationImgMobile from '../../assets/images/illustration-sign-up-mobile.svg';
import iconList from '../../assets/images/icon-list.svg';
import { useNavigate } from 'react-router-dom';

import './styles.css';

export default function Home({ email, onSetEmail }) {
  let navigate = useNavigate();
  const [invalid, setInvalid] = useState(false)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [setWidth])

  function validateEmail(email) {
    const regex = new RegExp("^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$")
    if (!regex.test(email)) {
      setInvalid(true)
      return false
    } else {
      setInvalid(false)
      return true
    }
  }

  return (
    <main className='home'>
      <div className="content-bloc">
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <li><img src={iconList} alt='Icon' /> Product discovery and building what matters</li>
          <li><img src={iconList} alt='Icon' /> mesuaring to ensure updates are a success</li>
          <li><img src={iconList} alt='Icon' /> and much more!</li>
        </ul>

        <form
          className="form-newsletter"
          action="#"
          onSubmit={(e) => {
            e.preventDefault();
            if (validateEmail(email)) {
              navigate('/success')
            }
          }}
        >
          <span
            id="erro-message-email"
            className={invalid ? 'invalid' : ''}
          >
            Valid email required
          </span>
          <label htmlFor="email">Email address</label>
          <input
            className={invalid ? 'invalid' : ''}
            type="email"
            name="email"
            id="email"
            required
            placeholder="email@company.com"
            value={email}
            onChange={(e) => {
              onSetEmail(e.target.value);
              setInvalid(false)
            }}
          />
          <button type="submit">Subscribe to montlhy newsletter</button>
        </form>
      </div>

      <div className="img-bloc">
        <img src={width > 768 ? illustrationImg : illustrationImgMobile} alt="illustration" />
      </div>
    </main>
  )
}