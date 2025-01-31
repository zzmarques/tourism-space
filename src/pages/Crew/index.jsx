import { useState } from "react"
import Header from "../../components/Header"
import Container from "../../components/Container"
import styles from "./Crew.module.css"
import  data from "../../json/data.json"


const Crew = () => {

    const ind = [0, 1, 2, 3];
    let date;

    const [ crewInfo, setCrewInfo ] = useState(0);

    const handleCrewInfo = (index) => {
        setCrewInfo(index)
    }

    data.crew.forEach((item, i) => {
        if (crewInfo === i) {
            date = item
        }
    })

    return (
        <main className={styles.crew}>
            <Header/>
            <section className={styles.container_crew}>
                <Container>
                    <div className={styles.main}> 
                        <h1><span>02</span>Meet your crew</h1>
                        
                        <div className={styles.content}>

                            <div className={styles.explanation_1}> 

                                <div className={styles.explanation_2}> 

                                    <div className={styles.text}>
                                        <div className={styles.rn}>
                                            <span>{date.role}</span>
                                            <h2>{date.name}</h2>
                                        </div>
                                        <p>{date.bio}</p>
                                    </div>

                                </div>

                                <div className={styles.slid}>
                                    <div  
                                        onClick={() => handleCrewInfo(0)}
                                        className={crewInfo === ind[0] ? `${styles.show}` : `${styles.hiden}`}
                                    ></div>
                                    <div 
                                        onClick={() => handleCrewInfo(1)}
                                        className={crewInfo === ind[1] ? `${styles.show}` : `${styles.hiden}`}
                                    ></div>
                                    <div 
                                        onClick={() => handleCrewInfo(2)}
                                        className={crewInfo === ind[2] ? `${styles.show}` : `${styles.hiden}`}
                                    ></div>
                                    <div 
                                        onClick={() => handleCrewInfo(3)}
                                        className={crewInfo === ind[3] ? `${styles.show}` : `${styles.hiden}`}
                                    ></div>
                                </div>
                            </div> 
                            
                            <div className={styles.image}>
                                <img src={date.images.webp} alt="Foto dos responsáveis" />
                            </div>
                        </div>

                    </div>
                </Container>
            </section>
        </main>
    );
}

export default Crew;