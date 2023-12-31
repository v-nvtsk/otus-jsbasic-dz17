import renderCitiesList from './render-cities-list';

describe('renderCitiesList', () => {
  let parent;
  beforeEach(() => {
    document.body.innerHTML = '';
    parent = document.createElement('ul');
    parent.id = 'savedCitiesList';
    document.body.append(parent);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('renderCitiesList is a function', () => {
    expect(renderCitiesList).toBeInstanceOf(Function);
  });
  const testData = [
    {
      cities: ['Moscow', 'London', 'New York'],
      result: '<li>Moscow</li><li>London</li><li>New York</li>'
    },
    {
      cities: [],
      result: ''
    }
  ];
  testData.forEach(({ cities, result }) => {
    it(`renderCitiesList renders cities: ${cities}`, () => {
      renderCitiesList(parent, cities);
      expect(parent.innerHTML).toBe(result);
    });
  });

  it('should clear parent', () => {
    renderCitiesList(parent, ['Moscow', 'London', 'New York']);
    renderCitiesList(parent, ['Minsk']);
    const result = `<li>Minsk</li>`;
    expect(parent.innerHTML).toBe(result);
  });
});
