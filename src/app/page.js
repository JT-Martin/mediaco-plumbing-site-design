import Time from "./components/Time";
import Image from "next/image";
import technician from "./technician-banner.png";
import sinkPlumber from "./plumbing-cost-hydro-blog-cont-img.jpg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <nav className="flex w-full items-center justify-between bg-neutral-800 px-14 py-4">
        <div className="rounded-xl bg-gray-50 px-8 py-1 text-4xl font-bold text-sky-800">
          LOGO
        </div>
        <div className="flex items-center justify-between gap-8">
          <div className="flex gap-7">
            <div className="text-xs text-gray-50 hover:cursor-pointer hover:text-sky-400">
              Home
            </div>
            <div className="text-xs text-gray-50 hover:cursor-pointer hover:text-sky-400">
              Services
            </div>
            <div className="text-xs text-gray-50 hover:cursor-pointer hover:text-sky-400">
              About
            </div>
            <div className="text-xs text-gray-50 hover:cursor-pointer hover:text-sky-400">
              FAQ
            </div>
          </div>
          <div className="-skew-x-12 border-l border-r">
            <div className="flex skew-x-12 items-center justify-between gap-3 px-8 py-3 font-light">
              <div className="text-xs text-gray-50">We're Available</div>
              <div className="relative">
                <div className="absolute size-2.5 rounded-full bg-green-600"></div>
                <div className="relative size-2.5 animate-ping rounded-full bg-green-500 opacity-75"></div>
              </div>
              <Time />
            </div>
          </div>
          <div className="flex justify-between gap-3">
            <div className="-skew-x-12 border border-sky-500 bg-sky-500 px-8 py-3 transition-colors hover:cursor-pointer hover:bg-sky-800">
              <div className="skew-x-12 text-xs font-bold text-gray-50">
                Get a free quote
              </div>
            </div>
            <div className="-skew-x-12 border px-8 py-3">
              <div className="skew-x-12 text-xs font-bold text-gray-50">
                1300 00 000
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="relative flex h-[700px] w-full flex-col justify-center bg-gray-900">
        <Image
          src={sinkPlumber}
          className="absolute left-0 h-full object-cover object-left brightness-[0.3]"
        />
        <Image
          src={technician}
          className="absolute right-0 z-10 h-full w-full object-contain object-right-top"
        />
        <div className="flex flex-col gap-6 pl-20">
          <div className="z-10 text-balance text-8xl font-black uppercase text-gray-50">
            Your Local <br />
            <span className="relative inline-block before:absolute before:-inset-x-4 before:-inset-y-1 before:block before:-skew-x-12 before:bg-blue-600/70 before:brightness-125 before:saturate-200">
              <span className="relative skew-x-12">Hot Water</span>
            </span>{" "}
            <br />
            Experts
          </div>
          <div className="z-10 flex flex-col gap-3 text-gray-50">
            <div className="flex items-center gap-4">
              <div className="flex size-16 items-center justify-center rounded-full bg-sky-600">
                Icon
              </div>
              <div>
                <div className="text-xl font-bold">Upfront pricing</div>
                <div className="text-sm">
                  Know the price of the job before we start
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex size-16 items-center justify-center rounded-full bg-sky-600">
                Icon
              </div>
              <div>
                <div className="text-xl font-bold">$0 Call out</div>
                <div className="text-sm">No call out fees</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex size-16 items-center justify-center rounded-full bg-sky-600">
                Icon
              </div>
              <div>
                <div className="text-xl font-bold">
                  $50 off for online bookings
                </div>
                <div className="text-sm">Book online to receive a discount</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
