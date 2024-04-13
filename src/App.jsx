import { Layout } from './components/Layouts';
import { lazy, Suspense } from 'react';
import Loading from './components/Loading';

const StarsBackground = lazy(() => import('./components/StarsBackground'));
const MainBanner = lazy(() => import('./components/MainBanner'));
const AboutMe = lazy(() => import('./components/AboutMe'));
const Experience = lazy(() => import('./components/Experience'));
const WorkWithMe = lazy(() => import('./components/WorkWithMe'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const GoTop = lazy(() => import('./components/GoTop'));

function App() {
	return (
		<>
			<Layout>
				<Suspense fallback={<Loading />}>
					<StarsBackground />
					<MainBanner />
					<AboutMe />
					<Experience />
					<WorkWithMe />
					<Projects />
					<Contact />
					<GoTop />
				</Suspense>
			</Layout>
		</>
	);
}

export default App;
