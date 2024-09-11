import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Web Dev 2 Demos</h1>
      <p>Demos for Web Dev 2</p>
      <li>
        <Link href="/week-2-demo">Link to week 2</Link>
      </li>
    </div>
  );
}
