import Header from "../../components/Header"
import Container from "../../components/Container"
import styles from "./Technology.module.css"
import { useEffect, useState } from "react"
import  data from "../../json/data.json"

const Technology = () => {

    const [ width, setWidth ] = useState(window.innerWidth);
    const [ tecInfo, setTecInfo ] = useState(0);
    // const [ dados, setDados ] = useState([]); // variável responsável para guardar os dados da API
    const ind = [0, 1, 2, 3];
    
    let date = {};
    let imgPortrait;
    let imgLandscape;

    const handleTec = (index) => {
        setTecInfo(index);
    }

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);

/*
    Função que consome a REST API e obtém dados.

    useEffect(() => {
        const requestApi = async () => {
            const url = 'http://localhost:3000/technology';
            const dates = await fetch(url)
                .then(response => response.json())
                .then(response => response)
                .catch(error => console.log(error))
            
            setDados(dates);
        }
        requestApi();

    }, []);
*/

    data.technology.forEach((item, i) => {
        if (tecInfo === i) {
            date = item;
            imgPortrait = date.images.portrait;
            imgLandscape = date.images.landscape;
        }
    });
    
    return (
        <div className={styles.technology}>
            <Header/>
            <section className={styles.container_tec}>
                <Container>
                    <div className={styles.main}>

                        <h1><span>03</span> Space launch 101</h1>
                        
                        <div className={styles.container}>
                            <div className={styles.imgs}>
                                <img src={width < 1024 ? imgLandscape : imgPortrait} alt="foto naves" />
                            </div>

                            <div className={styles.content}>

                                <div className={styles.btns}>
                                    <div 
                                        onClick={() => handleTec(0)} 
                                        className={tecInfo === ind[0] ? `${styles.show}` : `${styles.hiden}`}
                                    >
                                        <span>1</span>
                                    </div>
                                    <div 
                                        onClick={() => handleTec(1)}
                                        className={tecInfo === ind[1] ? `${styles.show}` : `${styles.hiden}`}
                                    >
                                        <span>2</span>
                                    </div>
                                    <div 
                                        onClick={() => handleTec(2)}
                                        className={tecInfo === ind[2] ? `${styles.show}` : `${styles.hiden}`}
                                    >
                                        <span>3</span>
                                    </div>
                                </div>
                                <div className={styles.text}>
                                    <div className={styles.rn}>
                                        <span>The terminology...</span>
                                        <h2>{date.name}</h2>
                                    </div>
                                    <p>{date.description}</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </Container>
            </section>
        </div>
    )
}

export default Technology;