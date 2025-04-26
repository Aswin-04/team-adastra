import ImageCarousel from "@/components/ImageCarousel";

export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto min-h-screen">
      <div className="padding">
        <div className="w-full  flex flex-col lg:flex-row">

          <section className="lg:w-1/2 p-8">
            <h1 className="mt-2 text-h1 leading-tight  font-bold"><span className="text-brand">Ad Astra </span>Rover Team</h1>
            <p className="mt-2 text-[#999999]  text-base  ">Pioneering Mars Exploration Through Student Innovation</p>

            <p className="mt-10 text-base lg:text-lg">Representing India on the global stage, we design and build cutting-edge rovers to push the boundaries of space robotics. Join us as we reach for the stars!</p>

            <div className="flex justify-center mt-8">
              <button type="button" className="cursor-pointer bg-brand-600 hover:bg-brand-700 focus:outline-none font-medium rounded-full px-5 py-2.5 text-center me-2 mb-2">Discover our Mission</button>
            </div>

          </section>

          <section className="w-full lg:w-1/2 max-lg:mt-12 lg:h-[480px] flex items-center justify-center">
            <ImageCarousel></ImageCarousel>
          </section>
        </div>
      </div>
    </main>
  );
}
