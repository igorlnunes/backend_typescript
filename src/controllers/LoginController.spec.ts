import { Request } from 'express';
import { LoginController } from './LoginController';
import { makeMockResponse } from '../__mocks__/mockResponse.mock';

const mockUserService = {
  getToken: jest.fn(),
  getAuthenticatedUser: jest.fn()
}

jest.mock('../services/UserService', () => {
  return {
    UserService: jest.fn().mockImplementation(() => {
      return mockUserService;
    })
  }
});

describe('LoginController', () => {
  const loginController = new LoginController();
  const mockResponse = makeMockResponse();

  it('Deve retornar sucesso quando Email e Usuário válidos', async () => {
    const mockRequest = {
      body: {
        name: 'Igor',
        email: 'igor.test@test.com',
        password: 'password'
      }
    } as Request;

    await loginController.login(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(200);
  });


})