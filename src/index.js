import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardLayout from './layouts/dashboardLayout/DashboardLayout';

import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './context/LanguageContext';




import ScrollToTop from './components/scrollToTop/ScrollToTop';


/* Other Pages */
import NotFoundPage from './pages/OtherPages/notFoundPage/NotFoundPage';
import SearchPage from './pages/OtherPages/searchPage/SearchPage';


/* About Pages*/
import HistoryOfTheCenterPage from './pages/aboutPages/historyOfTheCenterPage/HistoryOfTheCenterPage';


// import Management from './pages/aboutPages/management/Management';
// import CharterOfTheCenterPage from './pages/aboutPages/charterOfTheCenterPage/CharterOfTheCenterPage';
import AcademicsOfTheCenterPage from './pages/aboutPages/academicsOfTheCenterPage/AcademicsOfTheCenterPage';





/* Publications Page*/

import TeachingAidsPage from './pages/publicationsPages/teachingAidsPage/TeachingAidsPage';
import UzbekistanHistoryOfMaterialCulturePage from './pages/publicationsPages/uzbekistanHistoryOfMaterialCulturePage/UzbekistanHistoryOfMaterialCulturePage';





/* News Page*/

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
import HomeRouteGuard from './components/homeRouteGuard/HomeRouteGuard';
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
  import DepartmentDetailPage from './pages/HomePages/departmentDetailPage/DepartmentDetailPage';
  import StaffDetailPage from './pages/staffDetailPage/StaffDetailPage';



/* Research Page*/
import ArticlesPage from './pages/ResearchPages/articlesPage/ArticlesPage';
import MonographsPage from './pages/ResearchPages/monographsPage/MonographsPage'; 
import ConferencesPage from './pages/ResearchPages/conferencesPage/ConferencesPage';



/* Commercialization Page*/



/* Staff Page */
import ResearchersPage from './pages/StaffPages/researchersPage/ResearchersPage'
import EarlyCareerResearchersPage from './pages/StaffPages/early-CareerResearchersPage/EarlyCareerResearchersPage'
import ResearchAdvisorsPage from './pages/StaffPages/researchAdvisorsPage/ResearchAdvisorsPage'
import NewStaffPage from './pages/StaffPages/newStaffPage/NewStaffPage'
import AchievementsPage from './pages/StaffPages/achievementsPage/AchievementsPage'
import MembershipsPage from './pages/StaffPages/membershipsPage/MembershipsPage'



/* International Cooperation Page */
import InternationalProjectsPage from './pages/InternationalCooperationPages/internationalProjectsPage/InternationalProjectsPage';
import JointPublicationsPage from './pages/InternationalCooperationPages/jointPublicationsPage/JointPublicationsPage';
import InternationalOrganizationsPage from './pages/InternationalCooperationPages/internationalOrganizationsPage/InternationalOrganizationsPage';
import InternationalMeetingsPage from './pages/InternationalCooperationPages/internationalMeetingsPage/InternationalMeetingsPage';
import PartnersPage from './pages/InternationalCooperationPages/partnersPage/PartnersPage';



/* Communication Page */
import MediaCoveragePage from './pages/CommunicationPages/mediaCoveragePage/MediaCoveragePage';
import NationalEventsPage from './pages/CommunicationPages/nationalEventsPage/NationalEventsPage';
import SocialMediaPage from './pages/CommunicationPages/socialMediaPage/SocialMediaPage';
import ExpertisePage from './pages/CommunicationPages/expertisePage/ExpertisePage';
import InstitutionalPage from './pages/CommunicationPages/institutionalPage/InstitutionalPage';



/* Digitalization Page */
import OrcidPage from './pages/DigitalizationPages/orcidPage/OrcidPage';
import WosPage from './pages/DigitalizationPages/wosPage/WosPage';
import ScopusPage from './pages/DigitalizationPages/scopusPage/ScopusPage';
import CybersecurityPage from './pages/DigitalizationPages/cybersecurityPage/CybersecurityPage';








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

            <Route path="/:lang?" element={<HomeRouteGuard />} />


            {/* About Pages*/}

            <Route path="/:lang?/history-of-the-center" element={<HistoryOfTheCenterPage />} />


            {/* <Route path='/:lang?/charter-of-the-center' element={<CharterOfTheCenterPage />} /> */}

            <Route path='/:lang?/monographs' element={<MonographsPage />} />

            <Route path='/:lang?/academics-of-the-center' element={<AcademicsOfTheCenterPage />} />

            {/* <Route path='/:lang?/management' element={<Management />} /> */}



            {/* Publications Page*/}


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
                <Route path='/:lang?/philosophy-department' element={<DepartmentDetailPage deptSlug="philosophy-department" />} />
                <Route path='/:lang?/staff/:slug' element={<StaffDetailPage />} />


              {/* Research Pages */}

              <Route path="/:lang?/articles" element={<ArticlesPage />} />
              <Route path="/:lang?/conferences" element={<ConferencesPage />} />


              {/* Staff Pages */}

              <Route path="/:lang?/researchers" element={<ResearchersPage />} />
              <Route path="/:lang?/early-career-researchers" element={<EarlyCareerResearchersPage />} />
              <Route path="/:lang?/research-advisors" element={<ResearchAdvisorsPage />} />
              <Route path="/:lang?/new-staff" element={<NewStaffPage />} />
              <Route path="/:lang?/achievements" element={<AchievementsPage />} />
              <Route path="/:lang?/memberships" element={<MembershipsPage />} />


              {/* International Cooperation Pages */}

              <Route path="/:lang?/international-projects" element={<InternationalProjectsPage />} />
              <Route path="/:lang?/joint-publications" element={<JointPublicationsPage />} />
              <Route path="/:lang?/international-organizations" element={<InternationalOrganizationsPage />} />
              <Route path="/:lang?/international-meetings" element={<InternationalMeetingsPage />} />
              <Route path="/:lang?/partners" element={<PartnersPage />} />


              {/* Communication Pages */}

              <Route path="/:lang?/media-coverage" element={<MediaCoveragePage />} />
              <Route path="/:lang?/national-events" element={<NationalEventsPage />} />
              <Route path="/:lang?/social-media" element={<SocialMediaPage />} />
              <Route path="/:lang?/expertise" element={<ExpertisePage />} />
              <Route path="/:lang?/institutional" element={<InstitutionalPage />} />


              {/* Digitalization Pages */}

              <Route path="/:lang?/orcid" element={<OrcidPage />} />
              <Route path="/:lang?/wos" element={<WosPage />} />
              <Route path="/:lang?/scopus" element={<ScopusPage />} />
              <Route path="/:lang?/cybersecurity" element={<CybersecurityPage />} />




              {/* Digital Infrastructure */}

              <Route path="/:lang?/site-map" element={<SitemapPage />} />

              <Route path="/:lang?/directory" element={<DirectoryPage />} />


              {/* Other Pages */}

              <Route path="/:lang?/search" element={<SearchPage />} />



              {/* 404 Page — должен быть последним, иначе перехватит остальные маршруты */}

              <Route path="*" element={<NotFoundPage />} />

          </Route>



          

        </Routes>

      </LanguageProvider>

     </HelmetProvider>

    </BrowserRouter>
  //</React.StrictMode>
);

