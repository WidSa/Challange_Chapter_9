export default function Footer() {
  return (
    <footer id="footer">
      <div className="text-light container">
        <hr />
      </div>
      <div className="container footer-link">
        <div className="row justify-content-between">
          <div className="col-lg-4 d-inline">
            <p className="text-light">© 2023 Your Games, inc. All Rights Reserved</p>
          </div>
          <div className="col-lg-5 d-flex justify-content-around">
            <a href="/privacy-policy" className="text-decoration-none link-warning text-light">
              Privacy Policy
            </a>{" "}
            |
            <a href="/toc" className="text-decoration-none link-warning text-light">
              Terms of Services
            </a>{" "}
            |
            <a href="/coc" className="text-decoration-none link-warning text-light">
              Code of Conduct
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
