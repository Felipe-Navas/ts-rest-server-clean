import {
  AuthDatasource,
  CustomError,
  RegisterUserDto,
  UserEntity
} from '../../domain';

export class AuthDatasourceImpl implements AuthDatasource {
  async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
    const { name, email, password } = registerUserDto;

    try {
      // 1 Check if the email exist
      // 2 Hash the password
      // 3 Map response to the Entity

      return new UserEntity(crypto.randomUUID(), name, email, password, [
        'ADMIN_ROLE'
      ]);
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();
    }
  }
}
