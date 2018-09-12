/*
    JavaScript API utilities.
    Make http requests, upload files (and nothing more)...
 */

// ----------------------------------------------------------------------------------------------------
// Module options
const moduleOptions = {
    logResponse: false,
    logRequest: false,
};

const setModuleOption = ( option, value ) => {
    moduleOptions[ option ] = value;
};

// ----------------------------------------------------------------------------------------------------
// Handle options

const defaultHeaders = { "Content-type": "application/json" };
const createHeaders = ( headersObject = {} ) => {
    return Object.assign( {}, defaultHeaders, headersObject )
};

let defaultRequestOptions = {
    mode: "cors",
    credentials: "include",
};

// [!] Mutating the defaulOptions
const configureRequestOptions = newOptions => {
    defaultRequestOptions = newOptions;
};

// [!] Mutating defaultRequestOptions
const corsConfig = ( host, port ) => {
    defaultRequestOptions.host = host;
    defaultRequestOptions.port = port;
    defaultRequestOptions.mode = "cors";
    defaultRequestOptions.credential = "include";
};

//
// Used to build the URL of the request.
//
const buildUrl = ( endpoint, options = defaultRequestOptions ) => {
    // Port is required for localhost
    if ( options.host === "localhost" && !options.port ) {
        throw new Error( `You need to specify a port when host is set to "localhost".` )
    }
    return `${ options.host ? `http://${options.host}${options.port ? `:${options.port}` : ""}` : ""}${endpoint}`
};

// ----------------------------------------------------------------------------------------------------
// Handle response

const verifyResponse = response => {
    const contentType = response.headers.get( "content-type" );
    if ( contentType && contentType.indexOf( "application/json" ) !== -1 ) {
        const responseJson = response.json();
        if ( moduleOptions.logResponse ) {
            responseJson.then( responseData => {
                console.log( "Receiving response", responseData );
            } )
        }
        return responseJson;
    } else {
        handleError( "Response was not JSON" );
    }
};

const handleError = error => {
    const errorMessage = `
        Error [@fippli/api-utils]:
        API request failed: 
        ${error}
    `;
    throw new Error( errorMessage );
};

// ----------------------------------------------------------------------------------------------------
// METHODS

const GET = ( endpoint = "/", options = defaultRequestOptions ) => {
    if ( moduleOptions.logRequest ) {
        console.log( "[GET] Requesting", buildUrl( endpoint, options ) )
    }
    return fetch( buildUrl( endpoint, options ), {
        method: "GET",
        credentials: options.credentials,
    } )
    .then( verifyResponse, handleError );
};

const PUT = ( endpoint, data, options = defaultRequestOptions ) => {
    if ( moduleOptions.logRequest ) {
        console.log( "[PUT] Requesting", buildUrl( endpoint, options ), "with data:", data )
    }
    return fetch( buildUrl( endpoint, options ), {
        method: "PUT",
        headers: createHeaders( options.headers ),
        body: JSON.stringify( data ),
        mode: options.mode,
        credentials: options.credentials,
    } )
    .then( verifyResponse, handleError );
};

const POST = ( endpoint, data, options = defaultRequestOptions ) => {
    if ( moduleOptions.logRequest ) {
        console.log( "[POST] Requesting", buildUrl( endpoint, options ), "with data:", data )
    }
    return fetch( buildUrl( endpoint, options ), {
        method: "POST",
        headers: createHeaders( options.headers ),
        body: JSON.stringify( data ),
        mode: options.mode,
        credentials: options.credentials,
    } )
    .then( verifyResponse, handleError );
};

const DELETE = ( endpoint, data, options = defaultRequestOptions ) => {
    if ( moduleOptions.logRequest ) {
        console.log( "[DELETE] Requesting", buildUrl( endpoint, options ), "with data:", data )
    }
    return fetch( buildUrl( endpoint, options ), {
        method: "DELETE",
        headers: createHeaders( options.headers ),
        body: JSON.stringify( data ),
        mode: options.mode,
        credentials: options.credentials,
    } )
    .then( verifyResponse, handleError );
};

// ----------------------------------------------------------------------------------------------------
// File upload

// Outputs progress to the callback function progress
// Sets done to thefunction done.
const fileUpload = ( endpoint, data, progress, done, options = defaultRequestOptions ) => {

    const xhr = new XMLHttpRequest();
    xhr.open( "POST", buildUrl( endpoint, options ), true );
    xhr.withCredentials = true;

    xhr.onreadystatechange = () => {

        if ( xhr.readyState === XMLHttpRequest.DONE ) {

            if ( xhr.status === 200 ) {

                const responseJson = JSON.parse( xhr.responseText );
                done( responseJson, true );

            } else {

                done( xhr.responseText, false );

            }
        }

    };

    xhr.onerror = () => {
        done( xhr.responseText, false );
    };

    xhr.upload.onprogress = ( e ) => {
        if ( e.lengthComputable ) {
            if ( moduleOptions.logRequest ) { console.log(
                `File upload progress: ${(e.loaded/e.total)*100}%
                Uploaded: ${e.loaded}
                Total: ${e.total}
                `
            )}
            progress( ( e.loaded / e.total ) * 100 );
        }
    };

    xhr.send( data );

};

// ----------------------------------------------------------------------------------------------------
// Module exports

module.exports = {
    GET: GET,
    PUT: PUT,
    POST: POST,
    DELETE: DELETE,
    buildUrl: buildUrl,
    createHeaders: createHeaders,
    configureRequestOptions: configureRequestOptions,
    corsConfig: corsConfig,
    setModuleOption: setModuleOption,
    fileUpload: fileUpload,
};