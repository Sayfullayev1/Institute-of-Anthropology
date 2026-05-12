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


    /* Departments and Laboratories Pages*/
    import BioarchaeologyLaboratoryPage from './pages/aboutPages/departmentsAndLaboratoriesPages/bioarchaeology-laboratoryPage/BioarchaeologyLaboratoryPage';
    import InterdisciplinaryResearchPage from './pages/aboutPages/departmentsAndLaboratoriesPages/interdisciplinary-researchPage/InterdisciplinaryResearchPage';
    import SilkRoadArcheologyDepartmentPage from './pages/aboutPages/departmentsAndLaboratoriesPages/silk-road-archeology-departmentPage/SilkRoadArcheologyDepartmentPage';
    import LandscapeArcheologyLaboratoryPage from './pages/aboutPages/departmentsAndLaboratoriesPages/landscape-archeology-laboratoryPage/LandscapeArcheologyLaboratoryPage';

    
import Management from './pages/aboutPages/management/Management';
import CharterOfTheCenterPage from './pages/aboutPages/charterOfTheCenterPage/CharterOfTheCenterPage';
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


/* Research Output*/
import PublicationPage from './pages/researchOutputPages/publicationPage/PublicationPage';
import SitationMetriksPage from './pages/researchOutputPages/sitationMetriksPage/SitationMetriksPage';
import ConferanceTalksPage from './pages/researchOutputPages/conferanceTalksPage/ConferanceTalksPage';


/* Digital Infrastructure */ 
import SitemapPage from './pages/digitalInfrastructurePage/sitemapPage/SitemapPage';
import DirectoryPage from './pages/digitalInfrastructurePage/directoryPage/DirectoryPage';












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


              {/* Departments and Laboratories Pages*/}

              <Route  path="/:lang?/bioarchaeology-laboratory" element={<BioarchaeologyLaboratoryPage />} />

              <Route path='/:lang?/interdisciplinary-research' element={<InterdisciplinaryResearchPage />} />

              <Route path='/:lang?/silk-road-archeology-department' element={<SilkRoadArcheologyDepartmentPage />} />
              
              <Route path='/:lang?/landscape-archeology-laboratory' element={<LandscapeArcheologyLaboratoryPage />} />



            <Route path='/:lang?/charter-of-the-center' element={<CharterOfTheCenterPage />} />

            <Route path='/:lang?/monographs' element={<MonographsPage />} />

            <Route path='/:lang?/academics-of-the-center' element={<AcademicsOfTheCenterPage />} />

            <Route path='/:lang?/management' element={<Management />} />



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





              {/* Home Page*/}

              <Route path="/:lang?/mission" element={<MissionPage />} />



              {/* Research Output*/}

              <Route path="/:lang?/publication" element={<PublicationPage />} />  

              <Route path="/:lang?/sitation-metriks" element={<SitationMetriksPage />} />

              <Route path="/:lang?/conferance-talks" element={<ConferanceTalksPage />} />



              {/* Digital Infrastructure */}

              <Route path="/:lang?/sitemap" element={<SitemapPage />} />

              <Route path="/:lang?/directory" element={<DirectoryPage />} />


          </Route>



          

        </Routes>

      </LanguageProvider>

     </HelmetProvider>

    </BrowserRouter>
  //</React.StrictMode>
);

