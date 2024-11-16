import { Link } from "react-router-dom";
import Button from "../../../components/Button.jsx";

export default function CollectionCard({ id, title, tools, processSteps, notes, onDelete, isLoadingDelete }) {

  return (
    <section className="w-full bg-primary text-white border-gray border grid grid-cols-1 md:grid-cols-12 gap-3 p-2 text-sm overflow-hidden">
      <div className="md:col-span-12 font-bold text-xl text-center">{title}</div>
      {/* Tools */}
      <div className="md:col-span-3 bg-neutral border-gray border p-2 h-fit max-h-80">
        <p className="text-base text-white font-semibold">Tools :</p>
        { tools.length === 0 ? 
          <p className="text-sm text-gray-400">No data available.</p> :
          tools.map((tool, index) => (
            <p key={index} className="text-sm"> {index + 1}. {tool}</p>
        ))}
      </div>
      {/* Process Steps */}
      <div className="md:col-span-5 bg-neutral border-gray border p-2 overflow-scroll h-fit md:max-h-80">
        <p className="text-base text-white font-semibold">Process Steps :</p>
        { processSteps.length === 0 ? 
          <p className="text-sm text-gray-400">No data available.</p> :
          processSteps.map((step, index) => (
            <p key={index} className="text-sm"> {index + 1}. {step}</p>
        ))}
      </div>
      {/* Notes */}
      <div className="md:col-span-4 bg-neutral border-gray border p-2 overflow-scroll h-fit md:max-h-80">
        <p className="text-base text-white font-semibold">Notes :</p>
        { notes.length === 0 ? 
          <p className="text-sm text-gray-400">No data available.</p> :
          notes.map((note, index) => (
            <p key={index} className="text-sm"> {index + 1}. {note}</p>
        ))}
      </div>
      {/* Action Buttons */}
      <div className="md:col-span-12 flex justify-end gap-x-2">
        <Link to={`/collection/${id}`}>          
          <Button variant="info">Edit</Button>
        </Link>
        <Button variant="danger" onClick={() => onDelete(id, title)} >
          {isLoadingDelete ? 'Deleting...' : 'Delete'}
        </Button>
      </div>
    </section>
  );
}