import { wait } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { renderWithAPIProvider } from '../../renderTests';
import { CITIES } from '../CityInput';
import { Search } from './Search';

function createFetchResult(data) {
  return Promise.resolve({
    ok: true,
    json: () => Promise.resolve(data),
  });
}

const FETCH_DATA = {
  pager: { total: 123 },
  trips: new Array(5).fill(null).map((_, i) => ({
    permanent_id: `${i}`,
    departure_date: `0${i + 1}/12/2019 05:00:00`,
    departure_place: {
      city_name: `Paris ${i}`,
    },
    arrival_place: {
      city_name: `Lyon ${i}`,
    },
    price: {
      string_value: `${i} €`,
    },
    user: {
      links: {
        _front: `https://url-to-user-profile-${i}.com`,
      },
      has_picture: true,
      picture: `https://url-to-user-picture-${i}.com`,
      display_name: `John Doe ${i}`,
    },
    links: {
      _front: `https://url-to-trip-${i}.com`,
    },
  })),
};

describe('<Search />', () => {
  it('should search trips with the given departure and destination', async () => {
    const fetchMocks = [() => createFetchResult(FETCH_DATA)];

    const {
      mockFetch,
      getByLabelText,
      container,
    } = renderWithAPIProvider(<Search />, { fetchMocks });

    // Wait for next "tick" to let all promises resolve.
    await wait();

    const departureCity = CITIES[1];
    const destinationCity = CITIES[2];

    userEvent.selectOptions(getByLabelText(/departure/i), departureCity);
    userEvent.selectOptions(getByLabelText(/destination/i), destinationCity);

    // Wait for next "tick" to let all promises resolve.
    await wait();

    expect(mockFetch).toHaveBeenCalled();

    const URL = mockFetch.mock.calls[0][0];
    expect(URL).toMatch(new RegExp(departureCity));
    expect(URL).toMatch(new RegExp(destinationCity));

    const items = Array.from(container.querySelectorAll('li'));
    expect(items).toHaveLength(FETCH_DATA.trips.length);
  });
});
