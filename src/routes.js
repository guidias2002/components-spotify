import PaginaCardPlay from "Paginas/PaginaCardPlay";
import CardAlbum from "components/CardAlbum";
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
          <Route path="/cardAlbum" element={<CardAlbum/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

