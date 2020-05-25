import { container } from 'tsyringe';

import IStorageProvider from './StoreProvider/models/IStorageProvider';
import DiskStorageProvider from './StoreProvider/implementations/DiskStorageProvider';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider,
);
