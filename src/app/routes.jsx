import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "../features/landing-page/components/index.jsx"
import Login from "../features/authentication/components/login.jsx"
import Register from "../features/authentication/components/register.jsx"
import PromptPage from "../features/prompt-page/components/index.jsx"
import CollectionPage from "../features/collection-page/components/index.jsx"
import CollectionEditPage from "../features/collection-page/components/collection.edit.jsx"
import Protected from "../middleware/privateRouter.jsx"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<Protected/>}>
          <Route path="/prompt" element={<PromptPage />} />
          <Route path="/collection" element={<CollectionPage />} />
          <Route path="/collection/:id" element={<CollectionEditPage />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}