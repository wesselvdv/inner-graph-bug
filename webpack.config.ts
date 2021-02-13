import {join, resolve} from 'path';

export default {
    name: 'inner-graph-bug',
    entry: './index.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    compiler: 'ttypescript',
                },
            },
            {
                test: /\.m?js/,
                resolve: {
                    fullySpecified: false,
                } as any,
            },
        ],
    },
    // @ts-ignore
    optimization: {
        minimize: false,
        // innerGraph: false enable this to see that the O.if is included.
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.mjs'],
        alias:
            {
                '@effect-ts/core': ['@effect-ts/core/_traced'],
                '@effect-ts/node': ['@effect-ts/node/_traced'],
                '@effect-ts/system': ['@effect-ts/system/_traced'],
            }
    },
    output: {
        filename: 'index.js',
        libraryTarget: 'commonjs'
    },
    mode: 'production',
    target: 'node'
} as any;
