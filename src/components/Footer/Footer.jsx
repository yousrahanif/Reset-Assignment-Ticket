const Footer = () => {
  return (
    <div className="text-white">
      <footer className="footer sm:footer-horizontal bg-black text-white p-10">
        <nav>
          <h4 className="text-xl footer-title">CS - Ticket System</h4>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Our Mission</a>
          <a className="link link-hover">Contact Saled</a>
        </nav>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Product & Services</a>
          <a className="link link-hover">Customer Stories</a>
          <a className="link link-hover">Download Apps</a>
        </nav>
        <nav>
          <h6 className="footer-title">Information</h6>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms and Conditions</a>
          <a className="link link-hover">Join Us</a>
        </nav>
      </footer>
      <footer className="footer bg-black text-base-content border-base-300 border-t px-10 py-4">
        <div className="flex  justify-center items-center w-full text-white ">
          <p className=""> © 2025 CS — Ticket System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
