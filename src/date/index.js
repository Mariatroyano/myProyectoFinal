// import ReactDOM from 'recat-dom';

import { useEffect, useState } from "react";
//import { Route, BrowserRouter as Router,Router,Router } from "react-router-dom";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function getData() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      setData(data);
    } catch (error) {
      setError(true);
      // console.log(error)
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return { data, loading, error };
};
// ReactDOM.render(
//     <Router>
//         <Routes>
//             <Route path="/" element={<login/>}/>
//             <Route path="/login" element={<login/>}/>
//             <Route path="/register" element={<Register/>}/>
//             <Route path="/products" element={<App/>}/>
//         </Routes>
//     </Router>,
//     document.getElementById('root')
// );