import React from 'react'

const Viewer = ({ title, type, source, setType, setSource }) => {
  const cancelFunction = () => {
    setType('')
    setSource('')
  }

  const switchStatement = () => {
    switch (type) {
      case 'mp4' || '3gp' || 'avi' || 'webm' || 'mkv':
        <div>
          <video src={source}/>;
          <button onClick={cancelFunction}></button>
        </div>
        break;
      case 'mp3' || 'm4a':
        <div>
          <audio src={source} />
          <button onClick={cancelFunction}></button>
        </div>        
        break;
      case 'jpg' || 'jpeg' || 'png':
        <div>
          <img src={source} alt={title}/>;
          <button onClick={cancelFunction}></button>
        </div>
        
        break;
      case 'pdf' || 'txt' || 'doc' || 'docx' || 'pptx' || 'xlsx':
        <div>
          <iframe src={source} title={title}/>;
          <button onClick={cancelFunction}></button>
        </div> 
        break;
    
      default:
        <div>
          File Does Not Match Specified Types: <br /> 
          Audio(mp3, m4a), Video(3gp, avi, mp4, mkv, webm), Image(jpg,jpeg, png), Document(doc, docx, pdf, pptx, txt, xlsx)
        </div>
        break;
    }
  }
  return (
    <div>{switchStatement()}</div>
  )
}

export default Viewer