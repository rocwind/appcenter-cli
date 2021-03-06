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
 * private Jira connection secrets response
 *
 */
class PrivateJiraConnectionSecretResponse {
  /**
   * Create a PrivateJiraConnectionSecretResponse.
   * @property {string} id id of the shared connection
   * @property {string} [displayName] display name of shared connection
   * @property {boolean} [isValid] whether the credentials are valid or not
   * @property {boolean} [is2FA] if the account is a 2FA account or not
   * @property {object} data jira secret details
   * @property {string} [data.baseUrl] baseUrl to connect to jira instance
   * @property {string} [data.username] username to connect to jira instance
   * @property {string} [data.password] password to connect to jira instance
   * @property {string} serviceType Polymorphic Discriminator
   */
  constructor() {
  }

  /**
   * Defines the metadata of PrivateJiraConnectionSecretResponse
   *
   * @returns {object} metadata of PrivateJiraConnectionSecretResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'jira',
      type: {
        name: 'Composite',
        polymorphicDiscriminator: {
          serializedName: 'serviceType',
          clientName: 'serviceType'
        },
        uberParent: 'PrivateJiraConnectionSecretResponse',
        className: 'PrivateJiraConnectionSecretResponse',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: false,
            serializedName: 'displayName',
            type: {
              name: 'String'
            }
          },
          isValid: {
            required: false,
            serializedName: 'isValid',
            type: {
              name: 'Boolean'
            }
          },
          is2FA: {
            required: false,
            serializedName: 'is2FA',
            type: {
              name: 'Boolean'
            }
          },
          data: {
            required: true,
            serializedName: 'data',
            type: {
              name: 'Composite',
              className: 'PrivateJiraConnectionSecretResponseData'
            }
          },
          serviceType: {
            required: true,
            serializedName: 'serviceType',
            isPolymorphicDiscriminator: true,
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = PrivateJiraConnectionSecretResponse;
