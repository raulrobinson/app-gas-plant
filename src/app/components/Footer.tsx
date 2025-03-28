import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from "@fortawesome/free-solid-svg-icons/faTools";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="text-gray-800 relative bottom-0 left-0 w-full text-center flex flex-col items-center">
            <div className="text-center py-2 px-2 rounded-lg mx-2 my-2">
                <p className="flex items-center justify-center text-xs whitespace-nowrap">
                    development{' '}
                    <FontAwesomeIcon
                        icon={faTools}
                        style={{
                            color: 'orange',
                            width: '1rem',
                        }}
                        className="mx-1"
                    />
                    by
                </p>
                <p className="flex items-center font-bold justify-center text-xs whitespace-nowrap">
                    Raul Bolivar Navas
                </p>
                <p className="flex items-center justify-center text-xs whitespace-nowrap">
                    <a href="https://rasysbox.com" target="_blank" rel="noreferrer">rasysbox.com</a>
                </p>
                <p className="flex items-center justify-center text-xs whitespace-nowrap">
                    @ {currentYear}
                </p>
            </div>
        </footer>
    );
}

export default Footer;
