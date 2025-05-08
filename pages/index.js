export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Book with Keigan Andrew Ray – Ascending Ink Co.
      </h1>
      <div className="w-full max-w-3xl bg-neutral-900 p-4 rounded-xl shadow-xl">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdCx3szKDqlNAu2vdBOySVDS5dSwUyWsQa8_h_F8n9vCNSxXw/viewform?embedded=true"
          width="100%"
          height="1400"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          allowFullScreen
          title="Tattoo Booking Form"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}
