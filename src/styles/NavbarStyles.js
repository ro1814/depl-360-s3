import styled from "styled-components";

export const Logo = styled.img`

  display: inline-block;
  cursor: pointer;
  
  @media (max-width: 924px) {
    width: 70%;
    padding-left: 1%;
  }
`;

export const NavLink = styled.div`
  .nav-link {
        margin: 25px;
        padding: 5px; 
        
    }
  @media (max-width: 924px){

    display: block;
    margin-top:0;
    padding: 11.6% 1rem;
    color: #0d6efd;
    text-decoration: none;
    transition: color 0.15s ease-in-out, border-color 0.15s ease-in-out;
    text-align: center;
    
    .navbar-light .navbar-nav .show > .nav-link, .navbar-light .navbar-nav .nav-link.active {
        color: white;
    }

    .navbar-light .navbar-nav .nav-link {
        color: white;
    }

    .nav-link {
        font-size: 22px;
        color: white;
    }
  }
`;
