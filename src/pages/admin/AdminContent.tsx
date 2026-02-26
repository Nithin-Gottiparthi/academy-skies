import { useState } from "react";
import { useSiteContent, useUpsertSiteContent } from "@/hooks/useSiteContent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Save } from "lucide-react";

const AdminContent = () => {
  const { data: content = [], isLoading } = useSiteContent();
  const upsertContent = useUpsertSiteContent();

  const getContent = (page: string, section: string) => {
    const item = content.find((c) => c.page === page && c.section === section);
    return (item?.content as Record<string, string>) || {};
  };

  const [heroTitle, setHeroTitle] = useState("");
  const [heroSubtitle, setHeroSubtitle] = useState("");
  const [heroDescription, setHeroDescription] = useState("");
  const [ctaTitle, setCtaTitle] = useState("");
  const [ctaDescription, setCtaDescription] = useState("");
  const [aboutTitle, setAboutTitle] = useState("");
  const [aboutDescription, setAboutDescription] = useState("");

  // Initialize form values from database
  useState(() => {
    if (content.length > 0) {
      const hero = getContent("home", "hero");
      setHeroTitle(hero.title || "Your Gateway To Aviation Knowledge");
      setHeroSubtitle(hero.subtitle || "Global Aviation Training Platform");
      setHeroDescription(hero.description || "Learn from industry experts, enhance your skills, and explore new career opportunities in aviation.");
      const cta = getContent("home", "cta");
      setCtaTitle(cta.title || "Ready to Start Your Aviation Journey?");
      setCtaDescription(cta.description || "Join thousands of pilots and aviation professionals.");
      const about = getContent("about", "hero");
      setAboutTitle(about.title || "Your Gateway to Aviation E-Learning");
      setAboutDescription(about.description || "Academy Aviation Online (AAO) is the digital learning division of the Academy Aviation Group.");
    }
  });

  if (isLoading) {
    return <div className="py-20 text-center text-muted-foreground">Loading content...</div>;
  }

  return (
    <div className="space-y-4">
      <h2 className="font-display text-xl font-bold">Content Management</h2>

      <Tabs defaultValue="home">
        <TabsList>
          <TabsTrigger value="home">Homepage</TabsTrigger>
          <TabsTrigger value="about">About</TabsTrigger>
        </TabsList>

        <TabsContent value="home" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Hero Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Badge Text</Label>
                <Input value={heroSubtitle} onChange={(e) => setHeroSubtitle(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label>Heading</Label>
                <Input value={heroTitle} onChange={(e) => setHeroTitle(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea value={heroDescription} onChange={(e) => setHeroDescription(e.target.value)} rows={3} />
              </div>
              <Button
                onClick={() =>
                  upsertContent.mutate({
                    page: "home",
                    section: "hero",
                    content: { title: heroTitle, subtitle: heroSubtitle, description: heroDescription },
                  })
                }
                disabled={upsertContent.isPending}
              >
                <Save className="mr-2 h-4 w-4" /> Save Hero
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">CTA Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Heading</Label>
                <Input value={ctaTitle} onChange={(e) => setCtaTitle(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea value={ctaDescription} onChange={(e) => setCtaDescription(e.target.value)} rows={2} />
              </div>
              <Button
                onClick={() =>
                  upsertContent.mutate({
                    page: "home",
                    section: "cta",
                    content: { title: ctaTitle, description: ctaDescription },
                  })
                }
                disabled={upsertContent.isPending}
              >
                <Save className="mr-2 h-4 w-4" /> Save CTA
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="about" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">About Hero Section</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Heading</Label>
                <Input value={aboutTitle} onChange={(e) => setAboutTitle(e.target.value)} />
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea value={aboutDescription} onChange={(e) => setAboutDescription(e.target.value)} rows={3} />
              </div>
              <Button
                onClick={() =>
                  upsertContent.mutate({
                    page: "about",
                    section: "hero",
                    content: { title: aboutTitle, description: aboutDescription },
                  })
                }
                disabled={upsertContent.isPending}
              >
                <Save className="mr-2 h-4 w-4" /> Save About Hero
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminContent;
