import './App.css';
import axios from 'axios';


import { useState } from "react";

function App() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('Your short Url');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`).then((res)=>{
      setShortUrl(res.data.result.short_link)
      setUrl("")
    }).catch((err)=>{
      alert(err)
    })
  }
  const handleCopy = ()=>{
    navigator.clipboard.writeText(shortUrl);
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
      <input
       type="text" 
       className="inputBox"
       required 
       value={url}
       onChange={(e) => setUrl(e.target.value)}
       />
      <input type="submit" value="Shorten It" className="submitBox"/>
      </form>
<div className="input_copy_wrapper responseBox">
  <div className="input_copy">
    <span className="resp" value="hello">{shortUrl}</span>
    <span className="icon right">
     <img src="http://clipground.com/images/copy-4.png" 
          title="Click to Copy"
          onClick={handleCopy}
      />
    </span>
  </div>
  
</div>
    </div>
  );
}

export default App;
