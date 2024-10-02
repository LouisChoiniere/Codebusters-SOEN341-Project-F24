/* tslint:disable */
/* eslint-disable */
/**
 * API, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  TeamDTO,
} from '../models/index';
import {
    TeamDTOFromJSON,
    TeamDTOToJSON,
} from '../models/index';

/**
 * 
 */
export class StudentApi extends runtime.BaseAPI {

    /**
     */
    async apiStudentGetGroupsAndTeamsGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<TeamDTO>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/Student/GetGroupsAndTeams`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TeamDTOFromJSON));
    }

    /**
     */
    async apiStudentGetGroupsAndTeamsGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<TeamDTO>> {
        const response = await this.apiStudentGetGroupsAndTeamsGetRaw(initOverrides);
        return await response.value();
    }

}
