import buble from 'rollup-plugin-buble';

export default {
	entry: './test.js',
	dest: './test-built.js',
	plugins: [ buble() ],
};
