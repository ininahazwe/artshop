import "./style.css";

const Footer = () => {
  const date = new Date();
  const fullYear = date.getFullYear();
  return (
    <footer className="footer">
      <p>
          All &copy; copy rights are reserved to <a href="www.shari.fr">Yves</a> {fullYear}
      </p>
    </footer>
  );
};

export default Footer;
