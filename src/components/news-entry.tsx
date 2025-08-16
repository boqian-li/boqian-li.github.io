import { ArrowUpRight } from "lucide-react";
import { News } from "@/data/news";

export function NewsEntry({
  news,
}: {
  news: News;
}) {
  return (
    <div className={`flex flex-row gap-4 pb-2 border-b border-zinc-100 last:border-b-0 ${
      news.pinned ? 'bg-blue-50/50 -mx-4 px-4 py-2 border-l-4 border-l-blue-400' : ''
    }`}>
      <p className="text-sm font-mono text-[#1e86c8] whitespace-nowrap flex items-center gap-2">
        {news.pinned && (
          <span className="text-sm [filter:hue-rotate(195deg)_saturate(70%)_brightness(115%)]">📌</span>
        )}
        {news.date}
      </p>
      <p 
        className="text-sm text-zinc-600 [&_a]:text-[#1e86c8] [&_a]:font-bold [&_a:hover]:text-blue-400"
        dangerouslySetInnerHTML={{ __html: news.description }}
      />
    </div>
  );
}