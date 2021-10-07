import * as random from '@laufire/utils/random';
import { getRndNumber } from './helpers';

test('getRndNumber', () => {
	const randomNumber = Symbol('randomNumber');

	jest.spyOn(random, 'rndBetween').mockReturnValue(randomNumber);

	const result = getRndNumber();

	expect(result).toEqual(randomNumber);
});
