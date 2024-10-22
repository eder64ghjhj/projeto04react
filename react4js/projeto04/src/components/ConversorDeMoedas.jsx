const { useState, useEffect } = require("react")

function ConversorDeMoedas(){

    const[moedas,setMoedas]=useState([])
    const [deMoeda, setDeMoeda] = useState('USD');
    const [paraMoeda, setParaMoeda] = useState('EUR');
    const [quantidade, setQuantidade] = useState(1);
    const [resultado, setResultado] = useState(0);rrjth

    useEffect(() => {
        fetch('https://api.exchangeratesapi.io/latest/00e6d2d56a-15b74ce161-slqdgc')
          .then(response => response.json())
          .then(data => {
            setMoedas([...Object.keys(data.rates)]);
          })
          .catch(error => console.error('Erro ao buscar moedas:', error));
        }, []);
    
        const converterMoeda = () =>{
          fetch(`https://api.exchangeratesapi.io/latest/00e6d2d56a-15b74ce161-slqdgc/?base=${deMoeda}&symbols=${paraMoeda}`)
          .then(response => response.json())
          .then(data => {
            const taxaDeCambio = data.rates[paraMoeda];
            setResultado(quantidade * taxaDeCambio);
          })
        }
    }
export default ConversorDeMoedas;2