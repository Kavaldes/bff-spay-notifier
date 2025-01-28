/* eslint-disable no-undef */
jest.mock('typeorm', () => {
  const actualTypeORM = jest.requireActual('typeorm');

  class MockDataSource {
    initialize = jest.fn().mockResolvedValue(this);
    getRepository = jest.fn().mockReturnValue({
      query: jest.fn(),
      find: jest.fn(),
      save: jest.fn(),
      remove: jest.fn(),
    });
    close = jest.fn().mockResolvedValue();
  }

  return {
    ...actualTypeORM,
    DataSource: MockDataSource, // Mockeando solo DataSource
  };
});
