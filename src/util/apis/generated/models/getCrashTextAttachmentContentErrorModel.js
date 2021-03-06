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
 * Class representing a GetCrashTextAttachmentContentErrorModel.
 */
class GetCrashTextAttachmentContentErrorModel {
  /**
   * Create a GetCrashTextAttachmentContentErrorModel.
   * @property {string} message
   */
  constructor() {
  }

  /**
   * Defines the metadata of GetCrashTextAttachmentContentErrorModel
   *
   * @returns {object} metadata of GetCrashTextAttachmentContentErrorModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GetCrashTextAttachmentContentErrorModel',
      type: {
        name: 'Composite',
        className: 'GetCrashTextAttachmentContentErrorModel',
        modelProperties: {
          message: {
            required: true,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = GetCrashTextAttachmentContentErrorModel;
