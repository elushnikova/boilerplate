import Container from 'react-bootstrap/Container';

function ViewContainer({ children }) {
  return <Container className="pt-4">{children}</Container>;
}

export default ViewContainer;
