import PaginaCardAlbum from "Paginas/PaginaCardAlbum";
import PaginaCardPlay from "Paginas/PaginaCardPlay";
import Header from "components/Header";
import PaginaPadrao from "components/PaginaPadrao";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<PaginaPadrao/>}>
          <Route index element={<PaginaCardPlay/>}/>
          <Route path="/cardAlbum" element={<PaginaCardAlbum/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

