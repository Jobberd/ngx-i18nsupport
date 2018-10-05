/**
 * Collection of utility functions used in schematics.
 * (mainly copied from @ngrx schematics)
 */
import { dasherize, decamelize, camelize, classify, underscore, group, capitalize, featurePath } from './utility/strings';
import { commaseparatedToArrayString } from './utility/special-strings';
export { parseName } from './utility/parse-name';
export { getProjectPath, getProject, isLib } from './utility/project';
export { AppConfig, getWorkspace, getWorkspacePath } from './utility/config';
export { addPackageToPackageJson } from './utility/package';
export { addScriptToPackageJson } from './utility/special-package';
export { addArchitectBuildConfigurationToProject, addArchitectServeConfigurationToProject } from './utility/special-project';
export declare const stringUtils: {
    dasherize: typeof dasherize;
    decamelize: typeof decamelize;
    camelize: typeof camelize;
    classify: typeof classify;
    underscore: typeof underscore;
    group: typeof group;
    capitalize: typeof capitalize;
    featurePath: typeof featurePath;
    commaseparatedToArrayString: typeof commaseparatedToArrayString;
};
