import About from '../about/index'
import Projects from '../projects/index'
import Contact from '../contact/index'
import Footer from '../../components/Footer'

import styles from '../../styles/Home.module.css'

const Home = () => {
    return (
        <div className={styles.container}>
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
  )
}

export default Home