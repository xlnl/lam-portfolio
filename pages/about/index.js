import styles from '../../styles/About.module.css'

const About = () => {
    const aboutData = {
        p1: "I am an analyst developer with expertise in software engineering, graphic design, and data analysis, and extensive experience in communications strategy, development, and international relations research.",
        p2: "Through my curious and compassionate character, I can quickly adapt to complex concepts and streamline processes to advance key objectives individually and with diverse teams under tight or competing deadlines.",
        p3: "My passion for public service and project management skills align with my innate ability to learn and translate abstract ideas into practical applications. This enables me to express my creativity, connect with teams under a guiding mission, and tackle real-world challenges in innovative ways."
    }

    return(
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.grid}>
                <h2 className={styles.title}>Who am I?</h2>
                <div className={styles.description}>
                    <p>{aboutData.p1}</p>
                    <p> {aboutData.p2} </p>
                    <p>{aboutData.p3}</p>
                </div>
                </div>
            </main>
        </div>
    )
}

export default About