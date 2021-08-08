import React, {useState} from 'react';
import styles from './header.module.css';


function Header({onSearch}) {

  const [searchText, setSearchText] = useState('')
  
  const handleChange = (e) => {
    setSearchText(e.target.value);
  }

  const handleSearch = () =>{
    onSearch(searchText);
  }

  const onClick = () => {
    handleSearch();
  }

  const onKeyPress = (event) => {
    if(event.key === 'Enter'){
      handleSearch();
    }
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="images/logo.png" alt="logo"/>
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input className={styles.input} 
      type="search" 
      placeholder="Search..."  
      value={searchText}
      onChange={handleChange}
      onKeyPress={onKeyPress}/>
      <button className={styles.button} type="submit" onClick={onClick}>
        <img className={styles.buttonImg} src="/images/search.png" alt="search"/>
      </button> 
    </header>
  );
}

export default Header; 