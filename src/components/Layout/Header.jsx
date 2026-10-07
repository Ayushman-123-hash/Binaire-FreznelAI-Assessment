import { useState } from "react";

function Header({ onLogin }) {
  const [showLanguage, setShowLanguage] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <>
      <header className="relative z-50 h-[104px] bg-[#171d25]">
        <div className="mx-auto flex h-full w-full max-w-[1200px] items-start justify-between px-0">
          <div className="flex items-center pt-[31px]">
            <img
              src="https://store.cloudflare.steamstatic.com/public/shared/images/header/logo_steam.svg"
              alt="Steam"
              className="h-auto w-[176px]"
            />

            <nav className="ml-[30px] flex items-center gap-[18px] text-[16px]">
              <button className="border-b-2 border-[#1a9fff] pb-1 text-[#1a9fff]">
                STORE
              </button>

              <button className="text-[#d6d7d8] transition hover:text-[#1a9fff]">
                COMMUNITY
              </button>

              <button className="text-[#d6d7d8] transition hover:text-[#1a9fff]">
                ABOUT
              </button>

              <button className="text-[#d6d7d8] transition hover:text-[#1a9fff]">
                SUPPORT
              </button>
            </nav>
          </div>

          <div className="flex items-start gap-[5px] pt-[9px] text-[12px]">
            <button className="flex h-[24px] items-center bg-[#75a300] px-[10px] text-[#e5f2c4] transition hover:bg-[#8fbe00]">
              Install Steam
            </button>

            <button
              onClick={onLogin}
              className="px-[6px] py-[4px] text-[#d6d7d8] hover:text-white"
            >
              sign in
            </button>

            <span className="px-[2px] py-[4px] text-[#666]">|</span>

            <div className="relative">
              <button
                onClick={() => setShowLanguage(!showLanguage)}
                className="px-[5px] py-[4px] text-[#d6d7d8] hover:text-white"
              >
                language
                <span className="ml-1 text-[9px]">▼</span>
              </button>

              {showLanguage && (
                <div className="absolute right-0 top-[28px] z-50 w-[130px] bg-[#171d25] p-1 shadow-xl">
                  <button className="block w-full px-3 py-2 text-left text-xs text-white hover:bg-[#2a475e]">
                    English
                  </button>

                  <button className="block w-full px-3 py-2 text-left text-xs text-white hover:bg-[#2a475e]">
                    हिन्दी
                  </button>

                  <button className="block w-full px-3 py-2 text-left text-xs text-white hover:bg-[#2a475e]">
                    日本語
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* ONLY CHANGE: sticky added to this row */}
      <div className="sticky top-0 z-50 h-[47px] bg-[#1b2838]">
        <div className="mx-auto flex h-full w-full max-w-[1200px] items-center justify-between">
          <nav className="flex h-full items-center gap-[27px] text-[14px]">
            <button className="text-white transition hover:text-[#67c1f5]">
              Browse
              <span className="ml-1 text-[10px]">▼</span>
            </button>

            <button className="text-white transition hover:text-[#67c1f5]">
              Recommendations
              <span className="ml-1 text-[10px]">▼</span>
            </button>

            <button className="text-white transition hover:text-[#67c1f5]">
              Categories
              <span className="ml-1 text-[10px]">▼</span>
            </button>

            <button className="text-white transition hover:text-[#67c1f5]">
              Ways to Play
              <span className="ml-1 text-[10px]">▼</span>
            </button>

            <button className="text-white transition hover:text-[#67c1f5]">
              Special Sections
              <span className="ml-1 text-[10px]">▼</span>
            </button>
          </nav>

          <div className="flex h-[34px] w-[480px]">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search the store"
              className="w-full border border-[#66a4c8] bg-[#d6d7d8] px-3 text-[14px] text-gray-800 outline-none placeholder:text-gray-500 focus:border-[#1a9fff]"
            />

            <button
              className="flex w-[45px] items-center justify-center bg-[#1a9fff] transition hover:bg-[#66c0f4]"
              aria-label="Search"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20L16 16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;