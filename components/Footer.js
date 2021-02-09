import styles from "../styles/Home.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer}>
        Built by me,
        <a
          href="https://github.com/xlnl"
          target="_blank"
          rel="noopener noreferrer"
        >
        {' '} Lam-Anh Le
        </a>
      </footer>
    )
}

export default Footer