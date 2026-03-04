
import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Layout = lazy(() => import('../components/feature/Layout'));
const HomePage = lazy(() => import('../pages/home/page'));
const AboutPage = lazy(() => import('../pages/about/page'));
const ServicesPage = lazy(() => import('../pages/services/page'));
const ServiceDetailPage = lazy(() => import('../pages/services/detail'));
const ProjectsPage = lazy(() => import('../pages/projects/page'));
const ContactPage = lazy(() => import('../pages/contact/page'));
const BlogPage = lazy(() => import('../pages/blog/page'));
const BlogDetailPage = lazy(() => import('../pages/blog/detail'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'hakkimizda',
        element: <AboutPage />,
      },
      {
        path: 'hizmetler',
        element: <ServicesPage />,
      },
      {
        path: 'hizmetler/:slug',
        element: <ServiceDetailPage />,
      },
      {
        path: 'projeler',
        element: <ProjectsPage />,
      },
      {
        path: 'iletisim',
        element: <ContactPage />,
      },
      {
        path: 'blog',
        element: <BlogPage />,
      },
      {
        path: 'blog/:slug',
        element: <BlogDetailPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

export default routes;
