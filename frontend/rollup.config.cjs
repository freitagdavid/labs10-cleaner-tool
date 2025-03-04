export default {
	input: 'src/index.tsx',
    plugins: [
        require('@rollup/plugin-typescript')()
    ],
	output: {
		file: 'bundle.js',
		format: 'cjs'
	}
};