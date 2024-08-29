import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import LandingLayout from "../components/LandingLayout";
import HomePage from "../pages/Landing/HomePage.tsx";
import {EAppRoutes} from "./types.ts";
import {ContactPageAsync} from "../pages/Landing";
import PrivateRoute from "../components/DashboardLayout/PrivateRouter.tsx";
import DashboardLayout from "../components/DashboardLayout";
import {CreateEventPageAsync, EditEventPageAsync, EventPageAsync, EventsPageAsync} from "../pages/Dashboard";
import ErrorPage from "../pages/ErrorPage.tsx";
import SuspenseWrapper from "../components/ui/SuspenseWrapper.tsx";

const RouterComponent = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path={EAppRoutes.HOME} element={<SuspenseWrapper>
                    <LandingLayout/></SuspenseWrapper>}>
                    <Route index element={<HomePage/>}/>
                    <Route
                        path={EAppRoutes.CONTACTS}
                        element={
                            <SuspenseWrapper>
                                <ContactPageAsync/>
                            </SuspenseWrapper>
                        }/>
                </Route>
                <Route
                    path={EAppRoutes.DASHBOARD_HOME}
                    element={<PrivateRoute/>}>
                    <Route index element={<SuspenseWrapper><DashboardLayout/></SuspenseWrapper>}/>
                    <Route
                        path={EAppRoutes.DASHBOARD_EVENTS}
                        element={<DashboardLayout/>}>
                        <Route
                            index
                            element={
                                <SuspenseWrapper>
                                    <EventsPageAsync/>
                                </SuspenseWrapper>
                            }
                        />
                        <Route
                            path={EAppRoutes.DASHBOARD_EVENT_ID}
                            element={
                                <SuspenseWrapper>
                                    <EventPageAsync/>
                                </SuspenseWrapper>
                            }
                        />
                        <Route
                            path={EAppRoutes.DASHBOARD_EDIT_EVENT_ID}
                            element={
                                <SuspenseWrapper>
                                    <EditEventPageAsync/>
                                </SuspenseWrapper>
                            }
                        />
                    </Route>
                    <Route path={EAppRoutes.DASHBOARD_CREATE_EVENT} element={<DashboardLayout/>}>
                        <Route
                            index
                            element={
                                <SuspenseWrapper>
                                    <CreateEventPageAsync/>
                                </SuspenseWrapper>
                            }/>
                    </Route>
                    <Route path={EAppRoutes.ERROR_PAGE} element={<ErrorPage/>}/>
                </Route>
            </>
        )
    )
    return <RouterProvider router={router}/>
}

export default RouterComponent
