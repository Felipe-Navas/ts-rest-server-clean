import jwt from 'jsonwebtoken';

export class JwtAdapter {
  static async generateToken(
    payload: object,
    duration: string = '2h'
  ): Promise<string | null> {
    return new Promise((resolve) => {
      jwt.sign(payload, 'Seed', { expiresIn: duration }, (err, token) => {
        if (err) return resolve(null);

        resolve(token!);
      });
    });
  }
}
