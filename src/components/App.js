// create your App component here
import React, {useState, useEffect} from 'react'

function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const apiUrl = 'https://dog.ceo/api/breeds/image/random';
  
    useEffect(() => {
      fetch(apiUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setData(data);
          setLoading(false);
          console.log(data)
        })
        .catch(error => {
          setError(error);
          setLoading(false);
        });
    }, []);
  
    if (loading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>Error: {error.message}</p>;
    }
  return (
    <div>
        <img src={data.message} alt='A Random Dog'/>
    </div>
  )
}

export default App
