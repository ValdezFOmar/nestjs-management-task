import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthCredentialsDto } from './dto/user-credentials.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';
// import { createPool } from 'src/_config/db.config';
// import { QueryResult } from 'pg';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { username, password } = authCredentialsDto;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log({
      username,
      salt,
      hashedPassword,
    });
  }

  // const result = await createPool().query(
  //   'SELECT (username, password) FROM system.user WHERE username == $1',
  //   [username],
  // );
  // if (result.rowCount !== 1) {
  //   throw new UnauthorizedException();
  // }
  // const user = result.rows[0];
  // if (!(await bcrypt.compare(password, user.password))) {
  //   throw new UnauthorizedException();
  // }

  async signIn(
    authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    const { username, password } = authCredentialsDto;
    // For testing
    const user = {
      username: 'omar',
      password: '$2b$10$vuNDJ19SgdGbPoUGOWdV/.ATJ9mcA0U2PTKrnKJi3LbnoZiwx0nTK',
    };
    if (user.username !== username) {
      throw new UnauthorizedException();
    }
    const passwordMatches = await bcrypt.compare(password, user.password);
    if (!passwordMatches) {
      throw new UnauthorizedException();
    }
    const payload: JwtPayload = { username };
    const accessToken = this.jwtService.sign(payload);
    return { accessToken };
  }
}
