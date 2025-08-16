import { EducationEntry } from "@/components/education-entry";
import { educationData } from "@/data/education";
import { PublicationEntry } from "@/components/publication-entry";
import { publicationData } from "@/data/publication";
import { ProfileSection } from "@/components/profile-section";
import { aboutMe } from "@/data/aboutme";
import { NewsEntry } from "@/components/news-entry";
import { newsData } from "@/data/news";
import { ExperienceEntry } from "@/components/experience-entry";
import { experienceData } from "@/data/experience";
import { PortfolioEntry } from "@/components/portfolio-entry";
import { portfolioData } from "@/data/portfolio";
import { sectionOrder, Section } from "@/data/section-order";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      {/* Don't have a great call on whether max-w-screen-xl is better */}
      <div className="max-w-screen-lg mx-auto px-8 py-24">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          {/* Left Column - Fixed Info */}
          <div className="col-span-12 md:col-span-4 space-y-12 mb-8 md:mb-0">
            {/* Profile */}
            <div className="md:sticky top-12 space-y-8">
              <ProfileSection aboutMe={aboutMe} />
            </div>
          </div>

          {/* Right Column - Scrolling Content */}
          <div className="col-span-12 md:col-span-8 md:col-start-5 space-y-8 md:space-y-12">
            {/* About section is typically first */}
            {aboutMe.description && (
              <section>
                <div
                  className="font-serif text-base leading-relaxed [&_a]:text-[#1e86c8] [&_a]:font-bold [&_a:hover]:text-blue-400 [&>p]:mb-4 last:[&>p]:mb-0"
                  dangerouslySetInnerHTML={{ __html: aboutMe.description }}
                />
              </section>
            )}

            {/* Map through sectionOrder to render sections in correct order */}
            {sectionOrder.map((sectionName) => {
              // Most of this is redundant... but in case it needs to be unique.
              switch (sectionName) {
                case Section.News:
                  return (
                    newsData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-serif text-xl mb-6 tracking-wide uppercase font-bold">
                          News
                        </h2>
                        <div className="max-h-[255px] overflow-y-auto pr-4 space-y-2 hover:overflow-y-scroll border-2 border-zinc-200 rounded-lg p-4 bg-zinc-50/70">
                          {newsData
                            .sort((a, b) => {
                              if (a.pinned && !b.pinned) return -1;
                              if (!a.pinned && b.pinned) return 1;
                              return 0;
                            })
                            .map((news, index) => (
                              <NewsEntry key={index} news={news} />
                            ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Education:
                  return (
                    educationData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-serif text-xl mb-6 tracking-wide uppercase font-bold">
                          Education
                        </h2>
                        <div className="space-y-12">
                          {educationData.map((education, index) => (
                            <EducationEntry key={index} education={education} />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Publication:
                  return (
                    publicationData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-serif text-xl mb-6 tracking-wide uppercase font-bold">
                          Research
                        </h2>
                        <div className="space-y-6">
                          {publicationData.map((publication, index) => (
                            <div key={index}>
                              <PublicationEntry publication={publication} />
                              {index < publicationData.length - 1 && (
                                <div className="h-px bg-zinc-200 my-4" />
                              )}
                            </div>
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Experience:
                  return (
                    experienceData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-serif text-xl mb-6 tracking-wide uppercase font-bold">
                          Experience
                        </h2>
                        <div className="space-y-6">
                          {experienceData.map((experience, index) => (
                            <ExperienceEntry
                              key={index}
                              experience={experience}
                            />
                          ))}
                        </div>
                      </section>
                    )
                  );
                case Section.Portfolio:
                  return (
                    portfolioData.length > 0 && (
                      <section key={sectionName}>
                        <h2 className="font-serif text-xl mb-6 tracking-wide uppercase">
                          Portfolio
                        </h2>
                        <div className="space-y-12">
                          {portfolioData.map((portfolio, index) => (
                            <PortfolioEntry key={index} portfolio={portfolio} />
                          ))}
                        </div>
                      </section>
                    )
                  );
                default:
                  return null;
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
