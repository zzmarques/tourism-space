import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Container from "../../components/Container";
import styles from "./Destination.module.css";
import  data from "../../json/data.json";




const Destination = () => {

    const ind = [0, 1, 2, 3];
    const [ desInfo, setDesInfo] = useState(0);
    // const [ dados, setDados ] = useState([]); // variável responsável para guardar os dados da API

    let date = {};
    const handleInfo = (index) => {
        setDesInfo(index);
        
    }

/*
    Função que consome a REST API e obtém dados.

    useEffect(() => {
        const requestApi = async () => {
            const url = 'http://localhost:3000/destinations';
            const dates = await fetch(url)
                .then(response => response.json())
                .then(response => response)
                .catch(error => console.log(error))
            
            setDados(dates);
        }
        requestApi();

    }, []);
*/

    data.destinations.forEach((item, i) => {
        if(desInfo === i) {
            date = item;
        }
    });

    return (
        <main className={styles.destination}>
            <Header/>
            <section className={styles.container_des}>
                <Container>
                        <div className={styles.main}>
                            <h1><span>01</span>Pick your destination</h1>

                            <section className={styles.container}>

                                <div className={styles.container_img}>
                                    <img src={date.images.webp} alt="planeta" />
                                </div>

                                <div className={styles.content_texts}>
                                    <div className={styles.container_texts}>
                                            
                                        <div className={styles.btns}>
                                            <span 
                                                onClick={() => handleInfo(0)}
                                                className={desInfo === ind[0] ? `${styles.show}` : `${styles.hiden}`}
                                            >Moon</span>
                                            <span 
                                                onClick={() => handleInfo(1)}
                                                className={desInfo === ind[1] ? `${styles.show}` : `${styles.hiden}`}
                                            >Mars</span>
                                            <span 
                                                onClick={() => handleInfo(2)}
                                                className={desInfo === ind[2] ? `${styles.show}` : `${styles.hiden}`}
                                            >Europa</span>
                                            <span  
                                                onClick={() => handleInfo(3)} 
                                                className={desInfo === ind[3] ? `${styles.show}` : `${styles.hiden}`}
                                            >Titan</span>
                                        </div>

                                        <div className={styles.text}>
                                            <h2>{date.name}</h2>
                                            <p>
                                                {date.description}
                                            </p>

                                        </div>

                                        <div className={styles.linha}></div>

                                        <div className={styles.infos}>
                                            <div className={styles.info1}>
                                                <span>Avg. distance</span>
                                                <p>{date.distance}</p>
                                            </div>
                                            <div className={styles.info2}>
                                                <span>Est. travel time</span>
                                                <p>{date.travel}</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </section>
                            
                        </div>
                </Container>
            </section>
        </main>
        
    )
}

export default Destination;