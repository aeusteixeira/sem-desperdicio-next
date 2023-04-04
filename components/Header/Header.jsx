import Image from "next/image";
import styles from "./header.module.css";
import Navbar from "../Navbar/Navbar";

export default function header() {
    return (
        <>
        <div className={styles.header}>
          <Image className={styles.logo} src={'/Sem-Desperdicio.svg'} alt="Sem Desperdício" width={300} height={300} />
          <p className={styles.description}>
            No Brasil o desperdício de alimentos chega a 30% do total produzido. Com a Sem Desperdício você pode gerar receitas com o que você tem em casa utilizando Inteligência Artificial.
          </p>
        </div>
        <Navbar/>
        </>
    );
}
