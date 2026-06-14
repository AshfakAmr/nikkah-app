"use client";

import { useState, type ReactNode } from "react";
import { Heart, Search } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { Section } from "@/components/layout/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Drawer } from "@/components/ui/drawer";
import { EmptyState } from "@/components/ui/empty-state";
import { ErrorState } from "@/components/ui/error-state";
import { Input } from "@/components/ui/input";
import { LoadingState } from "@/components/ui/loading-state";
import { Modal } from "@/components/ui/modal";
import { Select } from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

function ShowcaseBlock({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border bg-surface-white p-6 shadow-subtle">
      <div>
        <h2 className="font-serif text-2xl text-text-primary">{title}</h2>
        {description ? (
          <p className="mt-1 text-sm text-text-secondary">{description}</p>
        ) : null}
      </div>
      {children}
    </div>
  );
}

function ColorSwatch({ name, variable }: { name: string; variable: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="h-16 rounded-lg border border-border"
        style={{ background: `var(${variable})` }}
      />
      <div>
        <p className="text-sm font-medium text-text-primary">{name}</p>
        <p className="font-mono text-xs text-text-muted">{variable}</p>
      </div>
    </div>
  );
}

export function DesignSystemShowcase() {
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <PageShell>
      <Section background="white" spacing="lg">
        <div className="mx-auto flex max-w-3xl flex-col gap-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">
            Internal Preview
          </p>
          <h1 className="font-serif text-[length:var(--text-display-lg)] text-text-primary">
            Design System
          </h1>
          <p className="text-lg text-text-secondary">
            Tokens, UI primitives, and layout components for Nikkah.com.au.
          </p>
        </div>
      </Section>

      <Section background="cream" spacing="default" contained={false}>
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-[var(--container-x)]">
          <ShowcaseBlock title="Color Tokens" description="CSS variables mapped to Tailwind theme.">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              <ColorSwatch name="Primary" variable="--color-primary" />
              <ColorSwatch name="Secondary" variable="--color-secondary" />
              <ColorSwatch name="Surface Cream" variable="--color-surface-cream" />
              <ColorSwatch name="Surface Beige" variable="--color-surface-beige" />
              <ColorSwatch name="Surface Dark" variable="--color-surface-dark" />
            </div>
          </ShowcaseBlock>

          <ShowcaseBlock title="Typography">
            <div className="flex flex-col gap-4">
              <p className="font-serif text-[length:var(--text-display-xl)]">
                Display Heading
              </p>
              <p className="font-serif text-[length:var(--text-display-lg)]">
                Section Heading
              </p>
              <p className="font-serif text-[length:var(--text-heading-md)]">
                Card Heading
              </p>
              <p className="font-sans text-base text-text-secondary">
                Body text — clean sans-serif for UI copy, descriptions, and forms.
              </p>
              <p className="font-script text-3xl text-primary">Omar Al-Sayed</p>
            </div>
          </ShowcaseBlock>

          <ShowcaseBlock title="Buttons">
            <div className="flex flex-wrap gap-3">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="inverse">Inverse</Button>
              <Button variant="dark">Dark CTA</Button>
              <Button isLoading>Loading</Button>
            </div>
          </ShowcaseBlock>

          <ShowcaseBlock title="Badges">
            <div className="flex flex-wrap gap-2">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="premium">Premium</Badge>
              <Badge variant="gold">Gold</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="muted">Muted</Badge>
            </div>
          </ShowcaseBlock>

          <ShowcaseBlock title="Cards">
            <Card className="max-w-md">
              <CardHeader>
                <CardTitle>Verified Profiles</CardTitle>
                <CardDescription>
                  Every member is manually reviewed for authenticity.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-text-secondary">
                  Cards support elevated, outline, and ghost variants with composable
                  header, content, and footer slots.
                </p>
              </CardContent>
              <CardFooter>
                <Button size="sm">Learn more</Button>
              </CardFooter>
            </Card>
          </ShowcaseBlock>

          <ShowcaseBlock title="Form Controls">
            <div className="grid gap-6 md:grid-cols-2">
              <Input label="Full Name" placeholder="Enter your name" hint="As shown on ID" />
              <Select
                label="Sect"
                placeholder="Select sect"
                options={[
                  { label: "Any", value: "any" },
                  { label: "Sunni", value: "sunni" },
                  { label: "Shia", value: "shia" },
                ]}
              />
              <div className="md:col-span-2">
                <Textarea
                  label="Message"
                  placeholder="How can we help?"
                  hint="We respond within 1 business day"
                />
              </div>
            </div>
          </ShowcaseBlock>

          <ShowcaseBlock title="Tabs">
            <Tabs defaultValue="bride">
              <TabsList>
                <TabsTrigger value="bride">Bride</TabsTrigger>
                <TabsTrigger value="groom">Groom</TabsTrigger>
              </TabsList>
              <TabsContent value="bride">
                <Card variant="outline" padding="sm">
                  <CardContent className="flex items-center gap-3 pt-0">
                    <Heart className="size-5 text-primary" />
                    <p className="text-sm text-text-secondary">
                      Bride profile filters and featured listings.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="groom">
                <Card variant="outline" padding="sm">
                  <CardContent className="flex items-center gap-3 pt-0">
                    <Search className="size-5 text-primary" />
                    <p className="text-sm text-text-secondary">
                      Groom profile filters and featured listings.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </ShowcaseBlock>

          <ShowcaseBlock title="Table">
            <Table>
              <TableCaption>Recent profile verifications</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Sara, 25</TableCell>
                  <TableCell>Melbourne</TableCell>
                  <TableCell>
                    <Badge variant="outline">Verified</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Hamza, 31</TableCell>
                  <TableCell>Dubai</TableCell>
                  <TableCell>
                    <Badge variant="premium">Premium</Badge>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </ShowcaseBlock>

          <ShowcaseBlock title="Overlay Components">
            <div className="flex flex-wrap gap-3">
              <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
              <Button variant="outline" onClick={() => setDrawerOpen(true)}>
                Open Drawer
              </Button>
            </div>
            <Modal
              open={modalOpen}
              onClose={() => setModalOpen(false)}
              title="Create Profile"
              description="Start your halal journey with a verified account."
            >
              <div className="flex flex-col gap-4">
                <Input label="Email" type="email" placeholder="you@example.com" />
                <Button fullWidth onClick={() => setModalOpen(false)}>
                  Continue
                </Button>
              </div>
            </Modal>
            <Drawer
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              title="Refine Search"
              description="Filter profiles by location and preferences."
              side="right"
            >
              <div className="flex flex-col gap-4">
                <Select
                  label="Location"
                  options={[
                    { label: "Australia", value: "au" },
                    { label: "UAE", value: "ae" },
                    { label: "Global", value: "global" },
                  ]}
                />
                <Button fullWidth onClick={() => setDrawerOpen(false)}>
                  Apply Filters
                </Button>
              </div>
            </Drawer>
          </ShowcaseBlock>

          <ShowcaseBlock title="Feedback States">
            <div className="grid gap-6 lg:grid-cols-3">
              <Card variant="outline" padding="none">
                <LoadingState label="Fetching profiles…" />
              </Card>
              <Card variant="outline" padding="none">
                <EmptyState
                  title="No profiles found"
                  description="Try adjusting your search filters."
                  actionLabel="Clear filters"
                  onAction={() => undefined}
                />
              </Card>
              <Card variant="outline" padding="none">
                <ErrorState
                  message="We couldn't load profiles. Please try again."
                  onRetry={() => undefined}
                />
              </Card>
            </div>
          </ShowcaseBlock>
        </div>
      </Section>
    </PageShell>
  );
}
