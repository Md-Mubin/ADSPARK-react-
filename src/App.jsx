// ========================== All Imports
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import LayoutOne             from "./Layout/LayoutOne"
import Home                  from "./component/Home"
import Our_work              from "./component/Our_work"
import Home_sub              from "./component/Home_sub"
import The_spark             from "./component/The_spark"
import What_we_do            from "./component/What_we_do"
import Who_we_are            from "./component/Who_we_are"
import Spark_intel           from "./component/Spark_intel"
import Join_ourTeam          from "./component/Join_ourTeam"
import Article_page          from "./component/Article_page"
import Job_apply             from "./component/Job_apply"
import Thought_speakers      from "./component/Thought_speakers"
import CaseStudy_Corona      from "./component/CaseStudy_Corona"
import Spark_exellence_award from "./component/Spark_exellence_award"


function App() {

  const ADSPARK = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/"                                      element={<LayoutOne/>}>
        <Route index                                         element={<Home />} />
        <Route path="/home_sub"                              element={<Home_sub />} />
        <Route path="/our_work"                              element={<Our_work />} />
        <Route path='/Our Work / Spark Suite / Corona Study' element={<CaseStudy_Corona />} />
        <Route path="/who we are"                            element={<Who_we_are />} />
        <Route path="/what_we_do"                            element={<What_we_do />} />
        <Route path="/What We Do / Spark Intelligence"       element={<Spark_intel />} />
        <Route path="/the spark"                             element={<The_spark />} />
        <Route path="/the spark / marketing exellence award" element={<Spark_exellence_award />} />
        <Route path="/thought of speakers"                   element={<Thought_speakers />} />
        <Route path="/article page"                          element={<Article_page />} />
        <Route path="/join our team"                         element={<Join_ourTeam />} />
        <Route path="/apply form"                            element={<Job_apply/>}/>
        </Route>
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={ADSPARK} />
    </>
  )
}

export default App
