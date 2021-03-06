/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Android signing config. Null if not specified
 *
 */
class ToolsetProjectsAndroidAndroidModulesItemBuildConfigurationsItemSigningConfig {
  /**
   * Create a ToolsetProjectsAndroidAndroidModulesItemBuildConfigurationsItemSigningConfig.
   * @property {boolean} [hasStoreFile] Indicates if storeFile is specified in
   * the signing configuration
   */
  constructor() {
  }

  /**
   * Defines the metadata of ToolsetProjectsAndroidAndroidModulesItemBuildConfigurationsItemSigningConfig
   *
   * @returns {object} metadata of ToolsetProjectsAndroidAndroidModulesItemBuildConfigurationsItemSigningConfig
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ToolsetProjects_android_androidModulesItem_buildConfigurationsItem_signingConfig',
      type: {
        name: 'Composite',
        className: 'ToolsetProjectsAndroidAndroidModulesItemBuildConfigurationsItemSigningConfig',
        modelProperties: {
          hasStoreFile: {
            required: false,
            serializedName: 'hasStoreFile',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = ToolsetProjectsAndroidAndroidModulesItemBuildConfigurationsItemSigningConfig;
