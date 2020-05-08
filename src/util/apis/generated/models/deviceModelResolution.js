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
 * Device screen resolution
 *
 */
class DeviceModelResolution {
  /**
   * Create a DeviceModelResolution.
   * @property {string} [height]
   * @property {string} [width]
   * @property {string} [ppi]
   */
  constructor() {
  }

  /**
   * Defines the metadata of DeviceModelResolution
   *
   * @returns {object} metadata of DeviceModelResolution
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DeviceModel_resolution',
      type: {
        name: 'Composite',
        className: 'DeviceModelResolution',
        modelProperties: {
          height: {
            required: false,
            serializedName: 'height',
            type: {
              name: 'String'
            }
          },
          width: {
            required: false,
            serializedName: 'width',
            type: {
              name: 'String'
            }
          },
          ppi: {
            required: false,
            serializedName: 'ppi',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DeviceModelResolution;