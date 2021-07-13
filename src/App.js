import img from './molk.jpg'
import './App.css';
import   './style.css'

function App() {
  return (
    <div >
    <div className="App">
     <div style={{border:'solid 1px black',maxWidth:'100vw'}}></div>
     <h1 className='title red'>Your name here</h1>
     < br />
     <img className="img"
     src="/imgpub.jpg"></img>
     <br/>
     <img className="image"
     src={img}></img>
     
     </div>
     <video width="320" height="240" controls>

 <source src="myVideo.mp4" type="video/mp4" >
   </source>

</video>
</div>
    
  );
}

export default App;
