const Header = () => {
  return (
    <header className="flex h-18 items-center justify-between bg-header md:h-20 lg:fixed lg:inset-y-0 lg:left-0 lg:z-10 lg:w-25.75 lg:flex-col lg:rounded-r-[20px]">
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
          className="cursor-pointer px-6 md:px-8 lg:px-0 lg:py-8"
        >
          <img src="/images/icon-moon.svg" alt="" />
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
