import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <ProfileCard
        name="Zhansiya Zheldybay"
        bio="Hi! I'm Zhansiya, a third-year IT Management student at KBTU. I'm interested in technology, digital products, and web development."
        avatarUrl="/images.png"
      />
      <Footer />
    </>
  );
}

export default App;