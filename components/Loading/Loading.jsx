import styles from './loading.module.css';
import { useState, useEffect } from 'react';

export default function Loading() {
  const icons = [
    '🥕',
    '🍆',
    '🍅',
    '🥔',
    '🥑',
    '🥦',
    '🥒',
    '🥬',
    '🥗',
    '🥥',
    '🥝',
    '🍍',
    '🥭',
    '🍌',
    '🍉',
    '🍇',
    '🍓',
    '🍈',
  ]
  const [currentIcon, setCurrentIcon] = useState(0);
  const changeIcon = () => {
    setCurrentIcon(currentIcon === icons.length - 1 ? 0 : currentIcon + 1);
  }

  useEffect(() => {
    const intervalId = setInterval(changeIcon, 500);
    return () => clearInterval(intervalId);
  }, [currentIcon]);

  const icon = icons[currentIcon];
  const loadingText = `Montando sua receita ${icon}`;

  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loading}>
        <div className={styles.dot1}>
            🥑
        </div>
        <div className={styles.dot2}>
            🥦
        </div>
        <div className={styles.dot3}>
            🥒
        </div>
      </div>
      <p className={styles.loadingText}>
        {loadingText}
      </p>
    </div>
  );
}
