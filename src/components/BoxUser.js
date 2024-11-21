import { Dropdown } from "react-bootstrap"
import { Link } from "react-router-dom"

function BoxUser(props){

  return(
    <>
      <div className="d-flex align-items-center mb-3">
        <img 
          src="https://img.freepik.com/free-psd/3d-illustration-person-with-punk-hair-jacket_23-2149436198.jpg" 
          alt="avs" 
          className="rounded-circle me-3"
          style={{width: '60px', height: '60px'}}
        />
        
        <div>
          <span>
          Role
        </span>

        <Dropdown>
          
          <Dropdown.Toggle as="span" id="dropdown-text" style={{ cursor: 'pointer'}}>
            Your name
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Link 
              to="#"
              className="dropdown-item"  
            >
              Profile
            </Link>
            <Link 
              to="#"
              className="dropdown-item"  
            >
              Change password
            </Link>
            
          </Dropdown.Menu>
        </Dropdown>
        </div>

        
        
        
          
        </div>
      
    </>
  )
}

export default BoxUser