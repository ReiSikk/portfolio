import { useTranslation } from "react-i18next";

function Footer() {
  const {t} = useTranslation();
  const {reachMe, messageMe, copyright, linkedIn } = t("footer");
  return (
    <footer>
        <div className="footer-upper">
            <p>{reachMe} <span className="email-link"><a href="mailto:sikkrei@gmail.com">sikkrei@gmail.com</a></span></p>
        </div>
            <div className="border-footer"></div>
        <div className="footer-lower">
            <p>{messageMe} <span><a href="https://www.linkedin.com/in/rei-sikk-a642b9218/" target="_blank" rel="noreferrer" className="email-link footer-link">{linkedIn}</a></span></p>
        </div>
            <p className="copyright">{copyright}</p>
    </footer>
  )
}

export default Footer