import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const payments = [
  { id: "TXN-001", student: "John Smith", course: "Private Pilot Ground School", amount: "$299.00", currency: "USD", country: "United States", status: "Completed", date: "2026-02-23" },
  { id: "TXN-002", student: "Emma Wilson", course: "Instrument Rating Mastery", amount: "£315.21", currency: "GBP", country: "United Kingdom", status: "Completed", date: "2026-02-22" },
  { id: "TXN-003", student: "Ahmed Al-Hassan", course: "ATP Prep Course", amount: "د.إ2,199.33", currency: "AED", country: "UAE", status: "Completed", date: "2026-02-22" },
  { id: "TXN-004", student: "Yuki Tanaka", course: "Drone Pilot Part 107", amount: "¥14,801", currency: "JPY", country: "Japan", status: "Refunded", date: "2026-02-21" },
  { id: "TXN-005", student: "Maria Santos", course: "Aviation Weather", amount: "R$740.53", currency: "BRL", country: "Brazil", status: "Completed", date: "2026-02-20" },
];

const AdminPayments = () => (
  <div className="space-y-4">
    <h2 className="font-display text-xl font-bold">Payments</h2>
    <div className="rounded-lg border border-border bg-card">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Transaction ID</TableHead>
            <TableHead>Student</TableHead>
            <TableHead>Course</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Country</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {payments.map((p) => (
            <TableRow key={p.id}>
              <TableCell className="font-mono text-xs">{p.id}</TableCell>
              <TableCell>{p.student}</TableCell>
              <TableCell className="max-w-[200px] truncate">{p.course}</TableCell>
              <TableCell className="font-medium">{p.amount}</TableCell>
              <TableCell>{p.country}</TableCell>
              <TableCell>
                <Badge variant={p.status === "Completed" ? "default" : "destructive"}>
                  {p.status}
                </Badge>
              </TableCell>
              <TableCell className="text-muted-foreground">{p.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  </div>
);

export default AdminPayments;
