import { UserService } from '../services/UserService';
import { UserController } from './UserController';
import { Request } from 'express';
import { makeMockResponse } from '../__mock__/mockResponse.mock';

describe('UserController', () => {
  const mockUserService: Partial<UserService> = {
    createUser: jest.fn(),
    getAllUsers: jest.fn()
  };
  const userController = new UserController(mockUserService as UserService);

  it('Deve adicionar um novo usuário', () => {
    const mockRequest = {
      body: {
        name: 'Igor',
        email: 'igor.test@test.com'
      }
    } as Request;
    const mockResponse = makeMockResponse();
    userController.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(201);
    expect(mockResponse.state.json).toMatchObject({ message: 'Usuário criado com sucesso!' });
  });

  it('Nome do usuário obrigatório', () => {
    const mockRequest = {
      body: {
        name: '',
        email: 'igor.test@test.com'
      }
    } as Request;
    const mockResponse = makeMockResponse();
    userController.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(400);
    expect(mockResponse.state.json).toMatchObject({ message: 'Bad request: nome obrigatório' });
  });

  it('Deve executar função getAllUsers()', () => {
    const mockRequest = {} as Request;
    const mockResponse = makeMockResponse();

    userController.getAllUsers(mockRequest, mockResponse);

    expect(mockResponse.state.status).toBe(200);
    expect(mockResponse).toBeTruthy();
  });

  it('E-mail do usuário obrigatório', () => {
    const mockRequest = {
      body: {
        name: 'Igor Nunes',
        email: ''
      }
    } as Request;
    const mockResponse = makeMockResponse();
    userController.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(400);
    expect(mockResponse.state.json).toMatchObject({ message: 'Bad request: e-mail obrigatório' });
  });

  it('Deve executar função deleteUser()', () => {
    const mockRequest = {} as Request;
    const mockResponse = makeMockResponse();

    userController.deleteUser(mockRequest, mockResponse);

    expect(mockResponse.state.status).toBe(200);
    expect(mockResponse.state.json).toMatchObject({ message: 'Usuário deletado' });
  });
});