import React, { useState } from 'react';
import { canDrive } from '../utils/picoYPlacaRules';

const PredictorForm = () => {
  const [plate, setPlate] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the plate format
    const plateRegex = /^[A-Z]{3}-\d{3,4}$/;
    if (!plateRegex.test(plate.trim().toUpperCase())) {
      setResult('❌ Invalid plate format. Use XXX-123 or XXX-1234');
      return;
    }

    const allowed = canDrive(plate, date, time);
    setResult(allowed ? '✅ Able to drive' : '❌ Not able to drive');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <div>
        <label className="block font-light">Plate number</label>
        <input
          type="text"
          placeholder="ABC-1234"
          value={plate}
          onChange={(e) => setPlate(e.target.value)}
          required
          className="border rounded p-2 w-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>
      <div>
        <label className="block font-light">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="border rounded p-2 w-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>
      <div>
        <label className="block font-light">Hour</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          className="border rounded p-2 w-full border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>
      <button type="submit" className="bg-[#2c62d7] font-bold text-white p-2 rounded w-full">
        Verify
      </button>

      {result && <div className="mt-4 text-lg font-bold text-center">{result}</div>}
    </form>
  );
};

export default PredictorForm;
