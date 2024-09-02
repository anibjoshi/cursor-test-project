import Link from "next/link";

function Navbar() {
  return (
    <nav>
      {/* ... other navbar items ... */}
      <Link href="/todo" className="...">
        Todos
      </Link>
      {/* ... other navbar items ... */}
    </nav>
  );
}

export default Navbar;