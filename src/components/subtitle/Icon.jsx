import styles from './Icon.module.css'

function Icon ({ iconName, size, link }) {
  return (
    <a href={link} target="_blank">
      <img className={styles.icon} src={`/icons/${iconName}.svg`} width={size} />
    </a>
  )
}

Icon.defaultProps = {
  size: '30px'
}

export default Icon