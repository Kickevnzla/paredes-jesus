import NavBar from '../../NavBar';
import Footer from '../../Footer';

const HomeLayout = ({ children }) => {
	return (
		<>
			<NavBar />
			{children}
			<Footer />
		</>
	);
};

export default HomeLayout;
