import { container } from 'tsyringe';

import IMailTemplateProvider from './models/IMailTemplateProvider';

import HandlebarsMailTemplatelProvider from './implementations/HandlebarsMailTemplatelProvider';

const providers = {
  handlebars: HandlebarsMailTemplatelProvider,
};

container.registerSingleton<IMailTemplateProvider>(
  'MailTemplateProvider',
  providers.handlebars,
);
