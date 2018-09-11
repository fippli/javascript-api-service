/*
    JavaScript API utilities.
    Make http requests.
 */

// ----------------------------------------------------------------------------------------------------
// Module options
let options = {
    logResponse: false,
    logRequest: false,
};

const setModuleOption = ( option, value ) => {
    options[ option ] = value;
};

// ----------------------------------------------------------------------------------------------------
// Handle options

const defaultHeaders = { "Content-type": "application/json" };
const createHeaders = ( headersObject = {} ) => {
    return Object.assign( {}, defaultHeaders, headersObject )
};

let defaultOptions = {
    mode: "cors",
    credentials: "include",
};

// [!] Mutating the defaulOption
const configureRequestOptions = newOptions => {
    defaultOptions = newOptions;
};

// [!] Mutating defaultOptions
const corsConfig = ( host, port ) => {
    defaultOptions = {
        host: host,
        port: port,
        mode: "cors",
        credentials: "include",
    }
};

//
// Used to build the URL of the request.
//
const buildUrl = ( endpoint, options = defaultOptions ) => {
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
        if ( options.logResponse ) {
            responseJson.then( responseData => {
                console.log( "Receiving response", responseData );
            })
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

const GET = ( endpoint = "/", options = defaultOptions ) => {
    if ( options.logRequest ) {
        console.log( "[GET] Requesting", buildUrl( endpoint, options ) )
    }
    return fetch( buildUrl( endpoint, options ), {
        method: "GET",
        credentials: options.credentials,
    } )
    .then( verifyResponse, handleError );
};

const PUT = ( endpoint, data, options = defaultOptions ) => {
    if ( options.logRequest ) {
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

const POST = ( endpoint, data, options = defaultOptions ) => {
    if ( options.logRequest ) {
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

const DELETE = ( endpoint, data, options = defaultOptions ) => {
    if ( options.logRequest ) {
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
};