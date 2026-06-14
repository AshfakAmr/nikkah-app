"use client";

import { homeFeaturedProfiles } from "@/features/home/data/home-content";
import { ProfileCard } from "@/features/home/components/profile-card";
import { SectionHeading } from "@/features/home/components/section-heading";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function FeaturedProfilesSection() {
  return (
    <Section id="featured" background="default" spacing="default">
      <Tabs defaultValue="bride">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <SectionHeading
              align="left"
              title={homeFeaturedProfiles.title}
              subtitle={homeFeaturedProfiles.subtitle}
              className="max-w-xl"
            />
            <div className="flex shrink-0 items-center gap-3 sm:gap-4">
              <TabsList aria-label="Featured profile type">
                <TabsTrigger value="bride">Bride</TabsTrigger>
                <TabsTrigger value="groom">Groom</TabsTrigger>
              </TabsList>
              <Button href={homeFeaturedProfiles.viewAllHref} variant="outline" size="sm">
                View All
              </Button>
            </div>
          </div>

          <TabsContent value="bride">
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {homeFeaturedProfiles.bride.map((profile) => (
                <li key={profile.id}>
                  <ProfileCard profile={profile} />
                </li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="groom">
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {homeFeaturedProfiles.groom.map((profile) => (
                <li key={profile.id}>
                  <ProfileCard profile={profile} />
                </li>
              ))}
            </ul>
          </TabsContent>
        </div>
      </Tabs>
    </Section>
  );
}
