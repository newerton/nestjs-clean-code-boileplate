import { Test, TestingModule } from '@nestjs/testing';

import { MainController } from '../../../src/main.controller';

describe('MainController', () => {
  let controller: MainController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MainController],
    }).compile();

    controller = app.get<MainController>(MainController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return a api is online message', () => {
    const result = controller.execute();

    expect(result.status).toEqual(
      `[${process.env.NODE_ENV}] nestjs-api is online`,
    );
  });
});
