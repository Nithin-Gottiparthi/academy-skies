import { courses } from "@/data/courses";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const AdminCourses = () => (
  <div className="space-y-4">
    <div className="flex items-center justify-between">
      <h2 className="font-display text-xl font-bold">Manage Courses</h2>
      <Button>Add Course</Button>
    </div>
    <div className="rounded-lg border border-border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Course</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Level</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Enrollments</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {courses.map((c) => (
            <TableRow key={c.id}>
              <TableCell className="font-medium">{c.title}</TableCell>
              <TableCell>{c.category}</TableCell>
              <TableCell>{c.level}</TableCell>
              <TableCell>${c.priceUSD}</TableCell>
              <TableCell>{c.enrollmentCount.toLocaleString()}</TableCell>
              <TableCell>
                <Badge variant={c.published ? "default" : "secondary"}>
                  {c.published ? "Published" : "Draft"}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  </div>
);

export default AdminCourses;
