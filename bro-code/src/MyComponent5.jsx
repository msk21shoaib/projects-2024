import React, { useState } from 'react';

function MyComponent5() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState('');
  const [carModel, setCarModel] = useState('');

  function handleAddCar() {
    const newCar = {
      year: carYear,
      make: carMake,
      model: carModel,
    };
    setCars(c => [...c, newCar]);
    setCarYear(new Date().getFullYear());
    setCarMake('');
    setCarModel('');
  }

  function handleRemoveCar(index) {
    setCars(c => c.filter((_,i) => i!==index));
  }

  function handleYearChange(event) {
    setCarYear(event.target.value);
  }

  return (
    <div className="main">
      <h1>My Cars</h1>
      <ul>
        {cars.map((car, index) => (
          <li key={index} >
            {car.year} - {car.make} - {car.model}{' '}
            <button className="button1" onClick={() => handleRemoveCar(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <input 
        className="input-space" type="number" value={carYear} onChange={handleYearChange} placeholder="Year"/><br/>
      <input className="input-space" type="text" value={carMake} onChange={(e) => setCarMake(e.target.value)} placeholder="Make" /><br/>
      <input  className="input-space" type="text" value={carModel} onChange={(e) => setCarModel(e.target.value)} placeholder="Model" /><br/>
      <button className="button1"  onClick={handleAddCar}>Add Car</button>
    </div>
  );
}

export default MyComponent5;
