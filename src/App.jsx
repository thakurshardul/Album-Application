
import AlbumContainer from "./components/AlbumContainer";
import Header from "./components/Header";
function App() {
  return (
    <div className="relative flex flex-col min-h-[100vh] bg-slate-200 w-full">
    <Header/>
    {/*Header compnent having a simple logo and add new album button, which upon clicking would open AddFormModal component */}
    <AlbumContainer/>
    {/* Album Container will loop over album(state entity) and contain AlbumCard for each album  */}
    </div>
  )
}

export default App
