export default function ResultList({ title, data }) {
  if (!data || (Array.isArray(data) && data.length === 0)) {
    return (
      <div className="py-3 px-4 block w-full border-2 bg-neutral text-white border-gray rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray disabled:opacity-50 disabled:pointer-events-none mt-2">
        <p className="text-base text-white font-semibold">{title} :</p>
        <p className="text-sm text-gray-400">No data available.</p>
      </div>
    );
  }

  return (
    <div className="py-3 px-4 block w-full border-2 bg-neutral text-white border-gray rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray disabled:opacity-50 disabled:pointer-events-none mt-2">
      <p className="text-base text-white font-semibold">{title} :</p>
      {Array.isArray(data) ? (
        data.map((item, index) => (
          <p key={index} className="text-sm text-white">
            {index + 1}. {item}
          </p>
        ))
      ) : (
        <p className="text-sm text-white">{data}</p>
      )}
    </div>
  );
}
