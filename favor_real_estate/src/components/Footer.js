import { Link } from "react-router-dom";

const Footer = () => {
    return (
    <div style={{ background: 'rgb(61, 61, 126)' }}>
      <footer className="px-8 py-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 md:py-16 gap-y-4">
            <div className="my-4">
              <div className="uppercase font-semibold mb-2">Vibes Propertiess</div>
              <p>The best website to buy long-lasting homes</p>
            </div>
            <div className="my-4">
              <h3 className="uppercase font-semibold mb-2">Links</h3>
              <div className="space-y-2">
                <Link to="/" className="hover:text-gray-100">
                <a href="Hero.js">Home</a>
                </Link>
                <p>
                </p>
                <p>
                  <a href="">About</a>
                </p>
                <Link to="/contact" className="hover:text-gray-100">
                  <a href="Hero.js">Contact</a>
                </Link>
              </div>
            </div>
            <div className="my-4">
              <h3 className="uppercase font-semibold mb-2">Support</h3>
              <div className="space-y-2">
                <p>
                  <a href="#!">FAQs</a>
                </p>
                <p>
                  <a href="#!">Support</a>
                </p>
                <p>
                  <a href="#!">Help Center</a>
                </p>
              </div>
            </div>
            <div className="my-4">
              <h3 className="uppercase font-semibold mb-2">Contact</h3>
              <div className="space-y-2">
                <p>
                  <a href="#!">Email</a>
                </p>
                <p>
                  <a href="#!">Phone</a>
                </p>
                <p>
                  <a href="#!">Address</a>
                </p>
                <p>
                  <a href="#!">Inquiries</a>
                </p>
              </div>
            </div>
          </div>
  
          <hr className="my-2 border-blue-600 sm:mx-auto" />
  
          <span className="block text-sm text-gray-400 text-center">
            COPYRIGHT © 2023{' '}
            <a href="https://flowbite.com/" className="uppercase">
              Vibes Propertiess™
            </a>{' '}
            | ALL RIGHTS RESERVED.
          </span>
  
          <div className="flex justify-center pt-4 pb-8 space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="ml-1">Facebook</span>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M20 12c0 5.514-4.486 10-10 10S0 17.514 0 12c0-5.36 4.14-9.72 9.385-10v4.406H6.903v3.875H9.38V12c0 1.917 1.583 3.5 3.5 3.5s3.5-1.583 3.5-3.5c0-1.337-.606-2.516-1.557-3.313.097-.285.157-.597.157-.937 0-1.396-1.129-2.5-2.5-2.5s-2.5 1.104-2.5 2.5c0 .34.06.652.157.937C8.128 6.484 7.522 7.663 7.522 9c0 1.917 1.583 3.5 3.5 3.5s3.5-1.583 3.5-3.5c0-.34-.06-.652-.157-.937C17.872 8.484 18.478 7.305 18.478 6c0-1.396-1.129-2.5-2.5-2.5s-2.5 1.104-2.5 2.5v1.406h-2.482V2c5.245.28 9.385 4.64 9.385 10z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="ml-1">Twitter</span>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.5 17.002C11.54 19.981 7.07 18.902 4 15.845c.628-.19 1.223-.39 1.775-.637-.629.406-1.076.64-1.775.775-.64-.63-.964-1.237-1.088-1.842C2.516 12.98 2.84 13 3 13c.337 0 .682-.063 1.038-.19-1.135-.227-1.925-1.077-1.925-2.114.195.1.402.15.65.15.328 0 .64-.15.978-.443-.1.282-.113.524-.113.73 0 1.136.888 2.07 1.963 2.07-.527-.472-.965-1.116-1.053-1.8.335.185.7.3 1.088.31-1.418-1.194-.643-3.23 1.418-3.23.42 0 .84.145 1.164.378.355-.036.71-.1 1.077-.2-.19.535-.177 1.03-.033 1.586C9.614 11.05 12.524 10 15.29 10c.31 0 .617.03.922.087.528-.7 1.256-1.153 2.075-1.153-.53.358-.968.847-1.154 1.388.736-.038 1.438-.227 2.086-.564-.244.78-.963 1.368-1.848 1.38.855.54 1.9.84 2.993.84 3.88 0 6.005-3.208 6.005-6.005l-.006-.273C21.005 8.52 20.505 7.016 19 6c-.43.722-.97 1.35-1.597 1.847z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="ml-1">Instagram</span>
            </a>
          </div>
        </footer>
      </div>
    );
  };
  export default Footer;