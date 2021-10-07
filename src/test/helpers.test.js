import * as random from '@laufire/utils/random';
import { getRndNumber, getRndString } from './helpers';

test('getRndNumber', () => {
	const randomNumber = Symbol('randomNumber');

	jest.spyOn(random, 'rndBetween').mockReturnValue(randomNumber);

	const result = getRndNumber();

	expect(result).toEqual(randomNumber);
});

test('getRndString', () => {
	const randomString = Symbol('rndString');

	jest.spyOn(random, 'rndString').mockReturnValue(randomString);

	const result = getRndString();

	expect(result).toEqual(randomString);
});
