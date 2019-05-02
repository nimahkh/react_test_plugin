import uglify from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'

const config = {
    input: 'src/countdown.js',
    external: ['react'],
    output: {
        format: 'umd',
        name: 'countdown',
        globals: {
            react: "React"
        }
    },
    plugins: [
        babel({
            exclude: "node_modules/**"
        }),
        uglify.uglify()
    ],
}
export default config
