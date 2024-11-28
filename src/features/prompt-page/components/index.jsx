import Button from "../../../components/Button.jsx";
import Select from "../../../components/Select.jsx";
import TextAreaInput from "../../../components/Textarea.jsx";
import Layout from "./layout.jsx";
import ResultList from "./resultList.jsx";
import { optionsType } from "../../../constant/data.js";
import useTips from "../hooks/use-tips.jsx";
import SaveForm from "./save.form.jsx";
import useSave from "../hooks/use-save.jsx";
import useUser from "../../../store/userStore.js";

export default function PromptPage() {
  const { handleGenerateTips, handleTypeChange, handleTrashChange, loading, resultTips } = useTips()
  const { title, tools, processSteps, notes, handleSaveToCollection, loadingSave } = useSave(resultTips)
  const { user } = useUser()

  return (
    <Layout>
      <main className="bg-secondary h-fit">
        <h3 className="font-bold text-3xl text-white px-3 mb-3 md:mb-0">Welcome, {user?.nama_lengkap} !!!</h3>
        <section className="grid md:grid-cols-2 md:p-3 gap-3 md:gap-6">
          <section className="flex flex-col">
            {/* form */}
            <div className="bg-primary rounded-lg border-gray border-2 py-3 px-2 md:px-4 h-fit">
              <form action="" className="space-y-3" onSubmit={handleGenerateTips}>
                <Select label={"Type"} options={optionsType} onChange={handleTypeChange} disabled={loading}/>
                <TextAreaInput label="Trash" placeholder="Enter waste type, e.g., plastic, paper, banana leaves" rows={5} onChange={handleTrashChange} disabled={loading} />
                <Button variant="success" type="submit" disabled={loading}>
                  {loading ? "Loading..." : "Generate Tips"}
                </Button>
              </form>
            </div>

            {/* warning */}
            <div className="bg-slate-200 rounded-lg border-gray border-2 py-3 px-2 md:px-4 text-black order-first md:order-last mb-3 md:mb-0 md:mt-3">
              <p className="text-sm text-red-600 font-semibold">* Notes :</p>
              <p className="text-sm">1. If there are incomplete data or it shows &quot;No data available&quot;, please regenerate.</p>
              <p className="text-sm">2. Make sure there are at least 2 notes before saving to the collection (Save to Collection).</p>
            </div>  
          </section>

          {/* result generated start*/}
          <section className="bg-primary rounded-lg border-gray border-2 py-3 px-2 md:px-4">
          {!loading && resultTips ? (
            <div>
              {/* Title */}
              <div>
                <p className="text-lg text-white font-semibold text-center">{resultTips.title}</p>
              </div>
              {/* Tools */}
              <ResultList title="Tools" data={resultTips.tools} />

              {/* Process Steps */}
              <ResultList title="Process Steps" data={resultTips.ProcessStep} />

              {/* Notes */}
              <ResultList title="Notes" data={resultTips.notes} />

              {resultTips.title && (
                // form save collection
                <SaveForm title={title} tools={tools} processSteps={processSteps} notes={notes} handleSaveToCollection={handleSaveToCollection} loadingSave={loadingSave} />
              )}
            </div>
          ) : 
            <div>
              <p className="text-base text-white font-semibold mt-3">Tools : generating...</p>
              <p className="text-base text-white font-semibold mt-3">Process Steps : generating...</p>
              <p className="text-base text-white font-semibold mt-3">Notes : generating...</p>
            </div>
          }          
          </section>
          {/* result generated end*/}

        </section>
      </main>
    </Layout>
  )
}