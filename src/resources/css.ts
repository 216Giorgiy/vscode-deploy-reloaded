/**
 * This file is part of the vscode-deploy-reloaded distribution.
 * Copyright (c) Marcel Joachim Kloubert.
 * 
 * vscode-deploy-reloaded is free software: you can redistribute it and/or modify  
 * it under the terms of the GNU Lesser General Public License as   
 * published by the Free Software Foundation, version 3.
 *
 * vscode-deploy-reloaded is distributed in the hope that it will be useful, but 
 * WITHOUT ANY WARRANTY; without even the implied warranty of 
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU 
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */


/**
 * AUTO GENERATED CODE
 */

import * as deploy_helpers from '../helpers';
import * as deploy_resources from '../resources';
import * as ZLib from 'zlib';


const REPOSITORY = {
    // START: style.css
    "style.css": new Buffer("H4sIAAAAAAAACn1OSwrCMBDdB3KHbNxZaP0h9TRpMpjBNFOmUSvi3R0wcacDb/O+o1Xo1iZsBFvBTrAXHMxTKyM3EHvgZqCcaexNNy1mpojeYArAmE8fm4tguRd3DoXxOE/RPoSL5C6FHC2fMX3bjtNShAxLbjw4YpuRUm+uSWYjJiiGO/ocZL9tV8K8tNLK1h8dRZJxBv+rLZEUiVCTfaAbcM3/Ga+ZN5WXlOAnAQAA", 'base64'),
    // END: style.css

};


/**
 * A possible value for a repository key.
 */
export type RepositoryKey = "style.css";


/**
 * Tries to return content from 'REPOSITORY' constant.
 * 
 * @param {RepositoryKey} key The key inside the constant.
 * 
 * @return {Promise<Buffer>} The promise with the data (if available).
 */
export function getContent(key: RepositoryKey): Promise<Buffer> {
    return new Promise<Buffer>((resolve, reject) => {
        let data: Buffer;

        for (const P in REPOSITORY) {
            if (P === key) {
                data = REPOSITORY[P];
                break;
            }
        }

        if (data) {
            ZLib.gunzip(data, (err, uncompressedData) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(uncompressedData);
                }
            });
        }
        else {
            resolve(data);
        }
    });
}

/**
 * Tries to return content from 'REPOSITORY' constant.
 * 
 * @param {RepositoryKey} key The key inside the constant.
 * 
 * @return Buffer The data (if available).
 */
export function getContentSync(key: RepositoryKey): Buffer {
    let data: Buffer;

    for (const P in REPOSITORY) {
        if (P === key) {
            data = REPOSITORY[P];
            break;
        }
    }

    if (data) {
        return ZLib.gunzipSync(data);
    }

    return data;
}

/**
 * Tries to return content from 'REPOSITORY' constant as string.
 * 
 * @param {RepositoryKey} key The key inside the constant.
 * @param {string} [enc] The encoding to use. Default: 'utf8'.
 * 
 * @return {Promise<string>} The promise with the data (if available).
 */
export async function getStringContent(key: RepositoryKey, enc?: string): Promise<string> {
    enc = deploy_helpers.normalizeString(enc);
    if ('' === enc) {
        enc = 'utf8';
    }

    const DATA = await getContent(key);
    if (DATA) {
        return deploy_resources.replaceTemplateVars(
            DATA.toString(enc)
        );
    }
}

/**
 * Tries to return content from 'REPOSITORY' constant as string.
 * 
 * @param {RepositoryKey} key The key inside the constant.
 * @param {string} [enc] The encoding to use. Default: 'utf8'.
 * 
 * @return {string} The data (if available).
 */
export function getStringContentSync(key: RepositoryKey, enc?: string): string {
    enc = deploy_helpers.normalizeString(enc);
    if ('' === enc) {
        enc = 'utf8';
    }

    const DATA = getContentSync(key);
    if (DATA) {
        return deploy_resources.replaceTemplateVars(
            DATA.toString(enc)
        );
    }
}