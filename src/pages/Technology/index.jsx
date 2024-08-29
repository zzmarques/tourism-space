import Header from "../../components/Header"
import Container from "../../components/Container"
import styles from "./Technology.module.css"
import { useEffect, useState } from "react"
import  data from "../../json/data.json"

const Technology = () => {

    let content = '';
    let imgPortrait = '';
    let imgLandscape = '';
    const ind = [0, 1, 2, 3];

    const [ width, setWidth ] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        };
        window.addEventListener('resize', handleResize);
       
        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);


    const [ tecInfo, setTecInfo ] = useState(0);
    const handleTec = (index) => {
        setTecInfo(index);
    }

    if(tecInfo === 0) {

        content = data.technology[0]
        imgPortrait = content.images.portrait
        imgLandscape = content.images.landscape

    } else if(tecInfo === 1) {

        content = data.technology[1];
        imgPortrait = content.images.portrait;
        imgLandscape = content.images.landscape;

    } else if(tecInfo === 2) {

        content = data.technology[2];
        imgPortrait = content.images.portrait;
        imgLandscape = content.images.landscape;
    }


    return (
        <div className={styles.technology}>
            <Header/>
            <Container>
                <main className={styles.main}>
                <h1><span>03</span> Space launch 101</h1>
                    <section>
                        <div className={styles.container}>
                            <div className={styles.content}>
                                <div className={styles.btns}>
                                    <div 
                                        onClick={() => handleTec(0)} 
                                        className={tecInfo === ind[0] ? `${styles.show}` : `${styles.hiden}`}
                                    >1</div>
                                    <div 
                                        onClick={() => handleTec(1)}
                                        className={tecInfo === ind[1] ? `${styles.show}` : `${styles.hiden}`}
                                    >2</div>
                                    <div 
                                        onClick={() => handleTec(2)}
                                        className={tecInfo === ind[2] ? `${styles.show}` : `${styles.hiden}`}
                                    >3</div>
                                </div>
                                <div className={styles.text}>
                                    <span>The terminology...</span>
                                    <h1>{content.name}</h1>
                                    <p>{content.description}</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.imgs}>
                            <img src={width < 1024 ? imgLandscape : imgPortrait} alt="foto naves" />
                        </div>
                    </section>
                </main>
            </Container>
        </div>
    )
}

export default Technology;