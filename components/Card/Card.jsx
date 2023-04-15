import styles from './card.module.css';
import { useState } from 'react';

export default function Card({recipe}) {

  const [saved, setSaved] = useState(false);

  function handleSave() {
    setSaved(!saved);
  }

  // Função para separar o título, descrição e modo de preparo
  const splitRecipe = (recipe) => {
    const title = recipe.title || '';
    const description = recipe.description || '';
    const content = recipe.content || [
      'Não foi possível encontrar a receita',
    ];
    return {title, description, content};
  }

  const {title, description, content} = splitRecipe(recipe);
  return (
    <>
      <div className={styles.cardResult}>
        <div className={styles.cardResultHeader}>
          <h3 className={styles.cardResultTitle}>
            {title}
          </h3>
          <p className={styles.cardResultDescription}>
            {description}
          </p>
        </div>
        <div className={styles.cardResultBody}>
          <ul className={styles.cardResultContent}>
          {
            content == null ? (
              <li>Não foi possível encontrar a receita</li>
            ) : (
              content.map((step, index) => (
                <li key={index}>{step}</li>
              ))
            )
          }
          </ul>
        </div>
        <div className={styles.cardResultFooter}>
        <button
        className={
          `${styles.cardResultButton} ${saved ? styles.clickedButton : ''}`
        } 
        onClick={handleSave}>
          {saved ? (
            <span>Remover dos favoritos ❤️</span>
          ) : (
            <span>Adicionar aos favoritos ⭐️</span>
          )}
      </button>
        </div>
      </div>
    </>
  );
}
