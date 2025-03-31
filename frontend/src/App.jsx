import NavBar from './components/NavBar'
import GifContainer from './components/GifContainer'
import GifSearch from './components/GifSearch';

function App() {
  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <div className="ui container">
        <GifSearch></GifSearch>
        <br></br>
        <GifContainer />
      </div>
    </div>
  );
}

export default App;
