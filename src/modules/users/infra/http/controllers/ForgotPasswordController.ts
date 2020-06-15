import { Request, Response } from 'express';
import { container } from 'tsyringe';

import SendForgotPasswordEmailService from '@modules/users/services/SendForgotPasswordEmailService';

export default class ForgotPasswordController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    console.log('testando1');

    const sendForgotPasswordEmail = container.resolve(
      SendForgotPasswordEmailService,
    );

    console.log('testando2');

    await sendForgotPasswordEmail.execute({
      email,
    });

    return response.status(204).json();
  }
}
