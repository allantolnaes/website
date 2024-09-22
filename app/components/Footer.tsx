const Footer = () => {
  return (
    <footer className="bg-purple-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} Allan Tolnæs. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
