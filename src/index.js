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





/* Home Page*/
import HomeRouteGuard from './components/homeRouteGuard/HomeRouteGuard';
import MissionPage from './pages/HomePages/missionPage/MissionPage';
import ManagementPage from './pages/HomePages/managementPage/ManagementPage'
import ManagementDetailPage from './pages/HomePages/managementDetailPage/ManagementDetailPage';
import CharterOfTheCenterPage from './pages/HomePages/charterOfTheCenterPage/CharterOfTheCenterPage';
import JournalPage from './pages/HomePages/journalPage/JournalPage';
import JournalIssueDetailPage from './pages/HomePages/journalIssueDetailPage/JournalIssueDetailPage';
import ContactsPage from './pages/HomePages/contactsPage/ContactsPage';

  /* News Pages*/
  import NewsPage from './pages/HomePages/newsPage/NewsPage';
  import NewsDetailPage from './pages/HomePages/newsDetailPage/NewsDetailPage';

  /* Departments Pages*/
  // Все 5 реальных отделов теперь на общей дженерик-системе (DepartmentDetailPage) —
  // в админке для всех уже ведут контент (Nomi/Tavsif как минимум).
  import DepartmentDetailPage from './pages/HomePages/departmentDetailPage/DepartmentDetailPage';
  import StaffDetailPage from './pages/HomePages/staffDetailPage/StaffDetailPage';

/* Research Page*/
import ArticlesPage from './pages/ResearchPages/articlesPage/ArticlesPage';
import MonographsPage from './pages/ResearchPages/monographsPage/MonographsPage'; 
import ConferencesPage from './pages/ResearchPages/conferencesPage/ConferencesPage';




/* Councils Pages*/
import InstituteScientificCouncilPage from './pages/CouncilsPages/instituteScientificCouncilPage/InstituteScientificCouncilPage';
import CouncilForConferralOfAcademicDegreesPage from './pages/CouncilsPages/councilForConferralOfAcademicDegreesPage/CouncilForConferralOfAcademicDegreesPage';
import EarlyCareerResearchersCouncilPage from './pages/CouncilsPages/earlyCareerResearchersCouncilPage/EarlyCareerResearchersCouncilPage';
import InstituteTradeUnionCommitteePage from './pages/CouncilsPages/instituteTradeUnionCommitteePage/InstituteTradeUnionCommitteePage';
import EthicsCommitteePage from './pages/CouncilsPages/ethicsCommitteePage/EthicsCommitteePage';



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
import CybersecurityPage from './pages/DigitalizationPages/cybersecurityPage/CybersecurityPage';



/* Commercialization Page */
import Year2023Page from './pages/CommercializationPages/year2023Page/Year2023Page';
import Year2024Page from './pages/CommercializationPages/year2024Page/Year2024Page';
import Year2025Page from './pages/CommercializationPages/year2025Page/Year2025Page';
import Year2026Page from './pages/CommercializationPages/year2026Page/Year2026Page';








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

              <Route path="/:lang?/mission" element={<MissionPage />} />
              <Route path="/:lang?/management" element={<ManagementPage/>} />
              <Route path="/:lang?/management/:slug" element={<ManagementDetailPage/>} />
              <Route path='/:lang?/charter-of-the-center' element={<CharterOfTheCenterPage />} />
              <Route path='/:lang?/journal' element={<JournalPage />} />
              <Route path="/:lang?/contacts" element={<ContactsPage />} />

                {/* News Page */}
                <Route path="/:lang?/news" element={<NewsPage />} />
                <Route path="/:lang?/news/:id" element={<NewsDetailPage />} />

              <Route path='/:lang?/journal/:id' element={<JournalIssueDetailPage />} />


                {/* Departments Pages */}

                <Route path='/:lang?/geoanthropology-department' element={<DepartmentDetailPage deptSlug="geoanthropology-department" />} />
                <Route path='/:lang?/archaeological-anthropology-department' element={<DepartmentDetailPage deptSlug="archaeological-anthropology-department" />} />
                <Route path='/:lang?/historical-anthropology-department' element={<DepartmentDetailPage deptSlug="historical-anthropology-department" />} />
                <Route path='/:lang?/socio-cultural-anthropology-department' element={<DepartmentDetailPage deptSlug="socio-cultural-anthropology-department" />} />
                <Route path='/:lang?/archaeological-geophysics-department' element={<DepartmentDetailPage deptSlug="archaeological-geophysics-department" />} />
                {/* Дженерик-маршрут — работает для любого отдела на DepartmentDetailPage. */}
                <Route path='/:lang?/:deptSlug/staff/:slug' element={<StaffDetailPage />} />

              {/* Research Pages */}

              <Route path="/:lang?/articles" element={<ArticlesPage />} />
              <Route path="/:lang?/conferences" element={<ConferencesPage />} />
              <Route path='/:lang?/monographs' element={<MonographsPage />} />


              {/* Councils Pages */}

              <Route path="/:lang?/institute-scientific-council" element={<InstituteScientificCouncilPage />} />
              <Route path="/:lang?/early-career-researchers-council" element={<EarlyCareerResearchersCouncilPage />} />
              <Route path="/:lang?/institute-trade-union-committee" element={<InstituteTradeUnionCommitteePage />} />
              <Route path="/:lang?/council-for-conferral-of-academic-degrees" element={<CouncilForConferralOfAcademicDegreesPage />} />
              <Route path="/:lang?/ethics-committee" element={<EthicsCommitteePage />} />


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
              <Route path="/:lang?/cybersecurity" element={<CybersecurityPage />} />


              {/* Commercialization Pages */}

              <Route path="/:lang?/year-2023" element={<Year2023Page />} />
              <Route path="/:lang?/year-2024" element={<Year2024Page />} />
              <Route path="/:lang?/year-2025" element={<Year2025Page />} />
              <Route path="/:lang?/year-2026" element={<Year2026Page />} />




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

