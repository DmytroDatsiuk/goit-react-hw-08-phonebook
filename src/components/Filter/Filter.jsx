import { FilterBox, FilterInput, Label } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/slices/filterSlice';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const handleChangeFilter = e => dispatch(setFilter(e.target.value));

  return (
    <FilterBox>
      <Label htmlFor="findByName">
        Filter by name
        <FilterInput
          id="findByName"
          type="text"
          name="name"
          placeholder="Search contact"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={handleChangeFilter}
          value={filter}
        />
      </Label>
    </FilterBox>
  );
};
