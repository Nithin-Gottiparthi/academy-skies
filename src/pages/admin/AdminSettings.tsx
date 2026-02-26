import { useState } from "react";
import { useSiteSettings, useUpsertSetting } from "@/hooks/useSiteSettings";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Save } from "lucide-react";

const AdminSettings = () => {
  const { data: settings = [], isLoading } = useSiteSettings();
  const upsertSetting = useUpsertSetting();

  const getSetting = (key: string) => {
    const item = settings.find((s) => s.key === key);
    return (item?.value as Record<string, any>) || {};
  };

  const [siteName, setSiteName] = useState("Academy Aviation Online");
  const [siteEmail, setSiteEmail] = useState("info@academyaviationonline.com");
  const [sitePhone, setSitePhone] = useState("+1 (702) 292-3240");
  const [maintenanceMode, setMaintenanceMode] = useState(false);

  useState(() => {
    if (settings.length > 0) {
      const general = getSetting("general");
      setSiteName(general.name || "Academy Aviation Online");
      setSiteEmail(general.email || "info@academyaviationonline.com");
      setSitePhone(general.phone || "+1 (702) 292-3240");
      const maintenance = getSetting("maintenance");
      setMaintenanceMode(maintenance.enabled || false);
    }
  });

  if (isLoading) {
    return <div className="py-20 text-center text-muted-foreground">Loading settings...</div>;
  }

  return (
    <div className="space-y-6">
      <h2 className="font-display text-xl font-bold">Site Settings</h2>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">General Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Site Name</Label>
              <Input value={siteName} onChange={(e) => setSiteName(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label>Contact Email</Label>
              <Input value={siteEmail} onChange={(e) => setSiteEmail(e.target.value)} />
            </div>
          </div>
          <div className="space-y-2">
            <Label>Phone Number</Label>
            <Input value={sitePhone} onChange={(e) => setSitePhone(e.target.value)} />
          </div>
          <Button
            onClick={() =>
              upsertSetting.mutate({
                key: "general",
                value: { name: siteName, email: siteEmail, phone: sitePhone },
              })
            }
            disabled={upsertSetting.isPending}
          >
            <Save className="mr-2 h-4 w-4" /> Save General Settings
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Maintenance Mode</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3">
            <Switch checked={maintenanceMode} onCheckedChange={setMaintenanceMode} />
            <Label>Enable maintenance mode (site will show maintenance page to visitors)</Label>
          </div>
          <Button
            onClick={() =>
              upsertSetting.mutate({
                key: "maintenance",
                value: { enabled: maintenanceMode },
              })
            }
            disabled={upsertSetting.isPending}
          >
            <Save className="mr-2 h-4 w-4" /> Save
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminSettings;
