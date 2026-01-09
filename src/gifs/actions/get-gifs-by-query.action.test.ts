import { beforeEach, describe, expect, test, vi } from 'vitest';
import AxiosMockAdapter from 'axios-mock-adapter';

import { getGifsByQuery } from './get-gifs-by-query.action';
import { giphySearchResponseMock } from '../../../tests/mocks/giphy.response.data';
import { giphyApi } from '../api/giphy.api';

describe('getGifsByQuery', () => {

  let mock: AxiosMockAdapter;

  beforeEach(() => {
    mock = new AxiosMockAdapter(giphyApi);
  });

  test('should return a list of gifs', async () => {
    mock.onGet('/search').reply(200, giphySearchResponseMock);

    const gifs = await getGifsByQuery('goku');

    expect(gifs.length).toBeGreaterThan(0);

    const gif = gifs[0];
    expect(gif).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
      width: expect.any(Number),
      height: expect.any(Number),
    });
  });

  test('should return an empty list of gifs if query is empty', async () => {
    const gifs = await getGifsByQuery('');

    expect(gifs).toEqual([]);
  });

  test('should handle error when the API returns an error', async () => {
    const consoleErrorSpy = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    mock.onGet('/search').reply(400, {
      data: {
        message: 'Bad Request',
      },
    });

    const gifs = await getGifsByQuery('goku');

    expect(gifs.length).toBe(0);
    expect(consoleErrorSpy).toHaveBeenCalled();
    expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
    expect (consoleErrorSpy).toHaveBeenCalledWith(expect.anything);
  });
  })


