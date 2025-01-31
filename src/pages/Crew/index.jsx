import { useEffect, useState } from "react"
import Header from "../../components/Header"
import Container from "../../components/Container"
import styles from "./Crew.module.css"
import  data from "../../json/data.json"


const Crew = () => {

    // http://localhost:3000/destinations
    // http://localhost:3000/crew
    // http://localhost:3000/technology

    let content = '';
    let img = '';
    const ind = [0, 1, 2, 3];
    let date;

    const [ crewInfo, setCrewInfo ] = useState(0);
    const [ data, setData ] = useState([]);

    const handleCrewInfo = (index) => {
        setCrewInfo(index)
    }

    useEffect(() => {
        const requesteApi = async () => {
            const url = 'http://localhost:3000/crew';
            const response = await fetch(url)
                .then(response => response.json())
                .then(response => response)
                .catch(error => console.log(error))
            setData(response);
        }
        requesteApi();

    }, [])

    data.forEach((item, i) => {
        if (crewInfo === i) {
            date = item
        }
    })

    console.log(date)
    

    // if(crewInfo === 0) {
    //     content = data.crew[0]
    //     img = content.images.png
    // } else if(crewInfo === 1) {
    //     content = data.crew[1]
    //     img = content.images.png
    // } else if(crewInfo === 2) {
    //     content = data.crew[2]
    //     img = content.images.png
    // } else if(crewInfo === 3) {
    //     content = data.crew[3]
    //     img = content.images.png
    // }

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