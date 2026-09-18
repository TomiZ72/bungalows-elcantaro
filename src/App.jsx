
import { Link, Route, Routes } from 'react-router-dom';
import { Home } from './views/Home.jsx'
import { Bungalows } from './views/Bungalows.jsx'
import { Contact } from './views/Contact.jsx'
import { NotFound } from './views/NotFound.jsx'
import { Header } from './components/Header.jsx'


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bungalows" element={<Bungalows />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
export { App }