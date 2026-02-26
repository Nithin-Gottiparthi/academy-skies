import { DollarSign, Users, BookOpen, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useCourses } from "@/hooks/useCourses";
import { useContactSubmissions } from "@/hooks/useContactSubmissions";

const chartData = [
  { month: "Sep", revenue: 8200 },
  { month: "Oct", revenue: 9400 },
  { month: "Nov", revenue: 11200 },
  { month: "Dec", revenue: 15800 },
  { month: "Jan", revenue: 13600 },
  { month: "Feb", revenue: 16200 },
];

const AdminDashboard = () => {
  const { data: courses = [] } = useCourses(false);
  const { data: submissions = [] } = useContactSubmissions();

  const totalEnrollments = courses.reduce((sum, c) => sum + c.enrollment_count, 0);
  const totalRevenue = courses.reduce((sum, c) => sum + c.price_usd * c.enrollment_count, 0);
  const avgRating = courses.length > 0
    ? (courses.reduce((sum, c) => sum + c.rating, 0) / courses.length).toFixed(1)
    : "0";

  const stats = [
    { title: "Total Revenue", value: `$${(totalRevenue / 1000).toFixed(0)}K`, change: "+12.5%", icon: DollarSign },
    { title: "Active Students", value: totalEnrollments.toLocaleString(), change: "+8.2%", icon: Users },
    { title: "Courses", value: courses.length.toString(), change: `${courses.filter(c => c.published).length} published`, icon: BookOpen },
    { title: "Avg. Rating", value: avgRating, change: `${submissions.filter(s => !s.read).length} enquiries`, icon: TrendingUp },
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Revenue Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
              <Tooltip />
              <Bar dataKey="revenue" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
