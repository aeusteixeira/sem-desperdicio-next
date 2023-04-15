import styles from './form.module.css';
import Card from "../Card/Card";
import { useState } from 'react';
import Loading from '../Loading/Loading';

export default function Form(){

    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);
    
    function handleChange(event) {
        setInput(event.target.value);
    }

    const generateResponse = async () => {
    setLoading(true); // Setando o estado como true para iniciar o loading
    const prompt = `
        Crie uma receita com os seguintes ingredientes: ${input}
        Traga a receita para mim no formato JSON contendo os seguintes itens:
        
        {
            title,
            description,
            content
        }
        
        Sendo:
        Tile: titulo da receita
        description: uma mini descrição final do prato
        content: modo de preparo do prato, sendo um array de strings, onde cada string é uma etapa do modo de preparo.

        Escreva a receita em português, pois o modelo de linguagem que estamos usando é o português.
    `;

        const response = await fetch('api/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                prompt
            })
        });

        const data = await response.json();

        function processRecipeMessage(response) {
            const data = response.message;
            let recipe;
            try {
              recipe = JSON.parse(data);
            } catch (err) {
              console.error('Erro ao fazer o parse do JSON:', err);
              return null;
            }
            const { title, description, content } = recipe;
            return { title, description, content };
          }

        const recipe = processRecipeMessage(data);
        setResponse(recipe);
        setLoading(false); // Setando o estado como false para finalizar o loading
    };

    return (
        <>
        <div className={styles.form}>
            <div className={styles.formGroup}>
                <textarea
                className={styles.textArea} name="" id="ingredients" rows="3"
                placeholder="Digite aqui o que você tem em casa. Exemplo: uma batata, repolho, cebola, alho, etc."  
                onChange={handleChange}
                ></textarea>
                <p>
                    {input}
                </p>
            </div>
            <div className={styles.formGroup}>
                <button className={styles.button} onClick={generateResponse}>
                    Buscar Receitas
                </button>
            </div>
            <div className={styles.formGroup}>
                {
                    loading ? <Loading /> : response && <Card recipe={response} />
                }
            </div>
        </div>
        </>
    );
}