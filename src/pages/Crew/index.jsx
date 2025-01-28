import { useState } from "react"
import Header from "../../components/Header"
import Container from "../../components/Container"
import styles from "./Crew.module.css"
import  data from "../../json/data.json"


const Crew = () => {

    let content = '';
    let img = '';
    const ind = [0, 1, 2, 3];

    const [ crewInfo, setCrewInfo ] = useState(0);

    const handleCrewInfo = (index) => {
        setCrewInfo(index)
    }

    if(crewInfo === 0) {
        content = data.crew[0]
        img = content.images.png
    } else if(crewInfo === 1) {
        content = data.crew[1]
        img = content.images.png
    } else if(crewInfo === 2) {
        content = data.crew[2]
        img = content.images.png
    } else if(crewInfo === 3) {
        content = data.crew[3]
        img = content.images.png
    }

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
                                            <span>{content.role}</span>
                                            <h2>{content.name}</h2>
                                        </div>
                                        <p>{content.bio}</p>
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
                                <img src={img} alt="Foto dos responsáveis" />
                            </div>
                        </div>

                    </div>
                </Container>
            </section>
        </main>
    );
}

export default Crew;