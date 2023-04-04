import styles from './card.module.css';

export default function Card(){
    return (
        <>
        <div className={styles.cardResult}>
              <div className={styles.cardResultHeader}>
                <h3 className={styles.cardResultTitle}>Batata Frita</h3>
                <p className={styles.cardResultDescription}>Batata frita com molho de alho</p>
                </div>
                <div className={styles.cardResultBody}>
                  <p className={styles.cardResultContent}>Ingredientes: 1 batata, 1 colher de sopa de azeite, 1 colher de sopa de alho, 1 colher de sopa de sal, 1 colher de sopa de pimenta do reino, 1 colher de sopa de orégano, 1 colher de sopa de cebola, 1 colher de sopa de pimentão
                  </p>
                </div>
                <div className={styles.cardResultFooter}>
                  <button className={styles.cardResultButton}>
                  👍🏻 fiz essa receita
                  </button>
                  </div>
              </div>
        </>
    );
}