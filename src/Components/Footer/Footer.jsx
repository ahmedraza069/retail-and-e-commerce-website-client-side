
/* eslint-disable react/no-unknown-property */

import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="footer items-center p-4 bg-[#24242f] text-white">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
            <div>
            <img className="w-20" src="https://i.ibb.co/R68BPTx/Untitled-removebg-preview-1.png" alt="logo" />
          </div>
    <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2023 E-MarketWave Management System —
      <a href="https://twitter.com/knyttneve" className="text-gray-400 ml-1" rel="noopener noreferrer" target="_blank">&copy; Md. Rakibul Hasan Raza</a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
    <div class="flex mt-3 -mx-2 sm:mt-0">
                <Link to={'/'} class="mx-2 text-sm text-white transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Home </Link>

                <Link to={'/'} class="mx-2 text-sm text-white transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Privacy </Link>

                <Link to={'/'} class="mx-2 text-sm text-white transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Cookies </Link>
            </div>
    </span>
  </div>
</footer>
        </div>
    );
};

export default Footer;