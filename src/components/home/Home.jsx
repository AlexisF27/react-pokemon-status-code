import LinkCode from '../linkCode/LinkCode';
import NotePad from '../notePad/NotePad';
import PropTypes from 'prop-types';
import Title from '../title/Title';

function Home({ inputSearch }) {
  return (
    <>
      <Title />
      <LinkCode />
      <NotePad inputSearch={inputSearch} />
    </>
  );
}

Home.propTypes = {
  inputSearch: PropTypes.string,
};

export default Home;
