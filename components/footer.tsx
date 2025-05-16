import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Qyro-js docs Logo"
            width={30}
            height={30}
            className="h-8 w-8"
          />
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Qyro-js. All rights reserved.
          </p>
        </div>
        <nav className="flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          >
            Terms
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          >
            Privacy
          </Link>
          <Link
            href="https://qyro-js.vercel.app/"
            className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          >
            Docs
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
