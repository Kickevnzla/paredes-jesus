import { createRoot } from 'react-dom/client';
import './styles/normalize.scss';
import './styles/index.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';

import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
		errorElement: <NotFoundPage />
	}
]);

const root = createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
