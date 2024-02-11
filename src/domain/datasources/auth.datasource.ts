import { UserEntity } from '../entities';
import { RegisterUserDto } from '../dtos/auth/register-user.dto';

export abstract class AuthDatasource {
  // abstract login(loginUserDto: LoginUserDto): Promise<UserEntity>
  abstract register(registerUserDto: RegisterUserDto): Promise<UserEntity>;
}
