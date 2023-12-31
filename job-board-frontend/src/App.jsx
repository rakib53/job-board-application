import { Route, Routes } from "react-router-dom";
import "./App.css";
import EmployeerPrivateRoute from "./ProtectedRoute/EmployeerPrivateRoute";
import LoginPrivate from "./ProtectedRoute/LoginPrivate";
import LoginProtectedRoute from "./ProtectedRoute/LoginProtectedRoute";
import PrivateEmployeer from "./ProtectedRoute/PrivateEmployeer";
import SignIn from "./components/SignIn/SignIn";
import PersonalInfo from "./components/SignUp/PersonalInfo/PersonalInfo";
import Preference from "./components/SignUp/Preference/Preference";
import SignUp from "./components/SignUp/SignUp";
import useAuthCheck from "./hooks/useAuthCheck";
import WithNavbar from "./layout/WithNavbar";
import WithNavbarAndFooter from "./layout/WithNavbarAndFooter";
import FindYourJobNotUser from "./pages/FindYourJob/FindYourJobNotUser";
import JobDetails from "./pages/JobDetails/JobDetails";
import ApplyJob from "./pages/Student/ApplyJob/ApplyJob";
import StudentDashboard from "./pages/Student/Dashboard/Dashboard";
import ApplicationDetails from "./pages/Student/MyApplications/ApplicationDetails";
import MyApplications from "./pages/Student/MyApplications/MyApplications";
import Resume from "./pages/Student/Resume/Resume";
import SavedJob from "./pages/Student/SavedJob/SavedJob";
import AllApplications from "./pages/employeer/AllApplications/AllApplications";
import Applicants from "./pages/employeer/Applicants/Applicants";
import CompanyProfile from "./pages/employeer/CompanyProfile/CompanyProfile";
import EmployeerDashboard from "./pages/employeer/Dashboard/Dashboard";
import EditPost from "./pages/employeer/EditPost/EditPost";
import JobListing from "./pages/employeer/JobListing/JobListing";
import OrganizationInfo from "./pages/employeer/OrganizationInfo/OrganizationInfo";
import PostJob from "./pages/employeer/PostJob/PostJob";

function App() {
  const authChecked = useAuthCheck();

  return !authChecked ? (
    <div className="initialLoadingWrapper">
      <div className="initialLoader"></div>
    </div>
  ) : (
    <div>
      <Routes>
        {/* Public Route  */}
        <Route path="/" element={<FindYourJobNotUser />}></Route>

        {/* Job details */}
        <Route
          path="/job/:jobId"
          element={
            <WithNavbar>
              <JobDetails />
            </WithNavbar>
          }
        ></Route>

        {/* SignUp Route*/}
        <Route
          path="/sign-up"
          element={
            <LoginPrivate>
              <WithNavbar>
                <SignUp />
              </WithNavbar>
            </LoginPrivate>
          }
        ></Route>

        {/* SignIn Route*/}
        <Route
          path="/sign-in"
          element={
            <LoginPrivate>
              <WithNavbar>
                <SignIn />
              </WithNavbar>
            </LoginPrivate>
          }
        ></Route>

        {/*  Emplopyeer Routes */}
        {/*  Emplopyeer Dashboard */}
        <Route
          path="/employeer/dashboard"
          element={
            <EmployeerPrivateRoute>
              <WithNavbarAndFooter>
                <EmployeerDashboard />
              </WithNavbarAndFooter>
            </EmployeerPrivateRoute>
          }
        ></Route>

        {/* Empoloyeer Company Profile page */}
        <Route
          path="/employeer/company-profile"
          element={
            <EmployeerPrivateRoute>
              <PrivateEmployeer>
                <WithNavbar>
                  <CompanyProfile />
                </WithNavbar>
              </PrivateEmployeer>
            </EmployeerPrivateRoute>
          }
        ></Route>

        {/* Employeer Job Post Page */}
        <Route
          path="/employeer/post-job"
          element={
            <EmployeerPrivateRoute>
              <PrivateEmployeer>
                <WithNavbar>
                  <PostJob />
                </WithNavbar>
              </PrivateEmployeer>
            </EmployeerPrivateRoute>
          }
        ></Route>

        {/* Employeer Edit Job Post Page */}
        <Route
          path="/edit-job/:jobId"
          element={
            <EmployeerPrivateRoute>
              <PrivateEmployeer>
                <WithNavbar>
                  <EditPost />
                </WithNavbar>
              </PrivateEmployeer>
            </EmployeerPrivateRoute>
          }
        ></Route>

        {/* Employeer OrganizationInfo page */}
        <Route
          path="/employeer/organization"
          element={
            <EmployeerPrivateRoute>
              <WithNavbar>
                <OrganizationInfo />
              </WithNavbar>
            </EmployeerPrivateRoute>
          }
        ></Route>

        {/* Employeer Joblisting page */}
        <Route
          path="/employeer/my-joblist"
          element={
            <EmployeerPrivateRoute>
              <WithNavbar>
                <JobListing />
              </WithNavbar>
            </EmployeerPrivateRoute>
          }
        ></Route>

        {/* Employeer Applicants page */}
        <Route
          path="/applicants/:jobId"
          element={
            <EmployeerPrivateRoute>
              <WithNavbar>
                <Applicants />
              </WithNavbar>
            </EmployeerPrivateRoute>
          }
        ></Route>

        {/*  Emplopyeer All applications */}
        <Route
          path="/employeer/all-applications"
          element={
            <EmployeerPrivateRoute>
              <WithNavbarAndFooter>
                <AllApplications />
              </WithNavbarAndFooter>
            </EmployeerPrivateRoute>
          }
        ></Route>

        {/* Student Routes */}
        {/* Student Dashboard */}
        <Route
          path="/student/dashboard"
          element={
            <LoginProtectedRoute>
              <WithNavbarAndFooter>
                <StudentDashboard />
              </WithNavbarAndFooter>
            </LoginProtectedRoute>
          }
        ></Route>

        {/* Student Personal Info */}
        <Route
          path="/personal-info"
          element={
            <LoginProtectedRoute>
              <WithNavbar>
                <PersonalInfo />
              </WithNavbar>
            </LoginProtectedRoute>
          }
        ></Route>

        {/* Student Preference Info */}
        <Route
          path="/preference"
          element={
            <LoginProtectedRoute>
              <WithNavbar>
                <Preference />
              </WithNavbar>
            </LoginProtectedRoute>
          }
        ></Route>

        {/* Student application apply */}
        <Route
          path="/applciation/form/:jobId"
          element={
            <LoginProtectedRoute>
              <WithNavbar>
                <ApplyJob />
              </WithNavbar>
            </LoginProtectedRoute>
          }
        ></Route>

        {/* Student All Applications */}
        <Route
          path="/my-applciation"
          element={
            <LoginProtectedRoute>
              <WithNavbar>
                <MyApplications />
              </WithNavbar>
            </LoginProtectedRoute>
          }
        ></Route>

        {/* Student All Applications */}
        <Route
          path="/saved-job"
          element={
            <LoginProtectedRoute>
              <WithNavbar>
                <SavedJob />
              </WithNavbar>
            </LoginProtectedRoute>
          }
        ></Route>

        <Route
          path="/student/resume"
          element={
            <LoginProtectedRoute>
              <WithNavbar>
                <Resume />
              </WithNavbar>
            </LoginProtectedRoute>
          }
        ></Route>

        {/* Student All Application details */}
        <Route
          path="my-applciation/details/:applicationId"
          element={
            <LoginProtectedRoute>
              <WithNavbar>
                <ApplicationDetails />
              </WithNavbar>
            </LoginProtectedRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
