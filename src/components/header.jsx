import React from 'react';


function Header() {
  return (
    <header>
        <i class="logo fab fa-youtube"></i>
        <span class="logo-text">Youtube</span>
        <div> 
            <input type="text" class="form-control" placeholder="search here!" aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <button class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="fas fa-search"></i></button>
        </div>
    </header>
  );
}

export default Header;