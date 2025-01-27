import { useState } from "react";
import Header from "../../components/Header";
import Container from "../../components/Container";
import styles from "./Destination.module.css";
import  data from "../../json/data.json";




const Destination = () => {

    let content = '';
    let img = '';
    const ind = [0, 1, 2, 3];

    const [ spanInfo, setSpanInfo] = useState(0);

    const handleInfo = (index) => {
        setSpanInfo(index);
        
    }

    if(spanInfo === 0) {

        content = data.destinations[0]
        img = content.images.png

    } else if(spanInfo === 1) {

        content = data.destinations[1]
        img = content.images.png

    } else if(spanInfo === 2) {

        content = data.destinations[2]
        img = content.images.png

    } else if(spanInfo === 3) {

        content = data.destinations[3]
        img = content.images.png
        
    }

    return (
        <div className={styles.destination}>
            <Header/>
            <Container>
                <main className={styles.main}>
                    <h1><span>01</span>Pick your destination</h1>

                    <section className={styles.container}>

                        <div className={styles.container_img}>
                            <img src={img} alt="planeta" />
                        </div>

                        
                        <div className={styles.container_texts}>
                                
                            <div className={styles.btns}>
                                <span 
                                    onClick={() => handleInfo(0)}
                                    className={spanInfo === ind[0] ? `${styles.show}` : `${styles.hiden}`}
                                >Moon</span>
                                <span 
                                    onClick={() => handleInfo(1)}
                                    className={spanInfo === ind[1] ? `${styles.show}` : `${styles.hiden}`}
                                >Mars</span>
                                <span 
                                    onClick={() => handleInfo(2)}
                                    className={spanInfo === ind[2] ? `${styles.show}` : `${styles.hiden}`}
                                >Europa</span>
                                <span  
                                    onClick={() => handleInfo(3)} 
                                    className={spanInfo === ind[3] ? `${styles.show}` : `${styles.hiden}`}
                                >Titan</span>
                            </div>

                            <div className={styles.text}>
                                <h2>{content.name}</h2>
                                <p>
                                    {content.description}
                                </p>

                            </div>

                            <div className={styles.linha}></div>

                            <div className={styles.infos}>
                                <div className={styles.info1}>
                                    <span>Avg. distance</span>
                                    <p>{content.distance}</p>
                                </div>
                                <div className={styles.info2}>
                                    <span>Est. travel time</span>
                                    <p>{content.travel}</p>
                                </div>
                            </div>

                        </div>
                        
                    </section>
                    
                </main>
            </Container>
        </div>
        
    )
}

export default Destination;