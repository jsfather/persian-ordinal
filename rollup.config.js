import typescript from '@rollup/plugin-typescript';

export default [
    {
        input: 'src/index.ts',
        output: {
            file: 'dist/index.esm.js',
            format: 'es',
            sourcemap: true
        },
        plugins: [
            typescript({
                declaration: false,
                declarationMap: false
            })
        ]
    },
    {
        input: 'src/index.ts',
        output: {
            file: 'dist/index.js',
            format: 'cjs',
            sourcemap: true,
            exports: 'named'
        },
        plugins: [
            typescript({
                declaration: false,
                declarationMap: false
            })
        ]
    }
];