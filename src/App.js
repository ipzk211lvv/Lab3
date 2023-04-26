import React, {useEffect, useState} from 'react';
import {asyncGenerator} from "./helps/asyncGenerator";
import './polyfill/fromAsync'
import './App.css'

const info = [
    'Литвин Володимир',
    'Front/React',
    'Udacity React Nanodegree',
    'React Nanodegree допомагає зрозуміти як створюються веб-додатки з використанням React, Redux, React Native та інші інстурменти. Також він розроблений спільно з такими лідерами галузі як Facebook та GitHub, тільки гугла не вистачає. React Nanodegree є онлайн-курсом, тому його досить зручно буде проходити. Після проходження курсу я отримаю сертифікат React Nanodegree, який може знадобитися мені у пошуку роботи(буде корисний у пошуку роботи*). Ще про курс, у ньому потрібно працювати з реальними проектами які допоможуть пройти всі етапи розробки продукту. Також я обрав направлення Фронт, але у курсні присутній і Бек, це не просто так. Я вважаю що Фронтендер має знати як працює бек(не поглиблено). Такі курси дуже добре допоможуть зрозуміти основи беку:)'
]

const App = () => {
    const [result, setResult] = useState([]);

    useEffect(() => {
        async function getResult() {
            setResult(await Array.fromAsync(asyncGenerator(info), (x) => x));
        }

        getResult();
    }, []);

    return (
        <div className='container'>
            {result.map(e =>
                <div className='item'>
                    {e}
                </div>
            )}
            <div className='img'/>
        </div>
    )
};

export default App;