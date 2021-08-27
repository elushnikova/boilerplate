import { useSelector } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap/';

function Navigation() {
  const profile = useSelector((state) => state.profile.data);

  return (
    <Navbar bg="light">
      <Container>
        <Nav className="w-100">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>

          {
            profile?.isAdmin && (
              <LinkContainer to="/admin">
                <Nav.Link>Admin</Nav.Link>
              </LinkContainer>
            )
          }

          {
            profile
              ? (
                <LinkContainer to="/logout" className="ms-auto">
                  <Nav.Link>Logout</Nav.Link>
                </LinkContainer>
              )
              : (
                <>
                  <LinkContainer to="/login" className="ms-auto">
                    <Nav.Link>Login</Nav.Link>
                  </LinkContainer>

                  <LinkContainer to="/register">
                    <Nav.Link>Register</Nav.Link>
                  </LinkContainer>
                </>
              )
          }
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
