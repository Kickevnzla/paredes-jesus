import NavBar from '../NavBar';
import Footer from '../Footer';
import Container from '../Container';

const HomeLayout = ({ children }) => {
	return (
		<>
			<NavBar />
			<Container>{children}</Container>
			<Footer />
		</>
	);
};

export default HomeLayout;
