function Footer() {
  return (
    <footer className="bg-[#101923] text-[#8f98a0]">
      <div className="mx-auto max-w-[1066px] px-0 py-[38px]">

        <div className="grid grid-cols-[410px_150px_120px_150px_150px] gap-0">

          {/* ================= STEAM / VALVE ================= */}
          <div>
            <div className="flex items-center">

              <img
                src="https://store.cloudflare.steamstatic.com/public/shared/images/header/logo_steam.svg"
                alt="Steam"
                className="h-auto w-[143px] opacity-80"
              />

              <span className="mx-[25px] text-[26px] font-light text-[#4b555e]">
                |
              </span>

              <div className="border border-[#59636c] px-[7px] py-[1px] text-[24px] font-bold tracking-[4px] text-[#8f98a0]">
                VALVE
              </div>

            </div>

            <p className="mt-[30px] max-w-[350px] text-[12px] leading-[17px] text-[#8f98a0]">
              © 2026 Valve Corporation. All rights reserved. All trademarks
              are property of their respective owners in the US and other
              countries.
            </p>

            <p className="mt-[1px] text-[12px] leading-[17px] text-[#8f98a0]">
              VAT included in all prices where applicable.
            </p>

            {/* Social Icons */}
            <div className="mt-[22px] flex items-center gap-[25px]">

              {/* YouTube */}
              <button
                aria-label="YouTube"
                className="text-[#8f98a0] transition hover:text-white"
              >
                <svg
                  width="30"
                  height="22"
                  viewBox="0 0 30 22"
                  fill="currentColor"
                >
                  <path d="M28.4 3.2c-.3-1.2-1.3-2.1-2.5-2.4C23.7.2 15 .2 15 .2S6.3.2 4.1.8C2.9 1.1 1.9 2 1.6 3.2.9 5.4.9 11 .9 11s0 5.6.7 7.8c.3 1.2 1.3 2.1 2.5 2.4 2.2.6 10.9.6 10.9.6s8.7 0 10.9-.6c1.2-.3 2.2-1.2 2.5-2.4.7-2.2.7-7.8.7-7.8s0-5.6-.7-7.8ZM12 15.8V6.2l8 4.8-8 4.8Z" />
                </svg>
              </button>

              {/* Butterfly */}
              <button
                aria-label="Social"
                className="text-[#8f98a0] transition hover:text-white"
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="currentColor"
                >
                  <path d="M12.5 10.3C10.5 5.5 7.8 3.1 5.1 3.1 2.8 3.1 1 4.7 1 7c0 2.9 2.6 4.5 5.4 5.1-2.8.7-4.7 2.2-4.7 4.4 0 2.2 1.8 3.7 4.1 3.7 3.1 0 5.2-3.2 6.7-6.7 1.5 3.5 3.6 6.7 6.7 6.7 2.3 0 4.1-1.5 4.1-3.7 0-2.2-1.9-3.7-4.7-4.4C21.4 11.5 24 9.9 24 7c0-2.3-1.8-3.9-4.1-3.9-2.7 0-5.4 2.4-7.4 7.2Z" />
                </svg>
              </button>

              {/* Facebook */}
              <button
                aria-label="Facebook"
                className="text-[#8f98a0] transition hover:text-white"
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="currentColor"
                >
                  <circle cx="12.5" cy="12.5" r="11.5" />
                  <path
                    d="M14.2 8.2h2.1V5.1c-.4-.1-1.7-.2-3.1-.2-3.1 0-5.2 1.9-5.2 5.3v3h-3.1v3.5H8v8.5h3.8v-8.5h3.1l.5-3.5h-3.6v-2.7c0-1 .3-1.7 1.7-1.7h.7Z"
                    fill="#101923"
                  />
                </svg>
              </button>

              {/* X */}
              <button
                aria-label="X"
                className="text-[#8f98a0] transition hover:text-white"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4l16 16M20 4L4 20" />
                </svg>
              </button>

            </div>
          </div>

          {/* ================= STEAM ================= */}
          <div>
            <h3 className="mb-[17px] text-[13px] font-bold uppercase text-white">
              Steam
            </h3>

            <div className="space-y-[14px] text-[13px]">
              <button className="block transition hover:text-white">
                About Steam
              </button>

              <button className="block transition hover:text-white">
                Steam SSa
              </button>

              <button className="block transition hover:text-white">
                Steamworks
              </button>

              <button className="block transition hover:text-white">
                Steam Distribution
              </button>

              <button className="block transition hover:text-white">
                Gift Cards
              </button>
            </div>
          </div>

          {/* ================= VALVE ================= */}
          <div>
            <h3 className="mb-[17px] text-[13px] font-bold uppercase text-white">
              Valve
            </h3>

            <div className="space-y-[14px] text-[13px]">
              <button className="block transition hover:text-white">
                About Valve
              </button>

              <button className="block transition hover:text-white">
                Jobs
              </button>

              <button className="block transition hover:text-white">
                Hardware
              </button>

              <button className="block transition hover:text-white">
                Recycling
              </button>
            </div>
          </div>

          {/* ================= LEGAL ================= */}
          <div>
            <h3 className="mb-[17px] text-[13px] font-bold uppercase text-white">
              Legal
            </h3>

            <div className="space-y-[14px] text-[13px]">
              <button className="block transition hover:text-white">
                Privacy
              </button>

              <button className="block transition hover:text-white">
                Accessibility
              </button>

              <button className="block transition hover:text-white">
                Notices & Policies
              </button>

              <button className="block transition hover:text-white">
                Cookies
              </button>

              <button className="block transition hover:text-white">
                Refunds
              </button>
            </div>
          </div>

          {/* ================= MORE ================= */}
          <div>
            <h3 className="mb-[17px] text-[13px] font-bold uppercase text-white">
              More
            </h3>

            <div className="space-y-[14px] text-[13px]">
              <button className="block transition hover:text-white">
                Get Steam
              </button>

              <button className="block transition hover:text-white">
                Get Mobile Apps
              </button>

              <button className="block transition hover:text-white">
                Get Support
              </button>

              <button className="block transition hover:text-white">
                My Account
              </button>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;