import { HttpStatus } from '@nestjs/common';

export const commitsHttpErrors = {
  [HttpStatus.FORBIDDEN]: 'Rate limit exceeded',
  [HttpStatus.NOT_FOUND]: 'Not found',
  [HttpStatus.CONFLICT]: 'Git repository is empty',
};
