import { useState } from 'react';
import '../styles/GlobalStyle.css';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = formData;
    // Xử lý đăng nhập tại đây
  };

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 bg_color_48C8FF'>
      <div className="form-container p-4 rounded shadow bg-white" style={{ width: '30%' }}>
        <form onSubmit={handleSubmit}>
          <div className="form-group my-3">

            <h2 className='d-flex justify-content-center pb-4 fw-600'>
              Login
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
            
          </div>
          
          <Link to='/forgotpassword' className='text-decoration-none'>
            Forgot password?
          </Link>

          <button type="submit" className="btn btn-primary w-100 mt-3">
            Login
          </button>
          
          <label className='mt-3'>
            Don't have an account?
            <Link to='/signup' className='ml-1 text-decoration-none'>
              &nbsp; Signup
            </Link>
          </label>

        </form>
      </div>
    </div>
    
  );
};

export default LoginPage;
