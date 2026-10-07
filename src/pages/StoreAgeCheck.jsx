import { useState } from "react";

function StoreAgeCheck() {
  const [day, setDay] = useState("1");
  const [month, setMonth] = useState("January");
  const [year, setYear] = useState("2026");

  const days = Array.from({ length: 31 }, (_, index) => index + 1);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = Array.from(
    { length: 100 },
    (_, index) => new Date().getFullYear() - index
  );

  const handleViewPage = () => {
    if (!day || !month || !year) return;

    console.log("Birth date:", day, month, year);
  };

  const handleCancel = () => {
    setDay("1");
    setMonth("January");
    setYear("2026");
  };

  return (
    <main className="min-h-[560px] bg-[#1b2838] pb-[150px] text-white">
      <div className="mx-auto min-h-[560px] w-full max-w-[1200px] px-0 pt-[138px]">
        <section className="relative min-h-[418px] border border-[#43576b] px-5">
          
          {/* Cyberpunk Image */}
          <div className="absolute left-1/2 top-[-45px] -translate-x-1/2">
            <img
              src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1091500/capsule_616x353.jpg"
              alt="Cyberpunk 2077"
              className="h-[129px] w-[276px] object-cover shadow-[0_4px_8px_rgba(0,0,0,0.6)]"
            />
          </div>

          {/* Main Content */}
          <div className="flex flex-col items-center pt-[106px] text-center">
            
            <p className="text-[14px] font-bold leading-[20px] text-white">
              This game may contain content not appropriate for all ages,
              <br />
              or may not be appropriate for viewing at work.
            </p>

            <div className="mt-[20px]">
              <p className="text-[12px] leading-[18px] text-[#66a4c8]">
                The developers describe the content like this:
              </p>

              <p className="mt-[1px] max-w-[600px] text-[14px] leading-[20px] text-white">
                “Cyberpunk 2077 contains strong language, intense violence,
                blood and gore, as well
                <br />
                as nudity and sexual material. ”
              </p>
            </div>

            {/* Birthday Box */}
            <div className="mt-[20px] flex h-[76px] w-[575px] flex-col items-center justify-center rounded-[4px] bg-[#344354]">
              <p className="text-[14px] text-[#d6d7d8]">
                Please enter your birth date to continue:
              </p>

              <div className="mt-[8px] flex items-center gap-[4px]">
                <select
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                  className="h-[23px] w-[41px] border-none bg-[#42779a] px-[5px] text-[12px] text-[#66c0f4] outline-none"
                >
                  {days.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>

                <select
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  className="h-[23px] w-[92px] border-none bg-[#42779a] px-[5px] text-[12px] text-[#66c0f4] outline-none"
                >
                  {months.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>

                <select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="h-[23px] w-[56px] border-none bg-[#42779a] px-[5px] text-[12px] text-[#66c0f4] outline-none"
                >
                  {years.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-[36px] flex gap-[12px]">
              <button
                onClick={handleViewPage}
                className="h-[32px] bg-[#264a62] px-[16px] text-[14px] text-[#66c0f4] transition hover:bg-[#315b76] active:scale-[0.98] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#66c0f4]"
              >
                View Page
              </button>

              <button
                onClick={handleCancel}
                className="h-[32px] bg-[#264a62] px-[16px] text-[14px] text-[#66c0f4] transition hover:bg-[#315b76] active:scale-[0.98] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#66c0f4]"
              >
                Cancel
              </button>
            </div>
          </div>
        </section>

        {/* Bottom Text */}
        <p className="mt-[40px] text-center text-[12px] text-[#66a4c8]">
          This data is for verification purposes only and will not be stored.
        </p>
      </div>
    </main>
  );
}

export default StoreAgeCheck;