import { Box, Heading, Text } from '@chakra-ui/react';
import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import NavBar from '../components/NavBar';

const ErrorPage = () => {
  const error = useRouteError();
  const isRouteError = isRouteErrorResponse(error);
  return (
    <>
      <NavBar />
      <Box padding={10}>
        <Heading>Oops..</Heading>
        <Text>
          {isRouteError
            ? 'This Page does not exists'
            : 'An Unexpected error occured'}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
