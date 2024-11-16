import { useState } from 'react';
import Button from '../../../components/Button.jsx'
import Input from '../../../components/Input.jsx'

export default function SaveForm({title, tools, processSteps, notes, handleSaveToCollection, loadingSave}) {

  const [formTitle, setFormTitle] = useState(title);
  const [formTools, setFormTools] = useState(tools);
  const [formProcessSteps, setFormProcessSteps] = useState(processSteps);
  const [formNotes, setFormNotes] = useState(notes);

  return (
    <form className="mt-3" method="post" onSubmit={handleSaveToCollection} noValidate>
      <div className="hidden">
      <Input
        id="title"
        label="Title"
        placeholder="Title"
        value={formTitle}
        onChange={(e) => setFormTitle(e.target.value)}
        disabled={loadingSave}
      />
      <Input
        id="tools"
        label="Tools"
        placeholder="Tools"
        value={formTools}
        onChange={(e) => setFormTools(e.target.value)}
        disabled={loadingSave}
      />
      <Input
        id="processSteps"
        label="Process Steps"
        placeholder="Process Steps"
        value={formProcessSteps}
        onChange={(e) => setFormProcessSteps(e.target.value)}
        disabled={loadingSave}
      />
      <Input
        id="notes"
        label="Notes"
        placeholder="Notes"
        value={formNotes}
        onChange={(e) => setFormNotes(e.target.value)}
        disabled={loadingSave}
      />
      </div>
      <Button variant="success" type="submit" disabled={loadingSave}>
        {loadingSave ? "Saving..." : "Save to Collection"}
      </Button>
    </form>
  )
}
