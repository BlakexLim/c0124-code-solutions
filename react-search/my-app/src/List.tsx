type FilterList = {
  list: string[];
};

export function List({ list }: FilterList) {
  if (list.length === 0) {
    return <li>No items match the filter</li>;
  }
  const mappedList = list.map((value) => <li key={value}>{value}</li>);
  return <ul> {mappedList} </ul>;
}
