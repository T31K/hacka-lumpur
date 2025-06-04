import Faq from "@/components/Faq";

export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col items-center gap-y-6 py-24 px-12 bg-black text-white relative">
      <a href="https://github.com/T31K/hacka-lumpur" target="_blank">
        <img
          src="/github.svg"
          width={40}
          height={40}
          alt="github_logo"
          className="absolute top-6 right-6"
        />
      </a>
      <header>
        <div className="text-2xl mb-4 text-center">🙏🇲🇾💻💻🇲🇾🙏</div>
        <h1 className="text-4xl uppercase text-center text-sky-600 font-pressStart my-4">
          Hacka Lumpur
        </h1>
        <div className="text-2xl mb-4 text-center">🙏🇲🇾💻💻🇲🇾🙏</div>
        <div className="text-center mb-8">
          <p>EST. 2024</p>
          <p>Kuala Lumpur, Malaysia</p>
        </div>
      </header>
      <section className="max-w-3xl mb-8 pt-8">
        <p>
          A community-run group of indie makers / coders / designers / hardware
          hackers who build their own independent apps/startups, meeting up
          every now and then for co-working (and demos) in Kuala Lumpur,
          Malaysia. The group is part of the{" "}
          <a
            className="underline italic text-sky-400 inline-block mr-2"
            href="https://hacka.network"
          >
            Hacka network
          </a>
          with a growing community worldwide.
        </p>
        <p className="my-3">
          If you run your own startup or just building your own projects come
          and join us every now and then for in Kuala Lumpur, Malaysia.
        </p>
        <p className="mb-4 text-lg font-semibold">The timings are:</p>
        <ul className="list-none list-inside">
          <li>
            10:30am – Intros{" "}
            <span className="text-gray-400">
              {`(self intro + what you're working on)`}
            </span>
          </li>
          <li>
            1:30pm – Order lunch and eat together{" "}
            <span className="text-gray-400">(optional)</span>
          </li>
          <li>
            4:30pm – Demos{" "}
            <span className="text-gray-400">
              (share what you made today, or just watch)
            </span>
          </li>
          <li>5:30pm – Drinks somewhere nearby 🍻🍷</li>
        </ul>
        <p className="my-6">
          {`We usually meetup at`}
          <a
            className="inline-block mx-2 underline italic text-lg font-semibold text-red-500"
            href="https://g.co/kgs/sBhpUyA"
            target="_blank"
          >
            {`Common Ground Bukit Bintang`}
          </a>
          or
          <a
            className="inline-block mx-2 underline italic text-lg font-semibold text-red-500"
            href="https://g.co/kgs/AecFZsn"
            target="_blank"
          >
            {`BeyondTo Co`}
          </a>
        </p>
        <p className="my-6">Next meetup: {`TBA`}</p>
      </section>
      <section className="overflow-hidden text-gray-700">
        <h3 className="text-xl font-semibold mb-1 text-white text-center">
          Meetups so far
        </h3>
        <div className="container mx-auto lg:pt-12 lg:px-24">
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap w-full justify-center">
              <div className="w-full sm:w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="/meetups/meetup_1-min.webp"
                  layout="responsive"
                  width={500}
                  height={500}
                />
              </div>

              <div className="w-full sm:w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="/meetups/meetup_2-min.webp"
                  layout="responsive"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
          <Faq />
          {/* <div className="flex flex-wrap w-full md:w-1/2">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="/meetups/meetup_4.webp"
                />
              </div>
              <div className="w-full sm:w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="/meetups/meetup_5.webp"
                />
              </div>
              <div className="w-full sm:w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="/meetups/meetup_6.webp"
                />
              </div>
            </div>
            <div className="flex flex-wrap w-full">
              <div className="w-full sm:w-1/3 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="/meetups/meetup_7.webp"
                />
              </div>
              <div className="w-full sm:w-1/3 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="/meetups/meetup_8.webp"
                />
              </div>
              <div className="w-full sm:w-1/3 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="/meetups/meetup_9.webp"
                />
              </div>{" "}
              <div className="w-full sm:w-1/3 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="/meetups/meetup_11.webp"
                />
              </div>
              <div className="w-full sm:w-2/3 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="/meetups/meetup_10.webp"
                />
              </div>
              <div className="w-full sm:w-2/3 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="/meetups/meetup_12.webp"
                />
              </div>
              <div className="w-full sm:w-1/3 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src="/meetups/meetup_13.webp"
                />
              </div>
            </div> */}
        </div>
      </section>
    </main>
  );
}
