import { useEffect, useRef, useState } from "react";

const getInitialDark = (): boolean => {
  try {
    return localStorage.getItem("theme") === "dark";
  } catch {
    return false;
  }
};

const Header = () => {
  const [isDark, setIsDark] = useState(getInitialDark);
  const openPopovers = useRef<HTMLElement[]>([]);
  const scrollPositions = useRef<[Element, number][]>([]);

  // popover="auto" closes on any outside click, so remember what was open
  // before the click and reopen it after toggling the theme
  const rememberOpenPopovers = () => {
    openPopovers.current = [
      ...document.querySelectorAll<HTMLElement>(":popover-open"),
    ];
    scrollPositions.current = openPopovers.current
      .flatMap((popover) => [...popover.querySelectorAll("*")])
      .filter((el) => el.scrollTop > 0)
      .map((el) => [el, el.scrollTop]);
  };

  const handleToggleTheme = () => {
    setIsDark((prev) => !prev);
    openPopovers.current.forEach((popover) => {
      if (!popover.matches(":popover-open")) popover.showPopover();
    });
    scrollPositions.current.forEach(([el, top]) => {
      el.scrollTop = top;
    });
    openPopovers.current = [];
    scrollPositions.current = [];
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      // storage unavailable — theme just won't be remembered
    }
  }, [isDark]);

  return (
    <header className="flex h-18 items-center justify-between bg-header md:h-20 lg:fixed lg:inset-y-0 lg:left-0 lg:z-10 lg:h-auto lg:w-25.75 lg:flex-col lg:rounded-r-[20px]">
      <div className="relative flex size-18 items-center justify-center overflow-hidden rounded-r-[20px] bg-btn md:size-20 lg:size-25.75">
        <span className="absolute inset-x-0 bottom-0 h-1/2 rounded-tl-[20px] bg-deleteHover" />
        <img
          src="/images/logo.svg"
          alt="Logo"
          className="relative w-7 md:w-8 lg:w-10"
        />
      </div>

      <div className="flex h-full items-center lg:h-auto lg:w-full lg:flex-col">
        <button
          type="button"
          aria-label="Toggle theme"
          onPointerDown={rememberOpenPopovers}
          onClick={handleToggleTheme}
          className="cursor-pointer px-6 md:px-8 lg:px-0 lg:py-8"
        >
          <img
            src={isDark ? "/images/icon-sun.svg" : "/images/icon-moon.svg"}
            alt=""
          />
        </button>
        <span className="h-full w-px bg-header-divider lg:h-px lg:w-full" />
        <div className="px-6 md:px-8 lg:px-0 lg:py-6">
          <img
            src="/images/image-avatar.jpg"
            alt="Avatar"
            className="size-8 rounded-full lg:size-10"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
