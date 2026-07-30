import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardLayout from './layouts/dashboardLayout/DashboardLayout';

import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './context/LanguageContext';




import ScrollToTop from './components/scrollToTop/ScrollToTop';


/* Home Page*/
import HomePage from './pages/homePage/HomePage';


/* About Pages*/
import HistoryOfTheCenterPage from './pages/aboutPages/historyOfTheCenterPage/HistoryOfTheCenterPage';


// import Management from './pages/aboutPages/management/Management';
// import CharterOfTheCenterPage from './pages/aboutPages/charterOfTheCenterPage/CharterOfTheCenterPage';
import AcademicsOfTheCenterPage from './pages/aboutPages/academicsOfTheCenterPage/AcademicsOfTheCenterPage';





/* Publications Page*/

import MonographsPage from './pages/publicationsPages/monographsPage/MonographsPage';
import TeachingAidsPage from './pages/publicationsPages/teachingAidsPage/TeachingAidsPage';
import UzbekistanHistoryOfMaterialCulturePage from './pages/publicationsPages/uzbekistanHistoryOfMaterialCulturePage/UzbekistanHistoryOfMaterialCulturePage';





/* News Page*/

import ArticlesPage from './pages/publicationsPages/articlesPage/ArticlesPage';
import ArticlesDetailPage from './pages/publicationsPages/articlesDetailPage/ArticlesDetailPage';
import NewsPage from './pages/newsPages/newsPage/NewsPage';
import NewsDetailPage from './pages/newsPages/newsDetailPage/NewsDetailPage';
import PhotoGalleryPage from './pages/newsPages/photoGalleryPage/PhotoGalleryPage';
import PhotoGalleryDetailPage from './pages/newsPages/photoGalleryDetailPage/PhotoGalleryDetailPage';





/* ACTIVITIY Page */

import TheMostImportantResearchResultsPage from './pages/activityPages/theMostImportantResearchResultsPage/TheMostImportantResearchResultsPage';
import ScienceActionPlanPage from './pages/activityPages/scienceActionPlanPage/ScienceActionPlanPage';
import BoardOfYoungScientistsPage from './pages/activityPages/boardOfYoungScientistsPage/BoardOfYoungScientistsPage';




/* Contacts Page*/ 
import ContactsPage from './pages/contactsPage/ContactsPage';







/* Home Page*/
import MissionPage from './pages/HomePages/missionPage/MissionPage';
import StructurePage from './pages/HomePages/structurePage/StructurePage'
import ManagementPage from './pages/HomePages/managementPage/ManagementPage'
import ManagementDetailPage from './pages/HomePages/managementDetailPage/ManagementDetailPage';
import CharterOfTheCenterPage from './pages/HomePages/charterOfTheCenterPage/CharterOfTheCenterPage';
import AnnouncementsNewsPage from './pages/HomePages/announcementsNewsPage/AnnouncementsNewsPage';
import JournalPage from './pages/HomePages/journalPage/JournalPage';
import JournalIssueDetailPage from './pages/HomePages/journalIssueDetailPage/JournalIssueDetailPage';

/* Departments Pages*/
import ArchaeologicalAnthropologyDepartmentPage from './pages/HomePages/archaeologicalAnthropologyDepartmentPage/ArchaeologicalAnthropologyDepartmentPage';
import GeoanthropologyDepartmentPage from './pages/HomePages/geoanthropologyDepartmentPage/GeoanthropologyDepartmentPage';
import HistoricalAnthropologyDepartmentPage from './pages/HomePages/historicalAnthropologyDepartmentPage/HistoricalAnthropologyDepartmentPage';
import SocioCulturalAnthropologyDepartmentPage from './pages/HomePages/socioCulturalAnthropologyDepartmentPage/SocioCulturalAnthropologyDepartmentPage';
import ArchaeologicalGeophysicsDepartmentPage from './pages/HomePages/archaeologicalGeophysicsDepartmentPage/ArchaeologicalGeophysicsDepartmentPage';


/* Research Output*/
import PublicationPage from './pages/researchOutputPages/publicationPage/PublicationPage';
import SitationMetriksPage from './pages/researchOutputPages/sitationMetriksPage/SitationMetriksPage';
import ConferanceTalksPage from './pages/researchOutputPages/conferanceTalksPage/ConferanceTalksPage';


/* Digital Infrastructure */ 
import SitemapPage from './pages/digitalInfrastructurePages/sitemapPage/SitemapPage';
import DirectoryPage from './pages/digitalInfrastructurePages/directoryPage/DirectoryPage';













const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <BrowserRouter>

     <HelmetProvider>

      <LanguageProvider>


        <ScrollToTop />

        <Routes>

          <Route element={<DashboardLayout />}>

            {/* Home Page */}

            <Route path="/:lang?" element={<HomePage />} />


            {/* About Pages*/}

            <Route path="/:lang?/history-of-the-center" element={<HistoryOfTheCenterPage />} />


            {/* <Route path='/:lang?/charter-of-the-center' element={<CharterOfTheCenterPage />} /> */}

            <Route path='/:lang?/monographs' element={<MonographsPage />} />

            <Route path='/:lang?/academics-of-the-center' element={<AcademicsOfTheCenterPage />} />

            {/* <Route path='/:lang?/management' element={<Management />} /> */}



            {/* Publications Page*/}


            <Route path='/:lang?/articles' element={<ArticlesPage/>}/>

            <Route path='/:lang?/articles/:id' element={<ArticlesDetailPage />} />

            <Route path='/:lang?/teaching-aids' element={<TeachingAidsPage/>}/>

            <Route path='/:lang?/uzbekistan-history-of-material-culture' element={<UzbekistanHistoryOfMaterialCulturePage/>}/>



            {/* ACTIVITIY Page */}

            <Route path='/:lang?/the-most-important-research-results' element={<TheMostImportantResearchResultsPage/>}/>

            <Route path='/:lang?/science-action-plan' element={<ScienceActionPlanPage/>}/>

            <Route path='/:lang?/board-of-young-scientists' element={<BoardOfYoungScientistsPage/>}/>



            {/* Contacts Page */}

            <Route path="/:lang?/contacts" element={<ContactsPage />} />



              {/* News Page */}

              <Route path="/:lang?/news" element={<NewsPage />} />
              <Route path="/:lang?/news/:id" element={<NewsDetailPage />} />

              <Route path="/:lang?/ads" element={<ArticlesPage />} />
              <Route path="/:lang?/ads/:id" element={<ArticlesDetailPage />} />

              <Route path="/:lang?/events" element={<ArticlesPage />} />
              <Route path="/:lang?/events/:id" element={<ArticlesDetailPage />} />

              <Route path="/:lang?/wednesday-readings" element={<ArticlesPage />} />
              <Route path="/:lang?/wednesday-readings/:id" element={<ArticlesDetailPage/>} />

              <Route path="/:lang?/photo-gallery" element={<PhotoGalleryPage />} />
              <Route path="/:lang?/photo-gallery/:id" element={<PhotoGalleryDetailPage />} />





              {/* Home Page */}

              <Route path="/:lang?/mission" element={<MissionPage />} />

              <Route path="/:lang?/structure" element={<StructurePage/>} />

              <Route path="/:lang?/management" element={<ManagementPage/>} />

              <Route path="/:lang?/management/:slug" element={<ManagementDetailPage/>} />

              <Route path='/:lang?/charter-of-the-center' element={<CharterOfTheCenterPage />} />

              <Route path='/:lang?/announcements-news' element={<AnnouncementsNewsPage />} />

              <Route path='/:lang?/journal' element={<JournalPage />} />

              <Route path='/:lang?/journal/:id' element={<JournalIssueDetailPage />} />



              {/* Departments Pages */}

              <Route path='/:lang?/archaeological-anthropology-department' element={<ArchaeologicalAnthropologyDepartmentPage />} />

              <Route path='/:lang?/geoanthropology-department' element={<GeoanthropologyDepartmentPage />} />

              <Route path='/:lang?/historical-anthropology-department' element={<HistoricalAnthropologyDepartmentPage />} />

              <Route path='/:lang?/socio-cultural-anthropology-department' element={<SocioCulturalAnthropologyDepartmentPage />} />

              <Route path='/:lang?/archaeological-geophysics-department' element={<ArchaeologicalGeophysicsDepartmentPage />} />



              {/* Research Output */}

              <Route path="/:lang?/publication" element={<PublicationPage />} />  

              <Route path="/:lang?/sitation-metriks" element={<SitationMetriksPage />} />

              <Route path="/:lang?/conferance-talks" element={<ConferanceTalksPage />} />



              {/* Digital Infrastructure */}

              <Route path="/:lang?/site-map" element={<SitemapPage />} />

              <Route path="/:lang?/directory" element={<DirectoryPage />} />


          </Route>



          

        </Routes>

      </LanguageProvider>

     </HelmetProvider>

    </BrowserRouter>
  //</React.StrictMode>
);

