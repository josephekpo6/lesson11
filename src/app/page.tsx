import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="relative flex min-h-screen w-full items-center overflow-hidden">
        <Image
          src="/hero-backgroungimage.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-right"
        />
      </section>
    </main>
  );
}
