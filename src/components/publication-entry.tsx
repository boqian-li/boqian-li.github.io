import Image from "next/image";
import { ArrowUpRight, StickyNote, Video, Code, Globe } from "lucide-react";
import { Publication } from "@/data/publication";

export function PublicationEntry({
  publication,
}: {
  publication: Publication;
}) {
  return (
    <div className="flex flex-col sm:flex-row gap-6">
      {publication.imageUrl && (
        <div className="w-full sm:w-1/4 min-w-[160px] relative">
          <Image
            src={publication.imageUrl}
            alt={publication.title}
            width={160}
            height={200}
            className="rounded-md transition-all duration-300"
          />
        </div>
      )}
      <div className="flex flex-col flex-1">
        <h3 className="font-serif text-lg mb-1 font-bold">{publication.title}</h3>
        <div className="flex flex-row gap-4 items-center mb-1">
          <p className="text-sm italic">
            <span className="text-blue-500">
              {publication.conference} {publication.year}
            </span> 
          </p>
          {publication.award && (
            <div className="group flex px-2 py-1 bg-gradient-to-r from-amber-50 to-rose-50 rounded-md items-center shadow-md border border-amber-100/50 relative overflow-hidden hover:rotate-1 transition-all duration-300">
              <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/90 to-transparent" />
              <p className="text-sm text-amber-700 font-medium relative">
                {publication.award}
              </p>
            </div>
          )}
        </div>
        <p className="text-sm mb-3" dangerouslySetInnerHTML={{ __html: publication.authors }} />
        <div className="flex flex-row gap-4">
          {publication.projectUrl && (
            <a
              href={publication.projectUrl}
              className="group inline-flex items-center gap-2 text-sm font-bold"
              target="_blank"
            >
              <Globe
                size={12}
                className="text-black group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase text-sm hover:text-zinc-500 transition-colors duration-300 underline">Project Page</span>
            </a>
          )}
          {publication.paperUrl && (
            <a
              href={publication.paperUrl}
              className="group inline-flex items-center gap-2 text-sm font-bold"
              target="_blank"
            >
              <StickyNote
                size={12}
                className="text-black group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase text-sm hover:text-zinc-500 transition-colors duration-300 underline">Paper</span>
            </a>
          )}
          {publication.videoUrl && (
            <a
              href={publication.videoUrl}
              className="group inline-flex items-center gap-2 text-sm font-bold"
              target="_blank"
            >
              <Video
                size={12}
                className="text-black group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase text-sm hover:text-zinc-500 transition-colors duration-300 underline">Video</span>
            </a>
          )}
          {publication.codeUrl && (
            <a
              href={publication.codeUrl}
              className="group inline-flex items-center gap-2 text-sm font-bold"
              target="_blank"
            >
              <Code
                size={12}
                className="text-black group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase text-sm hover:text-zinc-500 transition-colors duration-300 underline">Code</span>
            </a>
          )}
          {publication.bibtex && (
            <a
              href={publication.bibtex}
              className="group inline-flex items-center gap-2 text-sm font-bold"
              target="_blank"
            >
              <ArrowUpRight
                size={12}
                className="text-black group-hover:-translate-y-0.5 transition-transform duration-300"
              />
              <span className="tracking-wider uppercase text-sm hover:text-zinc-500 transition-colors duration-300 underline">BibTeX</span>
            </a>
          )}
        </div>
        {publication.tldr && (
          <p className="text-sm italic text-zinc-600 mt-4">
            {publication.tldr}
          </p>
        )}
      </div>
    </div>
  );
}