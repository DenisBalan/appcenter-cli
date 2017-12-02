/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the OrgUserPermissionResponse class.
 * @constructor
 * @member {string} orgId The unique id (UUID) of the org
 * 
 * @member {string} userRole The user role for the org. Possible values
 * include: 'admin', 'collaborator'
 * 
 */
function OrgUserPermissionResponse() {
}

/**
 * Defines the metadata of OrgUserPermissionResponse
 *
 * @returns {object} metadata of OrgUserPermissionResponse
 *
 */
OrgUserPermissionResponse.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'OrgUserPermissionResponse',
    type: {
      name: 'Composite',
      className: 'OrgUserPermissionResponse',
      modelProperties: {
        orgId: {
          required: true,
          serializedName: 'orgId',
          type: {
            name: 'String'
          }
        },
        userRole: {
          required: true,
          serializedName: 'userRole',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = OrgUserPermissionResponse;