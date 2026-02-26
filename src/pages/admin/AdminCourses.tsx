import { useCourses, useDeleteCourse, useUpsertCourse, DbCourse, categories } from "@/hooks/useCourses";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Pencil, Trash2, Plus } from "lucide-react";
import { useState } from "react";

const emptyForm = {
  title: "", slug: "", description: "", short_description: "", overview: "",
  category: "Pilot Training", level: "Beginner" as string, duration: "", lessons: 0,
  price_usd: 0, instructor: "", published: false,
  features: [] as string[], learning_objectives: [] as string[],
  who_should_attend: [] as string[], assessment: "", certification: "",
};

const AdminCourses = () => {
  const { data: courses = [], isLoading } = useCourses(false);
  const upsertMutation = useUpsertCourse();
  const deleteMutation = useDeleteCourse();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [form, setForm] = useState<any>(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);

  const openEdit = (course: DbCourse) => {
    setEditingId(course.id);
    setForm({
      title: course.title, slug: course.slug, description: course.description,
      short_description: course.short_description, overview: course.overview,
      category: course.category, level: course.level, duration: course.duration,
      lessons: course.lessons, price_usd: course.price_usd, instructor: course.instructor,
      published: course.published, features: course.features,
      learning_objectives: course.learning_objectives,
      who_should_attend: course.who_should_attend,
      assessment: course.assessment, certification: course.certification,
    });
    setDialogOpen(true);
  };

  const openNew = () => {
    setEditingId(null);
    setForm(emptyForm);
    setDialogOpen(true);
  };

  const handleSave = () => {
    const payload = editingId ? { ...form, id: editingId } : form;
    upsertMutation.mutate(payload, { onSuccess: () => setDialogOpen(false) });
  };

  const generateSlug = (title: string) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  };

  if (isLoading) {
    return <div className="py-20 text-center text-muted-foreground">Loading courses...</div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-xl font-bold">Manage Courses</h2>
        <Button onClick={openNew}>
          <Plus className="mr-2 h-4 w-4" /> Add Course
        </Button>
      </div>

      <div className="rounded-lg border border-border bg-card overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Course</TableHead>
              <TableHead className="hidden sm:table-cell">Category</TableHead>
              <TableHead className="hidden md:table-cell">Level</TableHead>
              <TableHead>Price</TableHead>
              <TableHead className="hidden lg:table-cell">Enrollments</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {courses.map((c) => (
              <TableRow key={c.id}>
                <TableCell className="font-medium max-w-[200px] truncate">{c.title}</TableCell>
                <TableCell className="hidden sm:table-cell">{c.category}</TableCell>
                <TableCell className="hidden md:table-cell">{c.level}</TableCell>
                <TableCell>${c.price_usd}</TableCell>
                <TableCell className="hidden lg:table-cell">{c.enrollment_count.toLocaleString()}</TableCell>
                <TableCell>
                  <Badge variant={c.published ? "default" : "secondary"}>
                    {c.published ? "Published" : "Draft"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon" onClick={() => openEdit(c)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => {
                        if (confirm("Delete this course?")) deleteMutation.mutate(c.id);
                      }}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Edit/Create Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingId ? "Edit Course" : "New Course"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label>Title *</Label>
                <Input
                  value={form.title}
                  onChange={(e) => {
                    const title = e.target.value;
                    setForm({ ...form, title, slug: editingId ? form.slug : generateSlug(title) });
                  }}
                />
              </div>
              <div className="space-y-2">
                <Label>Slug</Label>
                <Input value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} />
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <Label>Category</Label>
                <Select value={form.category} onValueChange={(v) => setForm({ ...form, category: v })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {categories.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Level</Label>
                <Select value={form.level} onValueChange={(v) => setForm({ ...form, level: v })}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {["Beginner", "Intermediate", "Advanced"].map((l) => <SelectItem key={l} value={l}>{l}</SelectItem>)}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Price (USD)</Label>
                <Input type="number" value={form.price_usd} onChange={(e) => setForm({ ...form, price_usd: parseFloat(e.target.value) || 0 })} />
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <div className="space-y-2">
                <Label>Duration</Label>
                <Input value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} placeholder="e.g. 40 hours" />
              </div>
              <div className="space-y-2">
                <Label>Lessons</Label>
                <Input type="number" value={form.lessons} onChange={(e) => setForm({ ...form, lessons: parseInt(e.target.value) || 0 })} />
              </div>
              <div className="space-y-2">
                <Label>Instructor</Label>
                <Input value={form.instructor} onChange={(e) => setForm({ ...form, instructor: e.target.value })} />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Short Description</Label>
              <Input value={form.short_description} onChange={(e) => setForm({ ...form, short_description: e.target.value })} />
            </div>
            <div className="space-y-2">
              <Label>Description</Label>
              <Textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} />
            </div>
            <div className="space-y-2">
              <Label>Overview</Label>
              <Textarea value={form.overview} onChange={(e) => setForm({ ...form, overview: e.target.value })} rows={3} />
            </div>
            <div className="space-y-2">
              <Label>Assessment</Label>
              <Textarea value={form.assessment} onChange={(e) => setForm({ ...form, assessment: e.target.value })} rows={2} />
            </div>
            <div className="space-y-2">
              <Label>Certification</Label>
              <Textarea value={form.certification} onChange={(e) => setForm({ ...form, certification: e.target.value })} rows={2} />
            </div>
            <div className="space-y-2">
              <Label>Features (comma-separated)</Label>
              <Input
                value={form.features.join(", ")}
                onChange={(e) => setForm({ ...form, features: e.target.value.split(",").map((s: string) => s.trim()).filter(Boolean) })}
              />
            </div>
            <div className="space-y-2">
              <Label>Learning Objectives (comma-separated)</Label>
              <Textarea
                value={form.learning_objectives.join("\n")}
                onChange={(e) => setForm({ ...form, learning_objectives: e.target.value.split("\n").filter(Boolean) })}
                rows={3}
                placeholder="One objective per line"
              />
            </div>
            <div className="space-y-2">
              <Label>Who Should Attend (one per line)</Label>
              <Textarea
                value={form.who_should_attend.join("\n")}
                onChange={(e) => setForm({ ...form, who_should_attend: e.target.value.split("\n").filter(Boolean) })}
                rows={3}
              />
            </div>
            <div className="flex items-center gap-3">
              <Switch checked={form.published} onCheckedChange={(v) => setForm({ ...form, published: v })} />
              <Label>Published</Label>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
              <Button onClick={handleSave} disabled={upsertMutation.isPending}>
                {upsertMutation.isPending ? "Saving..." : "Save Course"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminCourses;
