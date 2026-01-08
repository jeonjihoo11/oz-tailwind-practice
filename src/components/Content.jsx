export default function Content({ content }) {
  return (
    <div className="flex flex-col items-start gap-1">
      <img src={content.img} alt={content.title} />
      <span className="text-[12px] text-[#d7fa00] border border-[#d7fa00] px-[5px] py-[4px] rounded-[3px]">
        모집중
      </span>
      <div className="text-[18px] font-semibold">{content.title}</div>
      <p className="text-[12px] text-gray-400">{content.subtitle}</p>
    </div>
  );
}
