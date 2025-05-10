import './App.css'
import PredictorForm from './components/PredictorForm';

function App() {
  return (
    <main className='min-h-screen flex items-center justify-center bg-white text-black'>
      <div className="max-w-md w-full bg-white p-6 rounded shadow-2xl">
        <h1 className="text-5xl font-bold mb-20 text-center text-[#123157]">PICO Y PLACA PREDICTOR</h1>
        <PredictorForm />
      </div>
    </main>
  )
}

export default App
