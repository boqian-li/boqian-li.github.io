import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  StickyNote,
  Twitter,
  ArrowUpRight,
  GraduationCap,
} from "lucide-react";
import { AboutMe } from "@/data/aboutme";

interface ProfileSectionProps {
  aboutMe: AboutMe;
}

export function ProfileSection({ aboutMe }: ProfileSectionProps) {
  if (!aboutMe) {
    return null;
  }

  return (
    <div className="space-y-2 md:sticky top-12 flex flex-col">
      <div className="flex flex-row-reverse md:flex-col gap-4 md:space-y-8">
        {aboutMe.imageUrl && (
          <div className="w-1/3 md:w-full flex-shrink-0">
            <div className="relative max-h-[45vh] md:w-[65%] aspect-[1/1]">
              <Image
                src={aboutMe.imageUrl}
                alt={aboutMe.name}
                fill
                priority
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        )}
        <div className="w-2/3 md:w-full">
          <h1 className="font-serif text-4xl font-bold mb-3">
            {aboutMe.name}
          </h1>
          {aboutMe.altName && (
            <p className="text-lg leading-relaxed mb-6" style={{ fontFamily: 'var(--font-noto-serif-sc)' }}>
              {aboutMe.altName}
            </p>
          )}
        </div>
      </div>
      <div>
        <p className="text-base leading-relaxed uppercase mb-6">
          {aboutMe.title},
          <br />
          {aboutMe.institutionUrl ? (
            <a
              href={aboutMe.institutionUrl}
              className="hover:text-zinc-500 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              {aboutMe.institution}
            </a>
          ) : (
            aboutMe.institution
          )}
        </p>
        <div className="space-y-2">
          {aboutMe.cvUrl && (
            <>
            <a
              href={aboutMe.cvUrl}
              // className="inline-flex items-center gap-2 text-base underline text-[#1e86c8] hover:text-blue-900 transition-colors font-bold"
              className="group inline-flex items-center gap-2 text-base hover:text-zinc-500 transition-colors" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <StickyNote size={14} className="text-black group-hover:-translate-y-0.5 transition-transform duration-300"/>
              <span className="tracking-wider uppercase">CV</span>
            </a>
            </>
          )}
          <br />
          <a
            href={`mailto:${aboutMe.email}`}
            // className="inline-flex items-center gap-2 text-base underline text-[#1e86c8] hover:text-blue-900 transition-colors font-bold"
            className="group inline-flex items-center gap-2 text-base hover:text-zinc-500 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail size={14} className="text-black group-hover:-translate-y-0.5 transition-transform duration-300"/>
            {aboutMe.email}
          </a>
          {aboutMe.googleScholarUrl && (
            <>
              <br />
              <a
                href={aboutMe.googleScholarUrl}
                className="group inline-flex items-center gap-2 text-base hover:text-zinc-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GraduationCap size={14} className="text-black group-hover:-translate-y-0.5 transition-transform duration-300"/>
                Google Scholar
              </a>
            </>
          )}
          {aboutMe.twitterUsername && (
            <>
              <br />
              <a
                href={`https://twitter.com/${aboutMe.twitterUsername}`}
                className="group inline-flex items-center gap-2 text-base hover:text-zinc-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={14} className="text-black group-hover:-translate-y-0.5 transition-transform duration-300"/>
                @{aboutMe.twitterUsername}
              </a>
            </>
          )}
          {aboutMe.githubUsername && (
            <>
              <br />
              <a
                href={`https://github.com/${aboutMe.githubUsername}`}
                className="group inline-flex items-center gap-2 text-base hover:text-zinc-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={14} className="text-black group-hover:-translate-y-0.5 transition-transform duration-300"/>
                github.com/{aboutMe.githubUsername}
              </a>
            </>
          )}
          {aboutMe.linkedinUsername && (
            <>
              <br />
              <a
                href={`https://www.linkedin.com/in/${aboutMe.linkedinUsername}`}
                className="group inline-flex items-center gap-2 text-base hover:text-zinc-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={14} className="text-black group-hover:-translate-y-0.5 transition-transform duration-300"/>
                linkedin.com/in/{aboutMe.linkedinUsername}
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}