import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navigationLinks = [
  { name: "Home", to: "/" },
  { name: "About Us", to: "/about" },
  {
    name: "Our Work",
    to: "/programs",
    children: [
      { name: "Programs", to: "/programs" },
      { name: "Publications", to: "/publications" },
      { name: "Projects", to: "/projects" },
    ],
  },
  { name: "Gallery", to: "/gallery" },
  {
    name: "Join Us",
    to: "/partners",
    children: [
      { name: "Partners", to: "/partners" },
      { name: "Volunteer", to: "/volunteer" },
    ],
  },
  { name: "Donate", to: "/donate" },
];

export default function Nav() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1025px)');
    const handleMediaChange = (event) => {
      if (event.matches) {
        setMenuOpen(false);
      }
    };

    handleMediaChange(mediaQuery);
    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const linkBaseClasses =
    "text-sm font-semibold tracking-wide transition-colors duration-200 ";
  const linkStateClasses = hasScrolled
    ? "text-slate-900 hover:text-slate-700"
    : "text-white hover:text-slate-200";

  return (
    <header className="relative z-50">
      <div className=" h-[30px] bg-white">
        <div className=" px-5 flex h-full items-center justify-between">
          <div className="flex items-center gap-6 text-xs font-medium text-slate-700">
            <div className="flex items-center gap-2">
                <div className="bg-[#01113BB2] w-[6px] h-[6px] rounded-full"></div>

            <a href="mailto:hello@humanjustice.org" 
            className="hover:text-slate-900 text-[#01113BB2] text-[12px] font-normal" 
             target="_blank" rel="noreferrer"
              >
              hello@humanjustice.org
            </a>
            </div>
            <div className="flex items-center gap-2">
                 <div className="hidden sm:inline bg-[#01113BB2] w-[6px] h-[6px] rounded-full"></div>
            <a href="tel:+1234567890" className="hidden sm:inline hover:text-slate-900 text-[#01113BB2] text-[12px] font-normal">
              +1 (234) 567-890
            </a>
            </div>
          </div>
          <div className="flex items-center gap-3 text-xs ">
            
           <div className="w-[22px] h-[22px]  rounded-full border border-[1px] border-[#01113BB2]"></div>
           <div className="w-[22px] h-[22px]  rounded-full border border-[1px] border-[#01113BB2]"></div>
           <div className="w-[22px] h-[22px]  rounded-full border border-[1px] border-[#01113BB2]"></div>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-x-0  border-b border-white/20 transition-colors duration-300 ${
          hasScrolled ? "bg-white shadow-sm top-0" : "bg-transparent top-[30px]"
        }`}
      >
        <div className="relative flex w-full  items-center justify-between px-6 py-4">
            <div className="flex items-center gap-6 min-[1025px]:gap-10"> 
                <button
                  type="button"
                  onClick={toggleMenu}
                  className={`min-[1025px]:hidden ${
                    hasScrolled ? "text-[#01113BB2]" : "text-[#01113BB2]"
                  }`}
                  aria-label="Toggle navigation menu"
                  aria-expanded={menuOpen}
                >
                  <Icon
                    width="30px"
                    height="30px"
                    icon={menuOpen ? "mdi:close" : "mdi-light:menu"}
                    color={hasScrolled ? "#01113B" : "#FFFFFF"}
                  />
                </button>
               <Link
            to="/"
            className={`${
              hasScrolled ? "text-[#01113BB2]" : "text-[ #01113BB2]"
            }`}
          >
            <img className="w-[131px] h-[40px] object-contain" src="/images/logo.png" alt="" />
          </Link>
           <nav className="hidden items-center gap-8 min-[1025px]:flex">
            {navigationLinks.map((item) => (
              <div key={item.name} className="relative group">
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `${linkBaseClasses} ${linkStateClasses} flex items-center gap-1 ${
                      isActive ? "underline decoration-2 underline-offset-8" : ""
                    }`
                  }
                >
                  <span>{item.name}</span>
                  {item.children && (
                    <Icon
                      icon="mdi:chevron-down"
                      className={`h-4 w-4 transition-transform duration-200 ${
                        hasScrolled ? "text-slate-700" : "text-white"
                      } group-hover:-rotate-180`}
                    />
                  )}
                </NavLink>
                {item.children && (
                  <div className="absolute left-0 top-full hidden group-hover:block">
                    <div className="pt-3">
                      <div className="w-48 rounded-xl border border-slate-100 bg-white p-3 shadow-xl">
                        <ul className="flex flex-col gap-2">
                          {item.children.map((child) => (
                            <li key={child.name}>
                              <NavLink
                                to={child.to}
                                className={({ isActive }) =>
                                  `block rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 ${
                                    isActive ? "text-[#246CDA]" : ""
                                  }`
                                }
                              >
                                {child.name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
          </div>

         

          <div className="hidden min-[1025px]:flex">
            <Link
              to="/contact"
              className="rounded-[100px] bg-[#246CDA] w-[174px] h-[52px] flex items-center justify-center text-base font-semibold text-white transition hover:bg-[#1f5ab6]"
            >
              Contact Us
            </Link>
          </div>

          
          <div
            className={`absolute left-0 top-[70px] z-40 h-screen w-[300px] min-[1025px]:hidden transition-transform duration-300 ${
              menuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex h-full flex-col bg-white/95 px-6 pb-8 pt-12 shadow-xl backdrop-blur">
              <nav className="flex flex-col gap-4">
                {navigationLinks.map((item) => (
                  <div key={item.name} className="flex flex-col gap-2">
                    <NavLink
                      to={item.to}
                      onClick={handleLinkClick}
                      className={({ isActive }) =>
                        `${linkBaseClasses} text-[#01113BB2] flex items-center gap-2 ${
                          isActive ? "text-[#246CDA]" : ""
                        }`
                      }
                    >
                      <span>{item.name}</span>
                      {item.children && (
                        <Icon icon="mdi:chevron-down" className="h-4 w-4" />
                      )}
                    </NavLink>
                    {item.children && (
                      <div className="flex flex-col gap-2 pl-5">
                        {item.children.map((child) => (
                          <NavLink
                            key={child.name}
                            to={child.to}
                            onClick={handleLinkClick}
                            className={({ isActive }) =>
                              `text-sm font-medium text-[#01113BB2] transition hover:text-[#246CDA] ${
                                isActive ? "text-[#246CDA]" : ""
                              }`
                            }
                          >
                            {child.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <NavLink
                  to="/contact"
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    `${linkBaseClasses} text-[#01113BB2] flex items-center gap-2 ${
                      isActive ? "text-[#246CDA]" : ""
                    }`
                  }
                >
                  Contact Us
                </NavLink>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
