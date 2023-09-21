import Image from "next/image";
import dynamic from "next/dynamic";

import Navebar from "../app/components/Navebar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Navebar></Navebar>
      </div>
    </main>
  );
}
