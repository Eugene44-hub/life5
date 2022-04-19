import Nav from "./components/Nav/Nav";
import MusicPlayer from './components/MusicPlayer/MusicPlayer'
import NewLife from "./assets/images/NEW SINGLE.svg"
import Platform from "./assets/images/platforms.svg"
import Happy from "./assets/images/Happy.png"
function App() {
  return (
    <div className="App fixed h-full w-full">
   <Nav/>

   <div className='text-white  top-[50%] text-center left-[30%] translate-y-[-50%]  translate-x-[-30%] fixed'>
    <div className="m-auto">
    <img src={NewLife} className="my-2"/>
    <img  src={Platform} className="w-[70%] my-2"/>
    <img src={Happy} />

    </div>

<MusicPlayer/>

</div>

    </div>
  );
}

export default App;
