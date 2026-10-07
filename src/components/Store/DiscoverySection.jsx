function DiscoverySection({ onLogin }) {
  return (
    <section className="px-5 pb-10 pt-2">
      <div className="mx-auto max-w-[1200px]">

        {/* ================= EARN FREE STICKERS ================= */}
        <div className="relative mb-5 h-[82px] overflow-hidden">
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://shared.fastly.steamstatic.com/store_item_assets/steam/clusters/seasonalsales/586fc7dd791c9d03aef33ecf/1f3c228/tiled_bg_english.jpg?t=1790803106')",
            }}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/55" />

          {/* Content */}
          <div className="relative flex h-full items-center px-5">

            {/* Sticker Cards */}
            <div className="relative mr-5 h-[68px] w-[105px] shrink-0">

              <div className="absolute left-0 top-[8px] h-[53px] w-[48px] rotate-[-13deg] overflow-hidden rounded-sm bg-white shadow-lg">
                <img
                  src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/367520/header.jpg"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute left-[28px] top-0 z-10 h-[63px] w-[50px] rotate-[2deg] overflow-hidden rounded-sm bg-white shadow-lg">
                <img
                  src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute right-0 top-[8px] h-[53px] w-[48px] rotate-[13deg] overflow-hidden rounded-sm bg-white shadow-lg">
                <img
                  src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/620/header.jpg"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>

            </div>

            {/* Text */}
            <div>
              <h3 className="text-[18px] font-bold leading-6 text-white">
                Earn free stickers by going through your discovery queue!
              </h3>

              <p className="text-[16px] font-semibold leading-5 text-white">
                Now through Oct 8
              </p>
            </div>

          </div>
        </div>


        {/* ================= EXPLORE DISCOVERY QUEUE ================= */}
        <div className="relative">

          {/* Complete Banner */}
          <div
            className="group relative h-[150px] overflow-hidden transition-transform duration-300 ease-out hover:scale-[1.03]"
          >

            {/* Background Color */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#523878] via-[#345d7e] to-[#244b68]" />

            {/* Artwork */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1091500/header.jpg')",
              }}
            />

            {/* Purple / Blue Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#523878]/95 via-[#315c7d]/85 to-transparent" />

            {/* Content */}
            <div className="relative z-10 flex h-full items-center px-10">
              <div>

                <h2 className="text-[23px] font-bold leading-7 text-white">
                  Explore Your Discovery Queue
                </h2>

                <p className="mt-1 text-[18px] leading-6 text-white">
                  Sign in to discover top-selling, new and recommended titles.
                </p>

                <button
                  onClick={onLogin}
                  className="mt-1 bg-[#1a9fff] px-[18px] py-[8px] text-[14px] font-bold text-white shadow-md transition hover:bg-[#66c0f4]"
                >
                  Sign In
                </button>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default DiscoverySection;