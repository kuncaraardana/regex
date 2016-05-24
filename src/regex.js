/**
 * Regular expression utility functions.
 * @author Kuncara Ardana <kuncaraardana@gmail.com>
 * @license MIT
 */

/**
 * Quotes special regular expression characters: . \ + * ? [ ^ ] $ ( ) { } = ! < > | : -
 * @param {string} string
 * @return {string}
 * @see http://php.net/manual/en/function.preg-quote.php
 * @author Kuncara Ardana <kuncaraardana@gmail.com>
 */
export function quote(string) {
	return string.replace(
		/[\.\\\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:\-]/g,
		'\\$&'
	);
}

/**
 * Unquotes special regular expression characters: . \ + * ? [ ^ ] $ ( ) { } = ! < > | : -
 * @param {string} string
 * @return {string}
 * @see http://php.net/manual/en/function.preg-quote.php
 * @author Kuncara Ardana <kuncaraardana@gmail.com>
 */
export function unquote(string) {
	return string.replace(
		/\\([\.\\\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:\-])/g,
		'$1'
	);
}
