import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router';

export default function Layout() {
  return (
    <>
      <Header title="My Portfolio" />

      <main>
        <Outlet />
      </main>

      <Footer name="Zhansiya Zheldybay" />
    </>
  );
}