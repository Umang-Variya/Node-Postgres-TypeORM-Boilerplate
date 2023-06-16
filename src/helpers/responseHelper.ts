export const buildErrorObjectFromJoiValidator = (errors: any) => {
  const usefulErrors = {};
  errors.forEach((error) => {
    if (!usefulErrors.hasOwnProperty(error.path.join('_'))) {
      usefulErrors[error.path.join('_')] = {
        type: error.type,
        message: error.message,
      };
    }
  });
  return usefulErrors;
};

export const CreateErrorResponse = (
  field: string,
  error: string,
  type: string
) => {
  return {
    status: 'error',
    success: false,
    errors: {
      [field]: {
        type: type,
        message: error,
      },
    },
  };
};

export const CreateSuccessResponse = (message: string, data?: any) => {
  return {
    status: 'success',
    success: true,
    message: message,
    data: data,
  };
};

export class ResponseData {
  message: string;
  data: any;
}
