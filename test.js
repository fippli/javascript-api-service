const apiUtils = require("./index");

//
// Test build url
//
test('Build url with endpoint "/".', () => {
    expect(apiUtils.buildUrl("/")).toBe("/");
});

test('Build url with endpoint "/" and options {host:"localhost", port:3000}.', () => {
    expect(apiUtils.buildUrl("/", {host:"localhost", port:3000})).toBe("http://localhost:3000/");
});

test('Build url with endpoint "/api/v1/test".', () => {
    expect(apiUtils.buildUrl("/api/v1/test")).toBe("/api/v1/test");
});

test('Build url with endpoint "/api/v1/test" and options {host:"localhost", port:8000}.', () => {
    expect(apiUtils.buildUrl("/api/v1/test", {host:"localhost", port:8000})).toBe("http://localhost:8000/api/v1/test");
});

test('Build url with endpoint "/" and options {host:"www.test.com"}.', () => {
    expect(apiUtils.buildUrl("/", {host:"www.test.com"})).toBe("http://www.test.com/");
});


test('Build url with endpoint "/test/test" and options {host:"www.test.com"}.', () => {
    expect(apiUtils.buildUrl("/test/test", {host:"www.test.com"})).toBe("http://www.test.com/test/test");
});


//
// Test create headers
//
test('Create headers without parameters.', () => {
    expect(apiUtils.createHeaders()).toEqual(
        expect.objectContaining({"Content-type":"application/json"})
    )
});

test('Create headers with parameter {"test-header": "test-value"}.', () => {
    expect(apiUtils.createHeaders({"test-header": "test-value"})).toEqual(
        expect.objectContaining({
            "Content-type":"application/json",
            "test-header":"test-value"
        })
    )
});