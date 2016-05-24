
import { quote, unquote } from '../src/regex';

console.assert(unquote(quote('.{}')) == '.{}');
