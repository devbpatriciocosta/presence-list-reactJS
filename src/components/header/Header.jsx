import styles from './Header.module.css' 


function Header () {
  return (
    <header className={styles.header}> 
      <a href="" style={{ color:"black", fontWeight:"bold" }} > Home </a>
      <a href='https://www.linkedin.com/in/brunopatricioc/' target="_blank" style={{ color:"black", fontWeight:"bold" }}>Quem sou eu?</a>
      <a href='https://wa.me/5585997275152' target="_blank" style={{ color:"black", fontWeight:"bold" }}>Contato</a>
    </header>
  )
}

export default Header;