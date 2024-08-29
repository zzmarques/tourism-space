import Header from "../../components/Header";
import Container from "../../components/Container";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className={styles.home}>
            <Header/>
            <Container>
                <main className={styles.main}>
                    <div className={styles.textos}>
                        <span>So, you want to travel to</span>
                        <h1>Space</h1>
                        <p>
                            Let’s face it; if you want to go to space, you might as well genuinely go to 
                            outer space and not hover kind of on the edge of it. Well sit back, and relax 
                            because we’ll give you a truly out of this world experience!
                        </p>
                    </div>
                    <div className={styles.container_btn}>
                        
                        <Link to="/destination" className={styles.sla}>
                            <div className={styles.btn}>
                                <span>Explore</span>
                            </div>
                        </Link>
                    </div>
                </main>
            </Container>
        </div>
    );
}

export default Home;