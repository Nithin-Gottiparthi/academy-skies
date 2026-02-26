import { useContactSubmissions, useMarkSubmissionRead, useDeleteSubmission } from "@/hooks/useContactSubmissions";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trash2, Mail, MailOpen } from "lucide-react";

const AdminSubmissions = () => {
  const { data: submissions = [], isLoading } = useContactSubmissions();
  const markRead = useMarkSubmissionRead();
  const deleteSubmission = useDeleteSubmission();

  if (isLoading) {
    return <div className="py-20 text-center text-muted-foreground">Loading enquiries...</div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-xl font-bold">Contact Enquiries</h2>
        <Badge variant="outline">{submissions.filter((s) => !s.read).length} unread</Badge>
      </div>

      {submissions.length === 0 ? (
        <div className="py-20 text-center text-muted-foreground">No enquiries yet.</div>
      ) : (
        <div className="rounded-lg border border-border bg-card overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Status</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead className="hidden md:table-cell">Phone</TableHead>
                <TableHead className="hidden lg:table-cell">Course Interest</TableHead>
                <TableHead className="hidden xl:table-cell">Message</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {submissions.map((s) => (
                <TableRow key={s.id} className={!s.read ? "bg-primary/5" : ""}>
                  <TableCell>
                    {s.read ? (
                      <MailOpen className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Mail className="h-4 w-4 text-primary" />
                    )}
                  </TableCell>
                  <TableCell className="font-medium">{s.name}</TableCell>
                  <TableCell>{s.email}</TableCell>
                  <TableCell className="hidden md:table-cell">{s.phone || "—"}</TableCell>
                  <TableCell className="hidden lg:table-cell max-w-[150px] truncate">{s.course_interest || "—"}</TableCell>
                  <TableCell className="hidden xl:table-cell max-w-[200px] truncate">{s.message || "—"}</TableCell>
                  <TableCell className="text-muted-foreground text-sm">
                    {new Date(s.created_at).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => markRead.mutate({ id: s.id, read: !s.read })}
                        title={s.read ? "Mark as unread" : "Mark as read"}
                      >
                        {s.read ? <Mail className="h-4 w-4" /> : <MailOpen className="h-4 w-4" />}
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          if (confirm("Delete this submission?")) deleteSubmission.mutate(s.id);
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
      )}
    </div>
  );
};

export default AdminSubmissions;
