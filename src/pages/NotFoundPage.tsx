import { Link } from 'react-router';

export default function NotFoundPage() {
  return (
    <main>
      <h2> Error 404 </h2>
      <p> Please return to the homepage</p>
      <Link to ='/'>Home</Link>
    </main>
  );
}