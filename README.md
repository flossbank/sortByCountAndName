A tiny algorithm for sorting numerical data that has labels greatest to least, as well as alphabetically by label if the numerical values are the same. I find this useful when I'm dealing with data I'm going to graph and I want to sort by count and then have the data sorted by name if the counts are the same.

## Usage

`import sortByNameAndCount from 'sortByNameAndCount'`

`const sortedData = sortByNameAndCount(inputData)`

## Input data

* Must be an array
* Must be an array of objects with keys of "name": string, and "count": number

## Contributions

All contributions welcome! If there's an issue, submit an issue and then file a PR tagged to the issue #

## License

MIT
