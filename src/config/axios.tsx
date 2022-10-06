import Axios from 'axios';
import endpoints from '../services/endpoints.json';

Axios.defaults.baseURL = endpoints.baseURL;
const token = `${process.env.REACT_APP_API_USER}:${process.env.REACT_APP_API_TOKEN}`;
const authorization= `Basic ${btoa(token)}`;
Axios.defaults.headers.common['Authorization'] = authorization;

interface errorProps {
  response: {
    status: number;
    data: any;
  };
}

interface responseProps {
  data: object;
}

const requestHandler = (request: any) => {
  return request;
};

const errorHandler = (error: errorProps) => {
  const { response } = error;

  const customError = {
    error: {
      code: response ? response.status : 503,
      message: 'Api error',
      detail:
        response && response.data
          ? { ...error.response.data }
          : { errorData: JSON.stringify(error) },
    },
    data: null,
  };

  if (response) {
    switch (error.response.status.toString()) {
      case '400': {
        customError.error.message = 'Data error';
        break;
      }
      case '404': {
        customError.error.message = 'Not found results';
        break;
      }
      case '401': {
        customError.error.message = 'Unautirized access';
        break;
      }
      case '500': {
        customError.error.message = 'Server error';
        break;
      }
      default: {
        customError.error.message = 'Unhandled error';
      }
    }
  }

  return customError;
};

// Interceptor de response OK.
const successHandler = (response: responseProps) => {
  return { data: response.data, error: null };
};

Axios.interceptors.request.use(
  (request: any) => requestHandler(request),
  (error: any) => errorHandler(error)
);

Axios.interceptors.response.use(
  (response: any) => successHandler(response),
  (error: any) => errorHandler(error)
);
