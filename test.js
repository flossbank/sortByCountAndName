const test = require('ava')
const sortByNameAndCount = require('./index')

test('invalid input | not an array', t => {
	const badInput = { peter: 'pan' }
	t.throws(() => sortByNameAndCount(badInput))
})

test('invalid input | not array of objects', t => {
	const badInput = [1, 2, 3]
	t.throws(() => sortByNameAndCount(badInput))
})

test('Success | items with no duplicate counts', t => {
	const input = [
		{
			name: 'coffee',
			count: 22
		},
		{
			name: 'oxygen',
			count: 2
		},
		{
			name: 'hydrogen',
			count: 16
		}
	]
	t.deepEqual(
		sortByNameAndCount(input),
		[
			{
				name: 'coffee',
				count: 22
			},
			{
				name: 'hydrogen',
				count: 16
			},
			{
				name: 'oxygen',
				count: 2
			}
		]
	)
})

test('Success | sort alphabetical within items with duplicate counts', t => {
	const input = [
		{
			name: 'coffee',
			count: 22
		},
		{
			name: 'oxygen',
			count: 2
		},
		{
			name: 'hydrogen',
			count: 2
		},
		{
			name: 'flowers',
			count: 16
		},
		{ 
			name: 'roses',
			count: 16
		}
	]
	t.deepEqual(
		sortByNameAndCount(input),
		[
			{
				name: 'coffee',
				count: 22
			},
			{
				name: 'flowers',
				count: 16
			},
			{
				name: 'roses',
				count: 16
			},
			{
				name: 'hydrogen',
				count: 2
			},
			{
				name: 'oxygen',
				count: 2
			}
		]
	)
})


