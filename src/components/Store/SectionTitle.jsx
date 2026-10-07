function SectionTitle({ title, subtitle, action }) {
  return (
    <div className="mb-4 flex items-end justify-between">
      <div>
        <h2 className="text-[22px] font-normal text-white">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-1 text-[13px] text-[#8f98a0]">
            {subtitle}
          </p>
        )}
      </div>

      {action && (
        <button className="text-[12px] text-white hover:text-[#66c0f4] hover:underline">
          {action}
        </button>
      )}
    </div>
  );
}

export default SectionTitle;