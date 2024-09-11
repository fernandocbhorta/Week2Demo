import Image from "next/image";
import Link from "next/link";
import Heading from "./heading";

export default function Page() {
    let a = 5;
    let b = 10;

  return (
    <main>
        <Heading/>      
      <p>Demos for Web Dev 2</p>
      <p>The sum of a+b is {a +b}.</p>
    </main>
  );
}
