
import './App.css';
import image  from './imgsrc.jpg'

function Convert() {
  return (
    <div>
      <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
        <h1 className="title red">Votre nom ici</h1>
        <br />
        <img src={image} />
        <br />
        <img src="/imgpublic.jpg" />
      </div>
      <vidéo width={320} height={240} contrôles>
        <source src="maVidéo.mp4" type="video/mp4" />
      </vidéo>
    </div>
  );
}

export default Convert
