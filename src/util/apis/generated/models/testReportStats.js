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
 * Class representing a TestReportStats.
 */
class TestReportStats {
  /**
   * Create a TestReportStats.
   * @property {number} os
   * @property {number} devices
   * @property {number} filesize
   * @property {number} totalDeviceMinutes
   * @property {number} devicesNotRunned
   * @property {number} failed
   * @property {number} skipped
   * @property {number} passed
   * @property {number} total
   * @property {number} devicesFinished
   * @property {number} devicesFailed
   * @property {number} devicesSkipped
   * @property {number} stepCount
   * @property {object} [artifacts]
   */
  constructor() {
  }

  /**
   * Defines the metadata of TestReportStats
   *
   * @returns {object} metadata of TestReportStats
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TestReport_stats',
      type: {
        name: 'Composite',
        className: 'TestReportStats',
        modelProperties: {
          os: {
            required: true,
            serializedName: 'os',
            type: {
              name: 'Number'
            }
          },
          devices: {
            required: true,
            serializedName: 'devices',
            type: {
              name: 'Number'
            }
          },
          filesize: {
            required: true,
            serializedName: 'filesize',
            type: {
              name: 'Number'
            }
          },
          totalDeviceMinutes: {
            required: true,
            serializedName: 'totalDeviceMinutes',
            type: {
              name: 'Number'
            }
          },
          devicesNotRunned: {
            required: true,
            serializedName: 'devices_not_runned',
            type: {
              name: 'Number'
            }
          },
          failed: {
            required: true,
            serializedName: 'failed',
            type: {
              name: 'Number'
            }
          },
          skipped: {
            required: true,
            serializedName: 'skipped',
            type: {
              name: 'Number'
            }
          },
          passed: {
            required: true,
            serializedName: 'passed',
            type: {
              name: 'Number'
            }
          },
          total: {
            required: true,
            serializedName: 'total',
            type: {
              name: 'Number'
            }
          },
          devicesFinished: {
            required: true,
            serializedName: 'devices_finished',
            type: {
              name: 'Number'
            }
          },
          devicesFailed: {
            required: true,
            serializedName: 'devices_failed',
            type: {
              name: 'Number'
            }
          },
          devicesSkipped: {
            required: true,
            serializedName: 'devices_skipped',
            type: {
              name: 'Number'
            }
          },
          stepCount: {
            required: true,
            serializedName: 'step_count',
            type: {
              name: 'Number'
            }
          },
          artifacts: {
            required: false,
            serializedName: 'artifacts',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = TestReportStats;
