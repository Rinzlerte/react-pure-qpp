import { ResolveOptions } from "webpack"
import { BuildOptions } from "./types"
export function buildResolvers(options: BuildOptions): ResolveOptions{
    return {
        extensions: ['.tsx', '.ts', '.js'],
        mainFiles: ['index'],
        alias: {
            'ignored-module': false,
            './ignored-module': false,
          },
        enforceExtension: false,
        exportsFields: ['exports', 'myCompanyExports'],
        modules: [options.paths.src, 'node_modules'],
        preferRelative: true,
        conditionNames: ['require', 'node'],
        descriptionFiles: ['package.json'],
    }
}   