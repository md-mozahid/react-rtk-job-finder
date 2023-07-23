import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterBySearch, sortBySalary } from '../../features/filter/filterSlice'

const Header = () => {
  const [input, setInput] = useState('')
  const { sort } = useSelector((state) => state.filter)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(filterBySearch(input))
  }, [dispatch, input])

  // sort by salary
  const sortHandler = (e) => {
    const value = e.target.value
    dispatch(sortBySalary(value))
  }

  return (
    <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
      <h1 className="lws-section-title">All Available Jobs</h1>
      <div className="flex gap-4">
        <div className="search-field group flex-1">
          <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
          <input
            type="text"
            placeholder="Search Job"
            className="search-input"
            id="lws-searchJob"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <select
          id="lws-sort"
          name="sort"
          autoComplete="sort"
          className="flex-1"
          value={sort}
          onChange={sortHandler}>
          <option value="Default">Default</option>
          <option value="Salary (Low to High)">Salary (Low to High)</option>
          <option value="Salary (High to Low)">Salary (High to Low)</option>
        </select>
      </div>
    </div>
  )
}

export default Header
