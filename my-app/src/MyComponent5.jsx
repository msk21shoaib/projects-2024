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
    setCars([...cars, newCar]);
    setCarYear(new Date().getFullYear());
    setCarMake('');
    setCarModel('');
  }

  function handleRemoveCar(index) {
    const updatedCars = [...cars];
    updatedCars.splice(index, 1);
    setCars(updatedCars);
  }

  function handleYearChange(event) {
    const yearValue = event.target.value;
    setCarYear(yearValue);
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
        className="input-space"
        type="number"
        value={carYear}
        onChange={handleYearChange}
        placeholder="Year"
      />
      <input 
        className="input-space"
        type="text"
        value={carMake}
        onChange={(e) => setCarMake(e.target.value)}
        placeholder="Make"
      />
      <input 
        className="input-space"
        type="text"
        value={carModel}
        onChange={(e) => setCarModel(e.target.value)}
        placeholder="Model"
      />
      <button className="button1"  onClick={handleAddCar}>Add Car</button>
    </div>
  );
}

export default MyComponent5;
