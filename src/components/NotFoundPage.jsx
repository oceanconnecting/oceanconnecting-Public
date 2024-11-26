import React from "preact/compat";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f9fa;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  color: #ff6b6b;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  font-size: 1.5rem;
  color: #495057;
  margin-bottom: 2rem;
`;

const Button = styled.a`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border-radius: 0.25rem;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const NotFoundPage = React.memo(() => {
  return (
    <Container>
      <Title>404</Title>
      <Message>Oops!  Ocean connecting The page you're looking for doesn't exist.</Message>
      <Button href="/">Go Back Home</Button>
    </Container>
  );
});

export default NotFoundPage;
