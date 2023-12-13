import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="bg-brand-primary">
            <div className="container px-4 px-lg-5 pt-4 fw-semibold">
                <div className="text-center">
                    <a className="btn btn-social mx-3 my-3" href="https://instagram.com/" target="_blank" rel="noopener noreferrer" title="Instagram">
                        <FontAwesomeIcon icon={faInstagram} size="3x" fixedWidth />
                    </a>
                </div>
                <div className="text-center pt-4 pb-3 fw-normal">
                    <p>Created by <a href="https://zachsheley.com/" target="_blank" rel="noopener noreferrer">Zach Sheley</a></p>
                </div>
            </div>
        </footer>
    );
};
