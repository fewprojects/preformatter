import { useState } from "react";

function Interface() {
  const [code, setCode] = useState('');
  const [isCopied, setIsCopied ]= useState('Copy');

  const handleSubmit = (e)=> {
    e.preventDefault();
    setCode(elem => {
      const newCode = elem.replaceAll('&', '&amp;').replaceAll('<','&lt;').replaceAll('>', '&gt;');
      return newCode
    })
  }

  const copyText = (e) => {
    e.preventDefault();
    var copyText = document.getElementById("textarea");
  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

   /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
    setIsCopied('Copied !')
    
  }
  return (
    <div className="container-980 interface flex-c-m">
      <div className="row">
        <div className="col-6 flex-col-l-m container">
          <h1>Convert <span className="text-gray">{`</>`}</span> to <small><span className="text-gray"><code>{`&lt;/&gt;`}</code></span></small></h1>
          <p className="fw-600">A pre tag formatter for <span className="text-display">developers</span></p>
        </div>
        <div className="col-6 container">
          <form onSubmit={handleSubmit}>
            <textarea id="textarea" placeholder ="Paste your <pre> code here!" value={code} rows="10" onChange={(e) => setCode(e.target.value)}></textarea>
            <button type="submit">Format </button>
            <input type="button" onClick={copyText} value={isCopied}/>
          </form>
        </div>
      </div>
    </div>
    
  );
}

export default Interface;
