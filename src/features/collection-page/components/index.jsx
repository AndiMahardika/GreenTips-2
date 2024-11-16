import Layout from "../../prompt-page/components/layout.jsx";
import CollectionCard from "./collection.card.jsx";
import { useEffect } from "react";
import useDeleteCollection from "../hooks/useDeleteCollection.jsx";
import useGetCollection from "../hooks/useGetCollection.jsx";
import Input from "../../../components/Input.jsx";
import Button from "../../../components/Button.jsx";
import useSearchCollection from "../hooks/useSearchCollection.jsx";

export default function CollectionPage() {
  const { collections, isLoading, error, getCollections } = useGetCollection();
  const { handleDelete, isLoadingDelete } = useDeleteCollection(getCollections);
  const { handleSearchChange, handleSearch, searchResults, isLoadingSearch, isSearching } = useSearchCollection(collections)

  useEffect(() => {
    getCollections();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <div className="sticky top-0 w-full px-0 md:px-3 pb-3 md:py-3 bg-secondary">
        <form action="" className="flex items-center gap-2 w-full md:w-2/5" onSubmit={handleSearch}>
          <div className="w-full">
            <Input id="search" placeholder="Search" onChange={handleSearchChange} />
          </div>
          <Button type="submit" variant="success" size="small">
            {isLoadingSearch ? "Searching..." : "Search"}
          </Button>
        </form>
      </div>

      <main className="p-0 md:px-3 md:pb-3 h-screen overflow-scroll space-y-4 mdspace-y-2">
      {isLoading || isLoadingSearch ? (
          <p className="text-center text-white text-4xl font-bold">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500 text-2xl font-bold">{error}</p>
        ) : isSearching ? (
          searchResults.length > 0 ? (
            searchResults.map((collection) => (
              <CollectionCard
                key={collection.id}
                id={collection.id}
                title={collection.title}
                tools={collection.tools}
                processSteps={collection.processSteps}
                notes={collection.notes}
                onDelete={handleDelete}
                isLoadingDelete={isLoadingDelete}
              />
            ))
          ) : (
            <p className="text-center text-white text-4xl font-bold">No collections found.</p>
          )
        ) : collections.length > 0 ? (
          collections.map((collection) => (
            <CollectionCard
              key={collection.id}
              id={collection.id}
              title={collection.title}
              tools={collection.tools}
              processSteps={collection.processSteps}
              notes={collection.notes}
              onDelete={handleDelete}
              isLoadingDelete={isLoadingDelete}
            />
          ))
        ) : (
          <p className="text-center text-white text-4xl font-bold">No collections found.</p>
      )}
      </main>
    </Layout>
  )
}