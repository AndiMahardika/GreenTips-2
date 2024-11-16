import { useParams } from 'react-router-dom'
import Layout from '../../prompt-page/components/layout.jsx'
import TextAreaInput from '../../../components/Textarea.jsx'
import Button from '../../../components/Button.jsx'
import { useEffect } from 'react'
import { useState } from 'react'
import Input from '../../../components/Input.jsx'
import { Link } from 'react-router-dom'
import useEditCollection from '../hooks/useEditCollection.jsx'
import { getDataById } from '../api/api-collectons.js'

export default function CollectionEditPage() {
  const { id } = useParams();
  const { title, isLoadingUpdate, setTitle, setTools, setProcessSteps, setNotes, handleEditTitle, handleEditTools, handleEditProcessSteps, handleEditNotes, handleSaveEdit } = useEditCollection();
  const [data, setData] = useState("")
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getDataById(id);
        if (!data) setNotFound(true);
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setNotFound(true);
      }
    }

    if (id) fetchData();
  }, [id]);

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setTools(data.tools);
      setProcessSteps(data.processSteps);
      setNotes(data.notes);
    }
  }, [data, setTitle, setTools, setProcessSteps, setNotes]);

  return (
    <Layout>
      <main className="md:p-3 h-screen overflow-scroll space-y-2">
        { notFound ? (
          <p className="text-center text-red-500 text-4xl font-bold">Data not found</p>
        ) : (
          <section className="w-full bg-primary text-white border-gray border grid grid-cols-12 gap-3 p-2 text-sm overflow-hidden">
            <div className="col-span-12 font-bold text-xl text-center">Edit GreenTips</div>
            <form action="" className="col-span-12 grid grid-cols-12 gap-2" onSubmit={(event) => handleSaveEdit(event, id)}>
              <div className='md:col-span-6 col-span-12'>
                <p className='text-base font-semibold mb-2 text-white'>Title</p>
                <Input id='title' placeholder="Edit title" variant='neutral' value={title} onChange={handleEditTitle} />
              </div>
              <div className='col-span-12 md:grid grid-cols-3 gap-2'>
                <TextAreaInput id='tools' label="Tools" placeholder="Enter tools" rows={16} defaultValue={data.tools} onChange={handleEditTools} />
                <TextAreaInput id='processSteps' label="Process Steps" placeholder="Enter process steps" rows={16} defaultValue={data.processSteps} onChange={handleEditProcessSteps} />
                <TextAreaInput id='notes' label="Notes" placeholder="Enter notes" rows={16} defaultValue={data.notes} onChange={handleEditNotes} />
              </div>
              <div className='col-span-12 flex gap-x-2'>
                <Button variant="info" type='submit'>
                  {isLoadingUpdate ? 'Updating...' : 'Update'}
                </Button>
                <Link to={`/collection`}><Button variant="danger">Back</Button></Link>
              </div>
            </form>
          </section>
        )}

      </main>
    </Layout>
  )
}
