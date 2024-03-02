import { UserService } from './UserService';
import * as jwt from 'jsonwebtoken';

jest.mock('../repositories/UserRepository');
jest.mock('../database', () => {
  initialize: jest.fn()
});
jest.mock('jsonwebtoken');


const mockUserRepository = require('../repositories/UserRepository');

describe('UserService', () => {
  const userService = new UserService(mockUserRepository);
  const mockUser = {
    id_user: '123456',
    name: 'Nathy',
    email: 'nath@test.com',
    password: '12345'
  }

  it('Deve adicionar um novo usuário', async () => {
    mockUserRepository.createUser = jest.fn().mockImplementation(() => Promise.resolve(mockUser));
    const response = await userService.createUser('Nathy', 'nath@test.com', '12345');
    expect(mockUserRepository.createUser).toHaveBeenCalled();
    expect(response).toMatchObject({
      id_user: '123456',
      name: 'Nathy',
      email: 'nath@test.com',
      password: '12345'
    })
  });

  it('Deve retornar um token de usuário', async () => {
    // userService.getAuthenticatedUser = jest.fn().mockImplementation(() => Promise.resolve(mockUser));
    jest.spyOn(userService, 'getAuthenticatedUser').mockImplementation(() => Promise.resolve(mockUser));
    jest.spyOn(jwt, 'sign').mockImplementation(() => 'token');
    const token = await userService.getToken('igor@test.com', '12345');
    expect(token).toBe('token');
  });

  it('Deve retornar um erro caso não encontre um usuário', async () => {
    jest.spyOn(userService, 'getAuthenticatedUser').mockImplementation(() => Promise.resolve(null));
    await expect(userService.getToken('nath@gest.com', '123')).rejects.toThrow("Email/password invalid");
  })
})