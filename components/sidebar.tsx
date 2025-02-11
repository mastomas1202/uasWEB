import Link from "next/link"
import { Home, BookOpen, Users, ArrowRightLeft, Settings } from "lucide-react"

export default function Sidebar() {
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <nav>
        <ul className="space-y-2">
          <li>
            <Link href="/dashboard" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
              <Home className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link href="/books" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
              <BookOpen className="h-5 w-5" />
              <span>Books</span>
            </Link>
          </li>
          <li>
            <Link href="/members" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
              <Users className="h-5 w-5" />
              <span>Members</span>
            </Link>
          </li>
          <li>
            <Link href="/transactions" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
              <ArrowRightLeft className="h-5 w-5" />
              <span>Transactions</span>
            </Link>
          </li>
          <li>
            <Link href="/settings" className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded">
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

