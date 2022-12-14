import '@testing-library/jest-dom'
import { cleanup, fireEvent, render, waitFor, waitForElement } from "@testing-library/react"
import Sort from './Sort';

afterEach(cleanup)

describe('The Sort component', () => {
  const mockedOptions = [
    { label: 'Mocked option 1', value: 'mocked-option-1' },
    { label: 'Mocked option 2', value: 'mocked-option-2' },
    { label: 'Mocked option 3', value: 'mocked-option-3' },
  ];

  it('should render without errors', async () => {
    const mockedOnChange = jest.fn();
    const label = "Sort by"
    const { getByText } = render(<Sort
      label={label}
      options={mockedOptions}
      onChange={mockedOnChange} />);

    const sortLabel = getByText(label);

    expect(sortLabel).toBeVisible();
  });

  it('should call onChange when the first option is selected', async () => {
    const mockedOnChange = jest.fn();
    const { getByText, queryByTestId } = render(<Sort
      label="Sort by"
      controlId="sortBy"
      options={mockedOptions}
      onChange={mockedOnChange} />);

      const mySelectComponent = queryByTestId('sortby-component');

      expect(mySelectComponent).toBeDefined();
      expect(mySelectComponent).not.toBeNull();
      expect(mockedOnChange).toHaveBeenCalledTimes(0);

      expect(mySelectComponent.getElementsByTagName('option').length).toEqual(3);

      await waitFor(() => getByText('Mocked option 2'));
      const sortOption2 = getByText('Mocked option 2')
      expect(sortOption2).toBeVisible()

  });
});