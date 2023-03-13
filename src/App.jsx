import { useEffect, useState } from 'react'
import logo from "./assets/logo.png"
import './App.css'
import { Card, CardContent, CircularProgress } from '@mui/material';
import { FitnessCenter } from '@mui/icons-material';

const App = () => {
  const [fitData, setFitData] = useState([]);
  const [muscle, setMuscle] = useState("biceps");
  const [loading, setLoading] = useState(false);

  const fetchApi = async () => {
    const res = await fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`, {
      method: "GET",
      headers: { 
        'X-Api-Key': "Bo95NtASMIVsW2ixseumQA==W2bxTx1aCo7Ejk2C"
      },
    });
    
    return res.json();
  }

  const fetchData = async () => {
    setLoading(true)

    const data = await fetchApi();

    setFitData(data)
    setLoading(false);

  }

  useEffect(() => {
    fetchData();
  }, [muscle])

  console.log(fitData);

  

  return (
    <div className="app">
      <div className="heroBanner">
          <nav>
            <img className='logo' src={logo} alt="" />
            <h1>Fitness</h1>
          </nav>
      <div className='homeContents'>
        <h1>Your home fitness hub!</h1>
        <p>Being a fitness geek is a good thing, as it helps to keep your body healthy and strong. Nowadays, many individuals are becoming more conscious about their health and fitness.</p>
      </div>
      </div>

      <div className="actionBtn">
      <span onClick={() => setMuscle("biceps")}>
        biceps
        </span>
        <span onClick={() => setMuscle("hamstrings")}>hamstrings</span>
        <span onClick={() => setMuscle("chest")}>chest</span>
        <span onClick={() => setMuscle("triceps")}>triceps</span>

        <span onClick={() => setMuscle("abdominals")}>
        abdominals
        </span>
        <span onClick={() => setMuscle("calves")}>calves</span>
        <span onClick={() => setMuscle("forearms")}>forearms</span>
        <span onClick={() => setMuscle("lats")}>lats</span>

        <span onClick={() => setMuscle("glutes")}>
        glutes
        </span>
        <span onClick={() => setMuscle("lower_back")}>lower_back</span>
        <span onClick={() => setMuscle("middle_back")}>middle_back</span>
        <span onClick={() => setMuscle("neck")}>neck</span>

        
      </div>

      {loading && (
         <CircularProgress sx={{ marginLeft: "15px" }} />
      )}

      <div className='fitCards'>
          {fitData.map((f) => (
        <Card sx={{ width: "100%", marginBottom: 3, bgcolor: "#ffffffc4" }}>
            <CardContent key={f.name}>
              <h4>{f.name}</h4>
              <span>Instructions: </span>
              <p>{f.instructions}</p>
            </CardContent>
        </Card>
          ))}
      </div>

      
    </div>
  )
}

export default App
