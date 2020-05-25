import { compare, hash } from 'bcryptjs';

import IHashProvider from '../models/IHashProvider';

class BCryptHashProvider implements IHashProvider {
  public async generateHash(paylod: string): Promise<string> {
    return await hash(paylod, 8);
  }

  public async compareHash(paylod: string, hashed: string): Promise<boolean> {
    return await compare(paylod, hashed);
  }
}

export default BCryptHashProvider;
