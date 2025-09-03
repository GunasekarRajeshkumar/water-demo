const NavLink = ({ href, children, onClick, isActive }) => (
  <a
    href={href}
    onClick={onClick}
    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${isActive
      ? 'text-accent-blue dark:text-accent-blue-dark font-semibold'
      : 'text-text-light-theme dark:text-text-dark-theme-muted hover:text-accent-blue dark:hover:text-accent-blue-dark'
      }`}
  >
    {children}
  </a>
);

export default NavLink;
