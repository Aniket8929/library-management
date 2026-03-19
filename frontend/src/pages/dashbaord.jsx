import { useState } from "react";
import {
  LayoutDashboard,
  BookOpen,
  Users,
  Settings,
  BookMarked,
  UserCheck,
  Search,
  Bell,
  Menu,
  Library,
  LogOut,
  Star,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: BookOpen, label: "Books" },
  { icon: Users, label: "Members" },
  { icon: BookMarked, label: "Issued" },
];

const STATS = [
  { label: "Total Books", value: "1,428", icon: BookOpen },
  { label: "Members", value: "384", icon: Users },
  { label: "Issued", value: "156", icon: BookMarked },
  { label: "Returned", value: "28", icon: UserCheck },
];

const BOOKS = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    status: "Available",
    rating: 4.8,
  },
  {
    id: 2,
    title: "Deep Work",
    author: "Cal Newport",
    status: "Issued",
    rating: 4.6,
  },
  {
    id: 3,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    status: "Available",
    rating: 4.9,
  },
];

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filtered = BOOKS.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside
        className={`
        fixed md:static w-64 h-full bg-white border-r p-4
        transform transition-transform duration-200
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
      >
        <h2 className="text-lg font-semibold mb-6 flex items-center gap-2 px-2">
          <Library className="text-blue-600" />
          <span className="font-extrabold text-xl text-gray-900 tracking-tight">
            Book<span className="text-indigo-600">Hub</span>
          </span>
        </h2>

        {NAV_ITEMS.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-3 px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 cursor-pointer mb-1"
          >
            <item.icon size={18} />
            <span>{item.label}</span>
          </div>
        ))}

        <div className="absolute bottom-4 left-4 flex items-center gap-3 px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer w-[calc(100%-2rem)]">
          <LogOut size={18} />
          <span>Logout</span>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="bg-white border-b px-4 py-3 flex items-center justify-between">
          <button
            className="md:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu />
          </button>

          <h1 className="font-semibold text-lg">Dashboard</h1>

          <div className="flex items-center gap-3">
            <div className="relative hidden sm:block">
              <Search
                className="absolute left-2 top-2 text-gray-400"
                size={16}
              />
              <Input
                placeholder="Search..."
                className="pl-7 h-9"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <Button variant="ghost" size="icon">
              <Bell size={18} />
            </Button>

            <Avatar className="h-8 w-8">
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {STATS.map((s, i) => (
              <Card key={i}>
                <CardContent className="p-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">{s.label}</p>
                    <p className="text-xl font-semibold">{s.value}</p>
                  </div>
                  <s.icon className="text-gray-400" size={24} />
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Books List */}
          <Card>
            <CardContent className="p-4">
              <h2 className="font-semibold mb-3">Recent Books</h2>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Rating</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filtered.map((book) => (
                    <TableRow key={book.id}>
                      <TableCell>{book.title}</TableCell>
                      <TableCell>{book.author}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            book.status === "Available"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {book.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Star
                            className="fill-yellow-400 text-yellow-400"
                            size={14}
                          />
                          {book.rating}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
