import { UserService } from '../services/UserService';
import { UserController } from './UserController';
import { Request, Response } from 'express';
import { makeMockResponse } from '../__mock__/mockResponse.mock';

describe('UserController', () => {
  const mockUserService: Partial<UserService> = {
    createUser: jest.fn()
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
    expect(mockResponse.state.json).toMatchObject({ message: 'Usuário criado com sucesso!' })
  })
});