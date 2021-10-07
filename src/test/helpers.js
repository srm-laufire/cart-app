import { rndBetween, rndString } from '@laufire/utils/random';

const maxRange = 9;
const length = 16;

const getRndNumber = () => rndBetween(0, maxRange);

const getRndString = () => rndString(length);

export { getRndNumber, getRndString };
