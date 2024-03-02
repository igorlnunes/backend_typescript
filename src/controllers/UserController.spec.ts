import { UserService } from '../services/UserService';
import { UserController } from './UserController';
import { Request } from 'express';
import { makeMockResponse } from '../__mocks__/mockResponse.mock';
import { makeMockRequest } from '../__mocks__/mockRequest.mock';

const mockUserService = {
  createUser: jest.fn(),
  getUser: jest.fn()
}

jest.mock('../services/UserService', () => {
  return {
    UserService: jest.fn().mockImplementation(() => {
      return mockUserService;
    })
  }
})

describe('UserController', () => {
  const userController = new UserController();
  const mockResponse = makeMockResponse();

  it('Deve adicionar um novo usuário', () => {
    const mockRequest = {
      body: {
        name: 'Igor',
        email: 'igor.test@test.com',
        password: 'password'
      }
    } as Request;

    userController.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(201);
    expect(mockResponse.state.json).toMatchObject({ message: 'Usuário criado com sucesso!' });
  });

  it('Nome do usuário obrigatório', () => {
    const mockRequest = {
      body: {
        name: '',
        email: 'igor.test@test.com',
        password: 'password'
      }
    } as Request;

    userController.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(400);
    expect(mockResponse.state.json).toMatchObject({ message: 'Bad request: nome obrigatório' });
  });

  it('E-mail do usuário obrigatório', () => {
    const mockRequest = {
      body: {
        name: 'Igor Nunes',
        email: '',
        password: 'password'
      }
    } as Request;

    userController.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(400);
    expect(mockResponse.state.json).toMatchObject({ message: 'Bad request: e-mail obrigatório' });
  });

  it('Password do usuário obrigatório', () => {
    const mockRequest = {
      body: {
        name: 'Igor Nunes',
        email: 'igor.test@test.com',
        password: ''
      }
    } as Request;

    userController.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(400);
    expect(mockResponse.state.json).toMatchObject({ message: 'Bad request: senha obrigatória' });
  });

  it('Deve executar função deleteUser()', () => {
    const mockRequest = {} as Request;


    userController.deleteUser(mockRequest, mockResponse);

    expect(mockResponse.state.status).toBe(200);
    expect(mockResponse.state.json).toMatchObject({ message: 'Usuário deletado' });
  });

  it('Deve retornar o usuário com userId informador', () => {
    const mockRequest = makeMockRequest({
      params: {
        userId: '123456',
      }
    })

    userController.getUser(mockRequest, mockResponse)
    expect(mockUserService.getUser).toHaveBeenCalledWith('123456');
    expect(mockResponse.state.status).toBe(200);
  })
});