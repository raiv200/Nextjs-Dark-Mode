const Footer = () => {
  return (
    <footer className="px-4 sm:px-6 py-6 mt-24">
      <div className="text-center text-sm text-gray-500">
        <span className="dark:text-gray-100 text-gray-900 font-bold text-lg mr-2"> Next.js Dev</span>   &copy; {new Date().getFullYear()}   All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
