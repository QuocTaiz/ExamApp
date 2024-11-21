import { useState } from 'react';
import '../styles/GlobalStyle.css';
import { Link } from 'react-router-dom';

function SignUpPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    cfpassword:''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password, cfpassword } = formData;
    // Xử lý đăng ký tại đây
  };

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 bg_color_48C8FF'>
      <div className="form-container p-4 rounded shadow bg-white" style={{ width: '30%' }}>
        <form onSubmit={handleSubmit}>
          <div className="form-group my-3">

            <h2 className='d-flex justify-content-center pb-4 fw-600'>
              Sign up
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
          
            <input
              type="password"
              className="form-control my-3"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder='Password'
            />

            <input
              type="password"
              className="form-control"
              id="cfpassword"
              name="cfpassword"
              value={formData.cfpassword}
              onChange={handleChange}
              required
              placeholder='Confirm password'
            />

          </div>

          <button type="submit" className="btn btn-primary w-100 mt-3">
            Sign up
          </button>
          
          <label className='mt-3'>
            Already have an account?
            <Link to='/login' className='ml-1 text-decoration-none'>
              &nbsp; Login
            </Link>
          </label>

        </form>
      </div>
    </div>
    
  );
};

export default SignUpPage;
