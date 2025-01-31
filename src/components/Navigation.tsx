import React from 'react';

const Navigation = () => {
  const links = [
    { name: 'Home', href: '#' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="text-white hover:text-gold transition-colors duration-300 font-sans"
        >
          {link.name}
        </a>
      ))}
    </>
  );
};

export default Navigation;