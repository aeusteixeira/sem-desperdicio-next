import styles from './form.module.css';
import Card from "../Card/Card";

export default function Form(){
    return (
        <>
        <div className={styles.form}>
            <div className={styles.formGroup}>
            <textarea className={styles.textArea} name="" id="" rows="3"
            placeholder="Digite aqui o que você tem em casa. Exemplo: uma batata, repolho, cebola, alho, etc.
            "></textarea>
            </div>
            <div className={styles.formGroup}>
            <button className={styles.button}>Gerar Receitas</button>
            </div>
            <div className={styles.formGroup}>
                <Card/>
            </div>
        </div>
        </>
    );
}