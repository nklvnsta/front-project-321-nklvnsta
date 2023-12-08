import React,{FC}  from 'react'
import { Navigate, RouteObject, useRoutes } from "react-router-dom";

import {  CATALOG,HOME,REVIEWS,CONTACT } from './config';
import {CatalogPage,HomePage,ReviewsPage,ContactPage} from '../../pages/'

import RequiredAuth from '../../components/RequiredAuth';


const MainRouter : FC = () => {
  const resultPaths: RouteObject[] = [
    { path: HOME, element: <HomePage />,},
    { path: CATALOG, element: <CatalogPage />,},
    { path: REVIEWS, element: <RequiredAuth><ReviewsPage /></RequiredAuth>,},
    { path: CONTACT, element: <RequiredAuth><ContactPage /></RequiredAuth>,},
    { path: "*", element: <Navigate to={'/'} replace />},
  ]

 
  return useRoutes(resultPaths);
}

export default MainRouter;