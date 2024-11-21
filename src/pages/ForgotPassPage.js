import { useState } from 'react';
import '../styles/GlobalStyle.css';
import { Link } from 'react-router-dom';

import NotifyModal from '../components/NotifyModal';

function ForgotPassword() {
  const [formData, setFormData] = useState({
    email: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email } = formData;
    // Xử lý đăng nhập tại đây

  };

  const [showNotify, setShowNotify] = useState(false);

  const handleOpenNotify = () => setShowNotify(true);
  const handleCloseNotify = () => setShowNotify(false);

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 bg_color_48C8FF'>
      <div className="form-container p-4 rounded shadow bg-white" style={{ width: '30%' }}>
        <form onSubmit={handleSubmit}>
          <div className="form-group my-3">

            <h2 className='d-flex justify-content-center pb-4 fw-600'>
              Forgot password
            </h2>

            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder='Email'
            />
            
          </div>

          <button 
            type="submit" 
            className="btn btn-primary w-100 mt-3"
            onClick={handleOpenNotify}
          >
            Send password
          </button>

          <NotifyModal 
            show={showNotify} 
            onHide={handleCloseNotify}
            onClick={handleCloseNotify}
            content={"Sent new password to \"" + formData.email + "\". Please check email to get new password!"}/>
        
          <label className='mt-3'>
            Back to
            <Link to='/login' className='ml-1 text-decoration-none'>
              &nbsp; Login
            </Link>
          </label>

        </form>
      </div>
    </div>
    
  );
};

export default ForgotPassword;
