import './App.css';
import { useState, useEffect } from 'react';
import { getAllCountry, getAllPopulation } from './apiService';

function App() {
  const [country, setCountry] = useState([]);
  const [population, setPopulation] = useState([]);
  const [countPop, setCountPop] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await getAllCountry()
    setCountry(res);
    const res2 = await getAllPopulation()
    setPopulation(res2);


    let newCoutPop = []
    res.map(item => {
      let newData = res2.filter(data => item.capital[0] == data.capital[0])
      console.log('newData', newData)

      newCoutPop.push({ count: item.name.common, population: newData[0].population })
    })

    let sortedData = newCoutPop.sort((a,b) => {
      if(a.population < b.population) return 1
      else if(a.population > b.population) return -1
      else return 0
    })

    console.log('sortedData : ', sortedData)

    setCountPop(newCoutPop)
  }
  return <div>
    {
      countPop.length > 0 && countPop.map(item => (
        <span style={{display: 'block'}}>{item.count}:  {item.population}</span>
      ))
    }
    
  </div>;
}

export default App;
