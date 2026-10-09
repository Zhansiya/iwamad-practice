type FooterProps = {
  name: string;
};

function Footer({ name }: FooterProps) {
  return (
    <footer>
      <p>&copy; 2026 {name}</p>
    </footer>
  );
}

export default Footer;